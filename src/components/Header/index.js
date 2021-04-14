import React, { useState } from "react";

import "./index.scss";

import { sfuLogoHeaderMobile } from "../../assets/images";
import { Cookie } from "../../libs/cookie.js";

function closedAll() {
  const sidebar = document.querySelector(".main-header__sidebar");
  const subnav = document.querySelector(".sidebar__subnav");
  const help = document.querySelector(".main-header__help");

  if (sidebar.classList.contains("sidebar--opened")) {
    sidebar.classList.remove("sidebar--opened");
    sidebar.classList.add("sidebar--closed");
  }
  if (subnav.classList.contains("sidebar__item--opened")) {
    subnav.classList.remove("sidebar__item--opened");
    subnav.classList.add("sidebar__item--closed");
  }
  if (help.classList.contains("help--open")) {
    help.classList.remove("help--open");
    help.classList.add("help--closed");
  }
}

function sidebarClick(e) {
  e.preventDefault();
  const sidebar = document.querySelector(".main-header__sidebar");
  if (sidebar.classList.contains("sidebar--closed")) {
    closedAll();
    sidebar.classList.remove("sidebar--closed");
    sidebar.classList.add("sidebar--opened");
  } else if (sidebar.classList.contains("sidebar--opened")) {
    sidebar.classList.remove("sidebar--opened");
    sidebar.classList.add("sidebar--closed");
  }
}

function sublistClick(e) {
  e.preventDefault();
  const subnav = document.querySelector(".sidebar__subnav");
  if (subnav.classList.contains("sidebar__item--closed")) {
    subnav.classList.remove("sidebar__item--closed");
    subnav.classList.add("sidebar__item--opened");
  } else if (subnav.classList.contains("sidebar__item--opened")) {
    subnav.classList.remove("sidebar__item--opened");
    subnav.classList.add("sidebar__item--closed");
  }
}

function helpClick(e) {
  e.preventDefault();
  const help = document.querySelector(".main-header__help");
  if (help.classList.contains("help--closed")) {
    closedAll();
    help.classList.remove("help--closed");
    help.classList.add("help--open");
  } else if (help.classList.contains("help--open")) {
    help.classList.remove("help--open");
    help.classList.add("help--closed");
  }
}

function logOut() {
  Cookie.deleteCookie("usertoken");
  localStorage.clear();
  document.location.reload();
}

export const Header = (props) => {
  const [width, setWidth] = useState(document.documentElement.scrollWidth);

  const isWidth = (minWidth, tag1, tag2) => {
    return width > minWidth ? tag1 : tag2;
  };

  const updateDimensions = () => {
    setWidth(document.documentElement.scrollWidth);
  };

  window.addEventListener("resize", updateDimensions);

  return (
    <header className="main-header ">
      <div className="main-header__top">
        <div className="main-header__inner-wrapper">
          <div className="main-header__logo-block">
            <img
              className="main-header__logo-image"
              src={sfuLogoHeaderMobile}
              width="50"
              height="50"
              alt="СФУ ЛОГО"
            />
            {isWidth(
              855,
              <span className="main-header__logo-text">Dec.sfu</span>,
              null
            )}
          </div>

          <div className="main-header__profile" onClick={helpClick}>
            <span className="main-header__student-name">
              {isWidth(855, `${props.fullName}`, `${props.firstName}`)}
            </span>
            <span className="main-header__student-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 0.431641C8.955 0.431641 0 9.38664 0 20.4316C0 31.4766 8.955 40.4316 20 40.4316C31.045 40.4316 40 31.4766 40 20.4316C40 9.38664 31.045 0.431641 20 0.431641ZM32.9217 30.94C32.4867 29.9633 31.6067 29.2883 29.8033 28.8716C25.9817 27.99 22.4233 27.2166 24.1483 23.9633C29.39 14.06 25.5367 8.76497 20 8.76497C14.3533 8.76497 10.5933 14.2633 15.8517 23.9633C17.6283 27.2366 13.9383 28.0083 10.1967 28.8716C8.39 29.2883 7.51667 29.9683 7.085 30.9483C4.74333 28.0766 3.33333 24.4166 3.33333 20.4316C3.33333 11.2416 10.81 3.76497 20 3.76497C29.19 3.76497 36.6667 11.2416 36.6667 20.4316C36.6667 24.4133 35.2583 28.07 32.9217 30.94Z"
                  fill="#575757"
                />
              </svg>
            </span>
            <div className="main-header__help help help--closed">
              <ul className="help__list">
                <li className="help__item">
                  <button className="help__link">Помощь</button>
                </li>
                <li className="help__item">
                  <button className="help__link">Сообщить о проблеме</button>
                </li>
                <li className="help__item">
                  <button className="help__link" onClick={logOut}>
                    Выход
                  </button>
                </li>
              </ul>
              <button className="help__toggle">Закрыть</button>
            </div>
          </div>
        </div>
      </div>
      <aside className="main-header__sidebar sidebar sidebar--closed">
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <a className="sidebar__link" href="/">
              Профиль
            </a>
          </li>
          <li className="sidebar__item">
            <a className="sidebar__link" href="/notifications">
              Уведомления
            </a>
          </li>
          <li className="sidebar__item sidebar__subnav sidebar__item--closed">
            <button
              className="sidebar__link sidebar__sublink"
              href="#"
              onClick={sublistClick}
            >
              Студент
            </button>
            <ul className="sidebar__sublist">
              <li className="sidebar__item sidebar__subitem">
                <a className="sidebar__link" href="/recordbook">
                  Зачетная книжка
                </a>
              </li>
              <li className="sidebar__item sidebar__subitem">
                <a className="sidebar__link" href="/eventscalendar">
                  Календарь событий
                </a>
              </li>
              <li className="sidebar__item sidebar__subitem">
                <a className="sidebar__link" href="/ordering">
                  Заказ справок
                </a>
              </li>
              <li className="sidebar__item sidebar__subitem">
                <a className="sidebar__link" href="#">
                  Опросник
                </a>
              </li>
              <li className="sidebar__item sidebar__subitem">
                <a className="sidebar__link" href="/listoforders">
                  Список приказов
                </a>
              </li>
              <li className="sidebar__item sidebar__subitem">
                <a className="sidebar__link" href="/schedule">
                  Расписание студентов
                </a>
              </li>
              <li className="sidebar__item sidebar__subitem">
                <a className="sidebar__link" href="/academicplan">
                  Учебный план
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <button
          className="sidebar__toggle"
          type="button"
          onClick={sidebarClick}
        >
          Закрыть
        </button>
      </aside>
    </header>
  );
};
