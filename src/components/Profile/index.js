import React from "react";

import "./index.scss";
import "../../styles/reprise.scss";
import { Cookie } from "../../libs/cookie.js";
import { Header } from "../Header";
import { postData } from "../../libs/requests";

function clickProfileLabel(e) {
  const profileInfoItem = e.target.parentElement;
  const input = profileInfoItem.querySelector(".profile-info__input");
  const desc = profileInfoItem.querySelector(".profile-info__desc");

  if (input.classList.contains("profile-info__input--closed")) {
    desc.classList.remove("profile-info__desc--show");
    desc.classList.add("profile-info__desc--hide");

    input.classList.remove("profile-info__input--closed");
    input.classList.add("profile-info__input--opened");
  } else if (input.classList.contains("profile-info__input--opened")) {
    desc.classList.remove("profile-info__desc--hide");
    desc.classList.add("profile-info__desc--show");

    input.classList.remove("profile-info__input--opened");
    input.classList.add("profile-info__input--closed");
  }
}

export const Profile = () => {
  if (!Cookie.getCookie("usertoken")) {
    document.location.href = "/login";
  }
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [user, setUser] = React.useState(null);

  const url = "http://193.218.136.174:8080/cabinet/rest/student/get"

  const data = {
    text: "",
    userToken: Cookie.getCookie("usertoken"),
  };

  React.useEffect(() => {
    const promise = postData(url ,data);
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

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <>
        <Header firstName={`${user.student.surname}`} fullName={`${user.student.surname} ${user.student.name[0]}. ${user.student.patronymic[0]}.`}/>
        <h1 className="main-title">
          <a className="main-title__link">Профиль</a>
        </h1>
        <div className="profile">
          <div className="profile-info">
            <span className="profile-info__name">{`${user.student.surname} ${user.student.name} ${user.student.patronymic}`}</span>
            <ul className="profile-info__list">
              <li className="profile-info__item">
                <label
                  className="profile-info__label"
                  for="birthday"
                  onClick={clickProfileLabel}
                >
                  День Рождения
                </label>
                <div className="profile-info__inner-wrapper">
                  <span className="profile-info__desc profile-info__desc--show">
                    {`${user.student.birthday}`}
                  </span>
                  <input
                    className="profile-info__input profile-info__input--birthday profile-info__input--closed"
                    type="date"
                    id="birthday"
                    name="birthday"
                    value={`${user.student.birthday}`}
                  />
                </div>
              </li>
              <li className="profile-info__item">
                <label
                  className="profile-info__label"
                  for="mail"
                  onClick={clickProfileLabel}
                >
                  Email
                </label>
                <div className="profile-info__inner-wrapper">
                  <span className="profile-info__desc profile-info__desc--show">
                    {`${user.student.email}`}
                  </span>
                  <input
                    className="profile-info__input profile-info__input--email profile-info__input--closed"
                    type="text"
                    id="mail"
                    name="mail"
                    value={`${user.student.email}`}
                  />
                </div>
              </li>
              <li className="profile-info__item">
                <label
                  className="profile-info__label"
                  for="mail-send"
                  onClick={clickProfileLabel}
                >
                  Уведомления на почту
                </label>
                <div className="profile-info__inner-wrapper">
                  <span className="profile-info__desc profile-info__desc--show">
                    {user.student.notification? "Отправлять" : "Не отправлять "}
                  </span>
                  <select
                    className="profile-info__input profile-info__input--email-send profile-info__input--closed"
                    id="mail-send"
                    name="mail-send"
                    defaultValue={user.student.notification? "Отправлять" : "Не отправлять "}
                  >
                    <option  value="Отправлять">Отправлять</option>
                    <option value="Не отправлять">Не отправлять</option>
                  </select>
                </div>
              </li>
              <li className="profile-info__item">
                <label
                  className="profile-info__label"
                  for="start-page"
                  onClick={clickProfileLabel}
                >
                  Начальная страница
                </label>
                <div className="profile-info__inner-wrapper">
                  <span className="profile-info__desc profile-info__desc--show">
                    Профиль
                  </span>
                  <select
                    className="profile-info__input profile-info__input--start-page profile-info__input--closed"
                    id="start-page"
                    name="start-page"
                  >
                    <option value="Профиль">Профиль</option>
                    <option value="Зачетная книжка">Зачетная книжка</option>
                    <option value="Уведомления">Уведомления</option>
                  </select>
                </div>
              </li>
            </ul>
            <div class="buttons-wrapper">
              <button className="profile-info__button profile-info__button-material">
                Мат. помощь
              </button>
              <button className="profile-info__button profile-info__button-social">
                Соц. стипендия
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
};
