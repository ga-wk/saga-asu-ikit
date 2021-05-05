import React, { Fragment, useEffect, useState } from "react";

import { Notifications } from "../components/Notifications";
import { Header } from "../components/Header";
import { Cookie } from "../libs/cookie";
import { postData } from "../libs/requests";
import { Redirect } from "react-router";
import { studentGet, systemNotification } from "../strings/urls";
import { login } from "../strings/links";
import { token } from "../strings/public";

export const NotificationsPage = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [notifications, setNotifications] = useState(null);
  const [user, setUser] = useState(null);

  const data = {
    text: "",
    userToken: Cookie.getCookie(token),
  };

  let promiseUser = null;
  let promiseNotifications = null;

  useEffect(() => {
    async function fetchAPI() {
      promiseUser = postData(studentGet, data);
      if (promiseUser !== undefined) {
        await promiseUser
          .then((res) => res.json())
          .then((result) => setUser(result));
      } else {
        setIsLoaded(false);
      }

      promiseNotifications = postData(systemNotification, data);
      if (promiseNotifications !== undefined) {
        await promiseNotifications
          .then((res) => res.json())
          .then((result) => {
            setNotifications(result);
            setIsLoaded(true);
          });
      } else {
        setIsLoaded(false);
      }
    }
    
    fetchAPI();
  }, [isLoaded]);

  if (!Cookie.getCookie(token)) return <Redirect to={login} />;

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <Fragment>
        <Header
          firstName={`${user.student.surname}`}
          fullName={`${user.student.surname} ${user.student.name[0]}. ${user.student.patronymic[0]}.`}
        />
        <Notifications notifications={notifications.notifications} />
      </Fragment>
    );
  }
};
