import React, { Fragment, useState, useEffect } from "react";

import { RecordBook } from "../components/RecordBook";
import { Header } from "../components/Header";
import { Cookie } from "../libs/cookie";
import { postData } from "../libs//requests";
import { Redirect } from "react-router";

export const RecordBookPage = () => {
  const [user, setUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");

  const url = "http://193.218.136.174:8080/cabinet/rest/student/get";
  const body = {
    text: "",
    userToken: Cookie.getCookie("usertoken"),
  };

  useEffect(() => {
    const p = postData(url, body);
    if (p) {
      p.then((res) => res.json())
        .then((res) => {
          setUser(res);
          setIsLoaded(true);
        })
        .catch((error) => {
          setError(error);
          setIsLoaded(true);
        });
    }
  }, [isLoaded]);

  if (!Cookie.getCookie("usertoken")) return <Redirect to="/login" />;

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
        <RecordBook user={user}/>
      </Fragment>
    );
  }
};
