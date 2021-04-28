import React from "react";

import "./index.scss";

export default function Calendar({ month, year }) {
  function showInfo(event) {
    const list = document.querySelector(".events-calendar__info");
    list.classList.toggle("show");
  }

  // генерация календаря, 6 недель
  let curDay = 0 - new Date(year - 1, month, 1).getDay() + 1;
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
