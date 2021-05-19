import React from "react";

import "./index.scss";

import { questionnaire } from "../../strings/links";

function itemClick(e) {
  e.preventDefault();
  e.target.parentElement.classList.toggle("item_close");
}

export const Questionnaires = ({ questionnaires }) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <>
      <h1 className="main-title">
        <a className="main-title__link">Студент/Опросник</a>
      </h1>

      <div className="questionnaire container">
        <ul className="questionnaire__list">
          {questionnaires.questionnaire.map((el) => (
            <li className="questionnaire__item item_close">
              <h3 className="questionnaire__title" onClick={itemClick}>
                {el.subject}
              </h3>
              <p className="questionnaire__date">
                Дата:{[
                  el.posted.split(" ")[2],
                  String(months.indexOf(el.posted.split(" ")[1]) + 1).length === 1
                    ? `0${months.indexOf(el.posted.split(" ")[1]) + 1}`
                    : months.indexOf(el.posted.split(" ")[1]) + 1,
                  el.posted.split(" ")[5],
                ].join(".")}
              </p>
              <a
                className="questionnaire__link btn"
                href={questionnaire + "/" + el.id}>
                Пройти опрос
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
