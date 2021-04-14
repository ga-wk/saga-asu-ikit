import React, { useEffect, useState } from "react";

import "./index.scss";
import "../../styles/reprise.scss";
import { Cookie } from "../../libs/cookie";
import { Redirect } from "react-router";
import { postData } from "../../libs/requests";

function itemClick(e) {
  e.preventDefault();
  if (e.target.parentElement.classList.contains("item_close")) {
    e.target.parentElement.classList.add("item_open");
    e.target.parentElement.classList.remove("item_close");
  } else if (e.target.parentElement.classList.contains("item_open")) {
    e.target.parentElement.classList.add("item_close");
    e.target.parentElement.classList.remove("item_open");
  }
}

export const Notifications = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const url =
    "http://193.218.136.174:8080/cabinet/rest/notification/systemNotification";

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
            setNotifications(result);
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
    //   if(notifications.msg === "Wrong token"){
    //     Cookie.deleteCookie("usertoken")
    //   }
      console.log(notifications)
    return (
      <>
        <h1 className="main-title">
          <a className="main-title__link">Уведомления</a>
        </h1>

        <div className="notifications container">
          <ul
            className="notifications__list"
            onClick={itemClick}
            onFocus={itemClick}
          >
            <li className="notifications__item item_close">
              <h3 className="notifications__title">
                КОНКУРС НА КРАЕВЫЕ ИМЕННЫЕ СТИПЕНДИИ СТУДЕНТАМ!
              </h3>

              <p className="notifications__description">
                Студенты! Внимание! Объявлен конкурс на Краевые именные
                стипендии студентам вузов. В конкурсе могут принять участие
                студенты очной формы обучения, независимо от основы обучения
                (бюджетной или договорной). Пакеты документов кандидатов для
                участия в конкурсе принимаются в часы приема в УОО (УЛК207,
                Сомова Марина Валериевна) в срок до 10.10.2020 г.
                (включительно). Подробнее о стипендиях можно узнать
                http://edu.sfu-kras.ru/grants. * Повторное присуждение краевых
                именных стипендий одному и тому же лицу не допускается! **
                Предоставляемые НЕ в полном объеме пакеты документов
                рассматриваться НЕ будут!
              </p>

              <div className="reference">
                <ul className="reference__list">
                  <li className="reference__item">
                    <button className="reference__item-doc btn">
                      Инф_письмо.pdf
                    </button>
                  </li>
                  <li className="reference__item">
                    <button className="reference__item-doc btn">
                      Список публикаций.doc
                    </button>
                  </li>
                  <li className="reference__item">
                    <button className="reference__item-doc btn">
                      Форма (достижения).doc
                    </button>
                  </li>
                  <li className="reference__item">
                    <a className="reference__item-link btn" href="">
                      Ссылка
                    </a>
                  </li>
                </ul>

                <button className="reference__chat btn">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse cx="9" cy="7" rx="9" ry="7" fill="#70AEDE" />
                    <path
                      d="M2 14.5C2.33333 14 3 12.2 3 11L7 12.5L6 14L4.5 15.5L2.5 16H0L1 15.5L2 14.5Z"
                      fill="#70AEDE"
                    />
                    <circle cx="5" cy="7" r="1" fill="white" />
                    <circle cx="9" cy="7" r="1" fill="white" />
                    <circle cx="13" cy="7" r="1" fill="white" />
                  </svg>
                </button>
              </div>
            </li>

            <li className="notifications__item item_close">
              <h3 className="notifications__title">
                КОНКУРС НА КРАЕВЫЕ ИМЕННЫЕ СТИПЕНДИИ СТУДЕНТАМ!
              </h3>

              <p className="notifications__description">
                Студенты! Внимание! Объявлен конкурс на Краевые именные
                стипендии студентам вузов. В конкурсе могут принять участие
                студенты очной формы обучения, независимо от основы обучения
                (бюджетной или договорной). Пакеты документов кандидатов для
                участия в конкурсе принимаются в часы приема в УОО (УЛК207,
                Сомова Марина Валериевна) в срок до 10.10.2020 г.
                (включительно). Подробнее о стипендиях можно узнать
                http://edu.sfu-kras.ru/grants. * Повторное присуждение краевых
                именных стипендий одному и тому же лицу не допускается! **
                Предоставляемые НЕ в полном объеме пакеты документов
                рассматриваться НЕ будут!
              </p>

              <div className="reference">
                <ul className="reference__list">
                  <li className="reference__item">
                    <button className="reference__item-doc btn">
                      Инф_письмо.pdf
                    </button>
                  </li>
                  <li className="reference__item">
                    <button className="reference__item-doc btn">
                      Список публикаций.doc
                    </button>
                  </li>
                  <li className="reference__item">
                    <button className="reference__item-doc btn">
                      Форма (достижения).doc
                    </button>
                  </li>
                  <li className="reference__item">
                    <a
                      className="reference__item-link btn"
                      target="_blank"
                      href=""
                    >
                      Ссылка
                    </a>
                  </li>
                </ul>

                <button className="reference__chat btn">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse cx="9" cy="7" rx="9" ry="7" fill="#70AEDE" />
                    <path
                      d="M2 14.5C2.33333 14 3 12.2 3 11L7 12.5L6 14L4.5 15.5L2.5 16H0L1 15.5L2 14.5Z"
                      fill="#70AEDE"
                    />
                    <circle cx="5" cy="7" r="1" fill="white" />
                    <circle cx="9" cy="7" r="1" fill="white" />
                    <circle cx="13" cy="7" r="1" fill="white" />
                  </svg>
                </button>
              </div>
            </li>

            <li className="notifications__item item_close">
              <h3 className="notifications__title">
                КОНКУРС НА КРАЕВЫЕ ИМЕННЫЕ СТИПЕНДИИ СТУДЕНТАМ!
              </h3>

              <p className="notifications__description">
                Студенты! Внимание! Объявлен конкурс на Краевые именные
                стипендии студентам вузов. В конкурсе могут принять участие
                студенты очной формы обучения, независимо от основы обучения
                (бюджетной или договорной). Пакеты документов кандидатов для
                участия в конкурсе принимаются в часы приема в УОО (УЛК207,
                Сомова Марина Валериевна) в срок до 10.10.2020 г.
                (включительно). Подробнее о стипендиях можно узнать
                http://edu.sfu-kras.ru/grants. * Повторное присуждение краевых
                именных стипендий одному и тому же лицу не допускается! **
                Предоставляемые НЕ в полном объеме пакеты документов
                рассматриваться НЕ будут!
              </p>

              <div className="reference">
                <ul className="reference__list">
                  <li className="reference__item">
                    <button className="reference__item-doc btn">
                      Инф_письмо.pdf
                    </button>
                  </li>
                  <li className="reference__item">
                    <button className="reference__item-doc btn">
                      Список публикаций.doc
                    </button>
                  </li>
                  <li className="reference__item">
                    <button className="reference__item-doc btn">
                      Форма (достижения).doc
                    </button>
                  </li>
                  <li className="reference__item">
                    <a
                      className="reference__item-link btn"
                      target="_blank"
                      href=""
                    >
                      Ссылка
                    </a>
                  </li>
                </ul>

                <button className="reference__chat btn">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse cx="9" cy="7" rx="9" ry="7" fill="#70AEDE" />
                    <path
                      d="M2 14.5C2.33333 14 3 12.2 3 11L7 12.5L6 14L4.5 15.5L2.5 16H0L1 15.5L2 14.5Z"
                      fill="#70AEDE"
                    />
                    <circle cx="5" cy="7" r="1" fill="white" />
                    <circle cx="9" cy="7" r="1" fill="white" />
                    <circle cx="13" cy="7" r="1" fill="white" />
                  </svg>
                </button>
              </div>
            </li>

            <li className="notifications__item item_close">
              <h3 className="notifications__title">
                КОНКУРС НА КРАЕВЫЕ ИМЕННЫЕ СТИПЕНДИИ СТУДЕНТАМ!
              </h3>

              <p className="notifications__description">
                Студенты! Внимание! Объявлен конкурс на Краевые именные
                стипендии студентам вузов. В конкурсе могут принять участие
                студенты очной формы обучения, независимо от основы обучения
                (бюджетной или договорной). Пакеты документов кандидатов для
                участия в конкурсе принимаются в часы приема в УОО (УЛК207,
                Сомова Марина Валериевна) в срок до 10.10.2020 г.
                (включительно). Подробнее о стипендиях можно узнать
                http://edu.sfu-kras.ru/grants. * Повторное присуждение краевых
                именных стипендий одному и тому же лицу не допускается! **
                Предоставляемые НЕ в полном объеме пакеты документов
                рассматриваться НЕ будут!
              </p>

              <div className="reference">
                <ul className="reference__list">
                  <li className="reference__item">
                    <button className="reference__item-doc btn">
                      Инф_письмо.pdf
                    </button>
                  </li>
                  <li className="reference__item">
                    <button className="reference__item-doc btn">
                      Список публикаций.doc
                    </button>
                  </li>
                  <li className="reference__item">
                    <button className="reference__item-doc btn">
                      Форма (достижения).doc
                    </button>
                  </li>
                  <li className="reference__item">
                    <a
                      className="reference__item-link btn"
                      target="_blank"
                      href=""
                    >
                      Ссылка
                    </a>
                  </li>
                </ul>

                <button className="reference__chat btn">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse cx="9" cy="7" rx="9" ry="7" fill="#70AEDE" />
                    <path
                      d="M2 14.5C2.33333 14 3 12.2 3 11L7 12.5L6 14L4.5 15.5L2.5 16H0L1 15.5L2 14.5Z"
                      fill="#70AEDE"
                    />
                    <circle cx="5" cy="7" r="1" fill="white" />
                    <circle cx="9" cy="7" r="1" fill="white" />
                    <circle cx="13" cy="7" r="1" fill="white" />
                  </svg>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </>
    );
  }
};
