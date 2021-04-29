import React, { useEffect, useState } from "react";
import { Cookie } from "../../libs/cookie";
import { postData } from "../../libs/requests";
import { studentSchedule } from "../../strings/links";
import { token } from "../../strings/public";

import "./index.scss";

export default function Calendar({ month, year, updateShedule }) {
  function showInfo(event) {
    const data = {
      week: 2,
      date: "2020-06-12",
      userToken: Cookie.getCookie(token),
    };

    const promiseShedule = postData(studentSchedule, data);
    if (promiseShedule !== undefined) {
      promiseShedule
        .then((res) => res.json())
        .then((result) => {
            console.log(result)
          const block = [];
          block.push(
            <p className="events-calendar__info-title">
              Расписание на 2020-06-12
            </p>
          );

          
            result.subjects.map((el) => {
              block.push(
                <li className="lessons__item">
                  <p>{el.subjectName}</p>
                </li>
              );
            }
          );
          updateShedule(block);
        });
    }

    const list = document.querySelector(".events-calendar__info");
    list.classList.toggle("show");
  }

  //проверка на весокосность
  const isLeap = new Date(year, 1, 29).getMonth() == 1;

  // генерация календаря, 6 недель
  let curDay = 0 - new Date(year - 1, month, 1).getDay();

  if (!isLeap) curDay++;

  const calendar = [];
  while (calendar.length < 42) {
    calendar.push(
      <th onClick={showInfo}>{new Date(year - 1, month, curDay).getDate()}</th>
    );
    curDay++;
  }

  // деление календаря на недели
  const rows = [];
  for (let i = 0; i < 42; i = i + 7) {
    rows.push(
      <tr className="app-calendar__days">{calendar.slice(i, i + 7)}</tr>
    );
  }

  return (
    <div id="app-calendar">
      <table>
        <tbody>
          <tr className="app-calendar__week">
            <th>пн</th>
            <th>вт</th>
            <th>ср</th>
            <th>чт</th>
            <th>пт</th>
            <th>сб</th>
            <th>вс</th>
          </tr>
          {rows}
        </tbody>
      </table>
    </div>
  );
}
