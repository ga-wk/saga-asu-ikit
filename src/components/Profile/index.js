import React from "react";

import "./index.scss";
import "../../styles/reprise.scss";

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

export const  Profile = (props) => {
    return (
      <>
        <h1 className="main-title">
          <a className="main-title__link">Профиль</a>
        </h1>
        <div className="profile">
          <div className="profile-info">
            <span className="profile-info__name">{`${props.student.surname} ${props.student.name} ${props.student.patronymic}`}</span>
            <ul className="profile-info__list">
              <li className="profile-info__item">
                <label
                  className="profile-info__label"
                  htmlFor="birthday"
                  onClick={clickProfileLabel}
                >
                  День Рождения
                </label>
                <div className="profile-info__inner-wrapper">
                  <span className="profile-info__desc profile-info__desc--show">
                    {`${props.student.birthday}`}
                  </span>
                  <input
                    className="profile-info__input profile-info__input--birthday profile-info__input--closed"
                    type="date"
                    id="birthday"
                    name="birthday"
                    value={`${props.student.birthday}`}
                  />
                </div>
              </li>
              <li className="profile-info__item">
                <label
                  className="profile-info__label"
                  htmlFor="email"
                  onClick={clickProfileLabel}
                >
                  Email
                </label>
                <div className="profile-info__inner-wrapper">
                  <span className="profile-info__desc profile-info__desc--show">
                    {`${props.student.email}`}
                  </span>
                  <input
                    className="profile-info__input profile-info__input--email profile-info__input--closed"
                    type="text"
                    id="email"
                    name="email"
                    value={`${props.student.email}`}
                  />
                </div>
              </li>
              <li className="profile-info__item">
                <label
                  className="profile-info__label"
                  htmlFor="mail-send"
                  onClick={clickProfileLabel}
                >
                  Уведомления на почту
                </label>
                <div className="profile-info__inner-wrapper">
                  <span className="profile-info__desc profile-info__desc--show">
                    {props.student.notification
                      ? "Отправлять"
                      : "Не отправлять "}
                  </span>
                  <select
                    className="profile-info__input profile-info__input--email-send profile-info__input--closed"
                    id="mail-send"
                    name="mail-send"
                    defaultValue={
                      props.student.notification
                        ? "Отправлять"
                        : "Не отправлять "
                    }
                  >
                    <option value="Отправлять">Отправлять</option>
                    <option value="Не отправлять">Не отправлять</option>
                  </select>
                </div>
              </li>
              <li className="profile-info__item">
                <label
                  className="profile-info__label"
                  htmlFor="start-page"
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
            <div className="buttons-wrapper">
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
  
};
