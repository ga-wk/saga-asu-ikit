import React, { Fragment, useEffect, useState } from "react";
import { Redirect } from "react-router";
import { Header } from "../components/Header";

import Ordering from "../components/Ordering/index";
import { Cookie } from "../libs/cookie";
import { postData } from "../libs/requests";

export const OrderingPage = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState(null);

  const url = "http://193.218.136.174:8080/cabinet/rest/student/get";

  const data = {
    text: "",
    userToken: Cookie.getCookie("usertoken"),
  };

  useEffect(() => {
    const promise = postData(url, data);
    if (promise !== undefined) {
      promise
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

  if (!Cookie.getCookie("usertoken")) return <Redirect to="/login" />;

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {

    console.log(user)
    return (
      <Fragment>
        <Header
          firstName={`${user.student.surname}`}
          fullName={`${user.student.surname} ${user.student.name[0]}. ${user.student.patronymic[0]}.`}
        />
        <Ordering notification={user.student.notification} email={user.student.email}/>
      </Fragment>
    );
  }
};
