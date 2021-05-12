import React, { Fragment, useState, useEffect } from "react";
import { Redirect } from "react-router";

import { Questionnaire } from "../components/Questionnaire";
import { Header } from "../components/Header";
import { Cookie } from "../libs/cookie.js";
import { postData } from "../libs/requests";
import { login } from "../strings/links";
import { studentGet } from "../strings/urls";
import { token } from "../strings/public";

export const QuestionnairePage = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState(false);

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
            setIsLoaded(true);
          },
          (error) => {
            setError(error);
            setIsLoaded(true);
          }
        );
    } else {
      setIsLoaded(false);
    }
  }, [isLoaded]);

  if (!Cookie.getCookie(token)) return <Redirect to={login} />;

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded || !user) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <Fragment>
        <Header
          firstName={`${user.student.surname}`}
          fullName={`${user.student.surname} ${user.student.name[0]}. ${user.student.patronymic[0]}.`}
        />
        <Questionnaire id={props.match.params.id} />
      </Fragment>
    );
  }
};
