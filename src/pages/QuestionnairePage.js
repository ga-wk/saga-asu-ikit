import React, { Fragment, useState, useEffect } from "react";
import { Redirect } from "react-router";

import { Questionnaire } from "../components/Questionnaire";
import { Header } from "../components/Header";
import { Cookie } from "../libs/cookie.js";
import { postData } from "../libs/requests";
import { login } from "../strings/links";
import { questionnaireOne, studentGet } from "../strings/urls";
import { token } from "../strings/public";

export const QuestionnairePage = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState(false);
  const [questionnaire, setQuestionnaire] = useState(false);
  const studentData = {
    text: "",
    userToken: Cookie.getCookie(token),
  };

  const questionnaireData = {
    userToken: Cookie.getCookie(token),
    id: props.match.params.id,
  };

  useEffect(() => {
    const promiseStudent = postData(studentGet, studentData);
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

    const promiseQuestionnaire = postData(questionnaireOne, questionnaireData);
    if (promiseQuestionnaire !== undefined) {
      promiseQuestionnaire
        .then((res) => res.json())
        .then(
          (result) => {
            setQuestionnaire(result);
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
  } else if (!isLoaded || !user || !questionnaire) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <Fragment>
        <Header
          firstName={`${user.student.surname}`}
          fullName={`${user.student.surname} ${user.student.name[0]}. ${user.student.patronymic[0]}.`}
        />
        <Questionnaire questionnaire={questionnaire} />
      </Fragment>
    );
  }
};
