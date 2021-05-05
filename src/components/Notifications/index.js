import React from "react";

import "./index.scss";
import "../../styles/reprise.scss";

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

export const Notifications = (props) => {
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
          {props.notifications.map((notification, index) => {
            return (
              <li className="notifications__item item_close" key={index}>
                <h3 className="notifications__title">{notification.header}</h3>

                <p className="notifications__description">{notification.text}</p>

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
            );
          })}
        </ul>
      </div>
    </>
  );
};
