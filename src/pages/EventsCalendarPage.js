import React, { Fragment, useEffect, useState } from 'react';

import { EventsCalendar } from '../components/EventsCalendar';
import { Header } from "../components/Header";
import { Cookie } from "../libs/cookie";
import { postData } from "../libs//requests";
import { Redirect } from "react-router";
import { token } from '../strings/public';
import { login } from '../strings/links';
import { studentGet } from '../strings/urls';

export const EventsCalendarPage = () => {
  const [user, setUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");

  const body = {
    text: "",
    userToken: Cookie.getCookie(token),
  };

  useEffect(() => {
    const p = postData(studentGet, body);
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
        <EventsCalendar user={user}/>
      </Fragment>
    )
  }
  }
  