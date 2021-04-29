import e from "cors";
import React, { useEffect, useState } from "react";
import { Cookie } from "../../libs/cookie";
import { postData } from "../../libs/requests";
import { studentShedule } from "../../strings/urls";
import { token } from "../../strings/public";

import "./index.scss";

export default function Calendar({ month, year, updateShedule }) {
  function getWeekNum(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    // Return array of year and week number
    return [d.getUTCFullYear(), weekNo];
  }

  function showInfo(e) {
    const date = e.target.getAttribute("date").split("-");

    const parity =
      getWeekNum(new Date(date[0], date[1], date[2]))[1] % 2 === 0 ? 2 : 1;

    const data = {
      week: parity,
      date: date.join("-"),
      userToken: Cookie.getCookie(token),
    };
    
    let promiseShedule = postData(studentShedule, data);
    if (promiseShedule !== undefined) {
      promiseShedule
        .then((res) => res.json())
        .then((result) => {
          const block = [];
          block.push(
            <p className="events-calendar__info-title">
              Расписание на 2020-06-12
            </p>
          );
          console.log(data);
          console.log('неделя',result)
          if (result.status[0] === "error") {
            if (data.week === 2) {
              data.week = 1;
            } else {
              data.week = 2;
            }

            promiseShedule = postData(studentShedule, data);
            promiseShedule
              .then((res) => res.json())
              .then((result) => {
                console.log(data);
                console.log('обратная неделя', result)
                result.subjects.map((el) => {
                  block.push(
                    <li className="lessons__item">
                      <p>{el.subjectName}</p>
                    </li>
                  );
                });
                updateShedule(block);
              });
          } else {
            result.subjects.map((el) => {
              block.push(
                <li className="lessons__item">
                  <p>{el.subjectName}</p>
                </li>
              );
            });
          }

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
    let curDate = new Date(year - 1, month, curDay);
    calendar.push(
      <th
        onClick={showInfo}
        date={`${year}-${curDate.getMonth()}-${curDate.getDate()}`}
      >
        {curDate.getDate()}
      </th>
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
