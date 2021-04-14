import React, { Fragment, useEffect, useState } from "react";

import { Notifications } from "../components/Notifications";
import { Header } from "../components/Header";
import { Cookie } from "../libs/cookie";
import { postData } from "../libs/requests";
import { Redirect } from "react-router";

export const NotificationsPage = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [notifications, setNotifications] = useState(null);
  const [user, setUser] = useState(null);
  const urlUser = "http://193.218.136.174:8080/cabinet/rest/student/get";
  const urlNotifications =
    "http://193.218.136.174:8080/cabinet/rest/notification/systemNotification";

  const data = {
    text: "",
    userToken: Cookie.getCookie("usertoken"),
  };

  useEffect(() => {
    const promiseUser = postData(urlUser, data);
    if (promiseUser !== undefined) {
      promiseUser
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
    
    const promiseNotifications = postData(urlNotifications, data);
    if (promiseNotifications !== undefined) {
      promiseNotifications
        .then((res) => res.json())
        .then(
          (result) => {
            setNotifications(result);
            setIsLoaded(true);
          },
          (error) => {
            setError(error);
            setIsLoaded(false);
          }
        );
    } else {
      setIsLoaded(false);
    }

    // Promise.all([ promiseNotifications, promiseUser])
    //   .then(() => {
    //     setIsLoaded(true);
    //   })
    //   .catch(() => {
    //     setIsLoaded(false);
    //   });

  }, [isLoaded]);

  if (!Cookie.getCookie("usertoken")) return <Redirect to="/login" />;

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    console.log(user)
console.log(notifications)
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
