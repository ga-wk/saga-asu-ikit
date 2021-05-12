import React, { Fragment } from "react";

import { Profile } from "../components/Profile";
import { Header } from "../components/Header";
import { Cookie } from "../libs/cookie.js";
import { postData } from "../libs/requests";
import { Redirect } from "react-router";
import { login } from "../strings/links";
import { studentGet } from "../strings/urls";
import { token } from "../strings/public";

export const ProfilePage = () => {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [user, setUser] = React.useState(null);

  const data = {
    text: "",
    userToken: Cookie.getCookie(token),
  };

  React.useEffect(() => {
    const promise = postData(studentGet, data);
    if (promise !== undefined) {
      promise
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result);
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
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <Fragment>
        <Header
          firstName={`${user.student.surname}`}
          fullName={`${user.student.surname} ${user.student.name[0]}. ${user.student.patronymic[0]}.`}
        />
        <Profile student={user.student} />
      </Fragment>
    );
  }
};
