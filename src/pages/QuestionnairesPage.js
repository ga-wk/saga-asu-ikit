import React, { Fragment, useState, useEffect } from "react";
import { Redirect } from "react-router";

import { Questionnaires } from "../components/Questionnaires";
import { Header } from "../components/Header";
import { Cookie } from "../libs/cookie.js";
import { postData } from "../libs/requests";
import { login } from "../strings/links";
import { questionnaireList, studentGet } from "../strings/urls";
import { token } from "../strings/public";

export const QuestionnairesPage = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState(false);
  const [questionnaires, setQuestionnaires] = useState(false);

  const data = {
    text: "",
    userToken: Cookie.getCookie(token),
  };

  useEffect(() => {
    const promiseStudent = postData(studentGet, data);
    if (promiseStudent !== undefined) {
      promiseStudent
        .then((res) => res.json())
        .then(
          (result) => {
            setUser(result);
          },
          (error) => {
            setError(error);
          }
        );
    } else {
      setIsLoaded(false);
    }

    const promiseQuestionnaire = postData(questionnaireList, data);
    if (promiseQuestionnaire !== undefined) {
      promiseQuestionnaire
        .then((res) => res.json())
        .then(
          (result) => {
            setQuestionnaires(result);
          },
          (error) => {
            setError(error);
          }
        );
    } else {
      setIsLoaded(false);
    }

    Promise.all([promiseStudent, promiseQuestionnaire])
      .then(() => {
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error);
        setIsLoaded(true);
      });
  }, [isLoaded]);

  if (!Cookie.getCookie(token)) return <Redirect to={login} />;

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded || !user || !questionnaires) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <Fragment>
        <Header
          firstName={`${user.student.surname}`}
          fullName={`${user.student.surname} ${user.student.name[0]}. ${user.student.patronymic[0]}.`}
        />
        <Questionnaires questionnaires={questionnaires} />
      </Fragment>
    );
  }
};
