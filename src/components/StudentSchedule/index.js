import React, { useEffect, useState } from "react";
import "./index.scss";

import { postData } from "../../libs/requests";
import { Cookie } from "../../libs/cookie";
import { token } from "../../strings/public";
import { studentSemesters } from "../../strings/urls";
import { filterSemestersByUserId } from "../Public";

function ScheduleHeader() {
  return (
    <div className="semester__header container">
      <div className="semester">
        <input
          className="date-choice"
          type="date"
          id="start"
          name="trip-start"
          min="2018-01-01"
          max="2021-06-30"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <button className="semester__helper">
        <svg
          width="19"
          height="25"
          viewBox="0 0 19 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.9042 20.249H8.69673C7.84636 20.249 7.15527 20.9401 7.15527 21.7905V23.4578C7.15527 24.3082 7.84636 24.9993 8.69673 24.9993H9.9042C10.7546 24.9993 11.4457 24.3082 11.4457 23.4578V21.7905C11.4457 20.9376 10.7546 20.249 9.9042 20.249Z"
            fill="#222322"
          />
          <path
            d="M1.39061 7.34251L3.61803 7.61998C4.32454 7.70733 4.99507 7.30141 5.24942 6.63601C5.57055 5.79591 6.01758 5.13308 6.59049 4.65009C7.40235 3.9667 8.41199 3.62244 9.61947 3.62244C10.8706 3.62244 11.8674 3.95129 12.6073 4.60641C13.3472 5.2641 13.7146 6.05025 13.7146 6.97256C13.7146 7.63539 13.5065 8.2417 13.0903 8.79149C12.8206 9.14089 11.9908 9.87566 10.606 10.9984C9.21869 12.1211 8.2964 13.1333 7.83397 14.0324C7.36125 14.9522 7.19683 15.9721 7.15572 16.9947C7.11978 17.8707 7.81855 18.6003 8.69719 18.6003H9.95605C10.7576 18.6003 11.4204 17.9863 11.4924 17.1899C11.5438 16.617 11.6388 16.1828 11.7827 15.8874C12.0242 15.3813 12.6485 14.7133 13.6504 13.8809C15.5901 12.2752 16.8541 11.0061 17.4476 10.0709C18.0385 9.13832 18.3365 8.14921 18.3365 7.10359C18.3365 5.21529 17.5324 3.55822 15.9215 2.13493C14.3133 0.711643 12.1449 0 9.42167 0C6.83201 0 4.74333 0.701367 3.15048 2.10667C1.79399 3.30387 0.969305 4.72202 0.678996 6.35854C0.589052 6.8364 0.915328 7.28342 1.39061 7.34251Z"
            fill="#222322"
          />
        </svg>
      </button>
    </div>
  );
}

function StudentScheduleFragments(props) {
  const pageWidth = props.pageWidth;

  const desktopWidth = 1200;
  if (pageWidth <= desktopWidth) {
    return MobileFragment(props);
  } else {
    return DesktopFragment(props);
  }
}

function showHideDesc(event) {
  const li = event.target.parentElement;
  console.log(li);
  const desc = li.querySelector(".week__day-desc");

  desc.classList.toggle("show");
}

function MobileFragment() {
  return (
    <div>
      <ScheduleHeader />
      <div className="events-calendar__semestr-date schedule-calendar">
        <p>
          Неделя: <span>нечетная</span>
        </p>
        <p>
          <span>23.11.2020 - 29.11.2020</span>
        </p>

        <ul className="events-calendar__list week-list">
          <li className="week__item">
            <div className="week__day" onClick={showHideDesc}>
              Понедельник
            </div>

            <div className="week__day-desc">
              <ul className="week__day-schedule">
                <li>
                  <p className="schedule__time">15.55-17.30</p>
                  <p className="schedule__lesson">Язык программирования C#</p>
                  <p className="schedule__teacher">Чикизов А.А. (Прак.)</p>
                  <p className="schedule__place">ЭИОС</p>
                </li>
                <li>
                  <p className="schedule__time">15.55-17.30</p>
                  <p className="schedule__lesson">Язык программирования C#</p>
                  <p className="schedule__teacher">Чикизов А.А. (Прак.)</p>
                  <p className="schedule__place">ЭИОС</p>
                </li>
              </ul>
            </div>
          </li>
          <li className="week__item">
            <div className="week__day" onClick={showHideDesc}>
              Вторник
            </div>

            <div className="week__day-desc">
              <ul className="week__day-schedule">
                <li>
                  <p className="schedule__time">15.55-17.30</p>
                  <p className="schedule__lesson">Язык программирования C#</p>
                  <p className="schedule__teacher">Чикизов А.А. (Прак.)</p>
                  <p className="schedule__place">ЭИОС</p>
                </li>
                <li>
                  <p className="schedule__time">15.55-17.30</p>
                  <p className="schedule__lesson">Язык программирования C#</p>
                  <p className="schedule__teacher">Чикизов А.А. (Прак.)</p>
                  <p className="schedule__place">ЭИОС</p>
                </li>
              </ul>
            </div>
          </li>
          <li className="week__item">
            <div className="week__day" onClick={showHideDesc}>
              Среда
            </div>

            <div className="week__day-desc">
              <ul className="week__day-schedule">
                <li>
                  <p className="schedule__time">15.55-17.30</p>
                  <p className="schedule__lesson">Язык программирования C#</p>
                  <p className="schedule__teacher">Чикизов А.А. (Прак.)</p>
                  <p className="schedule__place">ЭИОС</p>
                </li>
                <li>
                  <p className="schedule__time">15.55-17.30</p>
                  <p className="schedule__lesson">Язык программирования C#</p>
                  <p className="schedule__teacher">Чикизов А.А. (Прак.)</p>
                  <p className="schedule__place">ЭИОС</p>
                </li>
              </ul>
            </div>
          </li>
          <li className="week__item">
            <div className="week__day" onClick={showHideDesc}>
              Четверг
            </div>

            <div className="week__day-desc">
              <ul className="week__day-schedule">
                <li>
                  <p className="schedule__time">15.55-17.30</p>
                  <p className="schedule__lesson">Язык программирования C#</p>
                  <p className="schedule__teacher">Чикизов А.А. (Прак.)</p>
                  <p className="schedule__place">ЭИОС</p>
                </li>
                <li>
                  <p className="schedule__time">15.55-17.30</p>
                  <p className="schedule__lesson">Язык программирования C#</p>
                  <p className="schedule__teacher">Чикизов А.А. (Прак.)</p>
                  <p className="schedule__place">ЭИОС</p>
                </li>
              </ul>
            </div>
          </li>
          <li className="week__item">
            <div className="week__day" onClick={showHideDesc}>
              Пятница
            </div>

            <div className="week__day-desc">
              <ul className="week__day-schedule">
                <li>
                  <p className="schedule__time">15.55-17.30</p>
                  <p className="schedule__lesson">Язык программирования C#</p>
                  <p className="schedule__teacher">Чикизов А.А. (Прак.)</p>
                  <p className="schedule__place">ЭИОС</p>
                </li>
                <li>
                  <p className="schedule__time">15.55-17.30</p>
                  <p className="schedule__lesson">Язык программирования C#</p>
                  <p className="schedule__teacher">Чикизов А.А. (Прак.)</p>
                  <p className="schedule__place">ЭИОС</p>
                </li>
              </ul>
            </div>
          </li>
          <li className="week__item">
            <div className="week__day" onClick={showHideDesc}>
              Суббота
            </div>

            <div className="week__day-desc">
              <ul className="week__day-schedule">
                <li>
                  <p className="schedule__time">15.55-17.30</p>
                  <p className="schedule__lesson">Язык программирования C#</p>
                  <p className="schedule__teacher">Чикизов А.А. (Прак.)</p>
                  <p className="schedule__place">ЭИОС</p>
                </li>
                <li>
                  <p className="schedule__time">15.55-17.30</p>
                  <p className="schedule__lesson">Язык программирования C#</p>
                  <p className="schedule__teacher">Чикизов А.А. (Прак.)</p>
                  <p className="schedule__place">ЭИОС</p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

function DesktopFragment({ user, parity, currentWeek, onChangeDateHandler }) {
  let weekStr = convertMondaySundayToString(currentWeek);

  return (
    <div className="schedule-wrapper">
      <ul className="schedule-header">
        <li className="schedule-header__item">
          <b>Группа:</b>
          <span>{user.student.groupname.trim()}</span>
        </li>
        <li className="schedule-header__item">
          <b>неделя:</b>
          <span>{parity === 1 ? 'нечетная' : 'четная'} {weekStr}</span>
        </li>
        <li className="schedule-header__item">
          <b>Семестр:</b>
          <span>2020-2021 осень</span>
        </li>
        <li className="schedule-header__item">
          <b>Дата:</b>
          <input type="date" onChange={onChangeDateHandler} />
          <button className="reset-date">Вернуться к начальной дате</button>
        </li>
      </ul>
      <table className="table">
        <tbody>
          <tr className="table__header">
            <th className="table__header-item">Время</th>
            <th className="table__header-item">Понедельник</th>
            <th className="table__header-item">Вторник</th>
            <th className="table__header-item">Среда</th>
            <th className="table__header-item">Четверг</th>
            <th className="table__header-item">Пятница</th>
            <th className="table__header-item">Суббота</th>
          </tr>
          <tr className="schedule-main-table__tr">
            <td className="schedule-main-table__td">8.30 - 10.05</td>
            <td className="schedule-main-table__td"></td>
            <td className="schedule-main-table__td schedule-main-table__td--free"></td>
            <td className="schedule-main-table__td"></td>
            <td className="schedule-main-table__td"></td>
            <td className="schedule-main-table__td"></td>
            <td className="schedule-main-table__td"></td>
          </tr>
          <tr className="schedule-main-table__tr schedule-main-table__tr--even">
            <td className="schedule-main-table__td">10.15 - 11.50</td>
            <td className="schedule-main-table__td"></td>
            <td className="schedule-main-table__td schedule-main-table__td--free"></td>
            <td className="schedule-main-table__td">
              <div className="schedule-current-lesson">
                <p>Модели стохастических объектов</p>
                <p>Воронов В.С. (прак)</p>
                <p>УЛК 119</p>
              </div>
            </td>
            <td className="schedule-main-table__td"></td>
            <td className="schedule-main-table__td">
              <div className="schedule-current-lesson">
                <p>Модели стохастических объектов</p>
                <p>Воронов В.С. (прак)</p>
                <p>УЛК 119</p>
              </div>
            </td>
            <td className="schedule-main-table__td">
              <div className="schedule-current-lesson">
                <p>Модели стохастических объектов</p>
                <p>Воронов В.С. (прак)</p>
                <p>УЛК 119</p>
              </div>
            </td>
          </tr>
          <tr className="schedule-main-table__tr">
            <td className="schedule-main-table__td">12:00 - 13.35</td>
            <td className="schedule-main-table__td"></td>
            <td className="schedule-main-table__td schedule-main-table__td--free"></td>
            <td className="schedule-main-table__td"></td>
            <td className="schedule-main-table__td"></td>
            <td className="schedule-main-table__td"></td>
            <td className="schedule-main-table__td">
              <div className="schedule-current-lesson">
                <p>Модели стохастических объектов</p>
                <p>Воронов В.С. (прак)</p>
                <p>УЛК 119</p>
              </div>
            </td>
          </tr>
          <tr className="schedule-main-table__tr schedule-main-table__tr--even">
            <td className="schedule-main-table__td">14:10 - 15.45</td>
            <td className="schedule-main-table__td">
              <div className="schedule-current-lesson">
                <p>Модели стохастических объектов</p>
                <p>Воронов В.С. (прак)</p>
                <p>УЛК 119</p>
              </div>
            </td>
            <td className="schedule-main-table__td schedule-main-table__td--free"></td>
            <td className="schedule-main-table__td"></td>
            <td className="schedule-main-table__td"></td>
            <td className="schedule-main-table__td"></td>
            <td className="schedule-main-table__td"></td>
          </tr>
          <tr className="schedule-main-table__tr">
            <td className="schedule-main-table__td">15:55 - 17.30</td>
            <td className="schedule-main-table__td">
              <div className="schedule-current-lesson">
                <p>Модели стохастических объектов</p>
                <p>Воронов В.С. (прак)</p>
                <p>УЛК 119</p>
              </div>
            </td>
            <td className="schedule-main-table__td schedule-main-table__td--free"></td>
            <td className="schedule-main-table__td">
              <div className="schedule-current-lesson">
                <p>Модели стохастических объектов</p>
                <p>Воронов В.С. (прак)</p>
                <p>УЛК 119</p>
              </div>
            </td>
            <td className="schedule-main-table__td">
              <div className="schedule-current-lesson">
                <p>Модели стохастических объектов</p>
                <p>Воронов В.С. (прак)</p>
                <p>УЛК 119</p>
              </div>
            </td>
            <td className="schedule-main-table__td">
              <div className="schedule-current-lesson">
                <p>Модели стохастических объектов</p>
                <p>Воронов В.С. (прак)</p>
                <p>УЛК 119</p>
              </div>
            </td>
            <td className="schedule-main-table__td">
              <div className="schedule-current-lesson">
                <p>Модели стохастических объектов</p>
                <p>Воронов В.С. (прак)</p>
                <p>УЛК 119</p>
              </div>
            </td>
          </tr>
          <tr className="schedule-main-table__tr schedule-main-table__tr--even">
            <td className="schedule-main-table__td">17:40 - 19.15</td>
            <td className="schedule-main-table__td">
              <div className="schedule-current-lesson">
                <p>Модели стохастических объектов</p>
                <p>Воронов В.С. (прак)</p>
                <p>УЛК 119</p>
              </div>
            </td>
            <td className="schedule-main-table__td schedule-main-table__td--free"></td>
            <td className="schedule-main-table__td"></td>
            <td className="schedule-main-table__td"></td>
            <td className="schedule-main-table__td"></td>
            <td className="schedule-main-table__td"></td>
          </tr>
          <tr className="schedule-main-table__tr">
            <td className="schedule-main-table__td">19:25 - 21:00</td>
            <td className="schedule-main-table__td"></td>
            <td className="schedule-main-table__td schedule-main-table__td--free"></td>
            <td className="schedule-main-table__td"></td>
            <td className="schedule-main-table__td"></td>
            <td className="schedule-main-table__td"></td>
            <td className="schedule-main-table__td"></td>
          </tr>
          <tr className="schedule-main-table__tr schedule-main-table__tr--even">
            <td className="schedule-main-table__td">21:10 - 22:40</td>
            <td className="schedule-main-table__td"></td>
            <td className="schedule-main-table__td schedule-main-table__td--free"></td>
            <td className="schedule-main-table__td"></td>
            <td className="schedule-main-table__td"></td>
            <td className="schedule-main-table__td"></td>
            <td className="schedule-main-table__td"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

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

function getMondaySunday(d) {
  let _date = d.split('-').map(item => Number(item))
  d = new Date(_date[0], _date[1] - 1, _date[2]);
  var day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6 : 1), // adjust when day is sunday
    sunday = d.getDate() - day + 7;
  return [new Date(d.setDate(diff)), new Date(d.setDate(sunday))];
}

function convertMondaySundayToString(MondaySunday) {
  const checkLength = MondaySunday[0].getMonth().toString().length <= 1;

  let dateStr;

  if (checkLength) {
    dateStr = `(${MondaySunday[0].getDate()}.0${Number(MondaySunday[0].getMonth()) + 1}.${MondaySunday[0].getFullYear()} - ${MondaySunday[1].getDate()}.0${Number(MondaySunday[0].getMonth()) + 1}.${MondaySunday[1].getFullYear()})`;
  } else {
    dateStr = `(${MondaySunday[0].getDate()}.${Number(MondaySunday[0].getMonth()) + 1}.${MondaySunday[0].getFullYear()} - ${MondaySunday[1].getDate()}.${Number(MondaySunday[0].getMonth()) + 1}.${MondaySunday[1].getFullYear()})`;
  }

  return dateStr
}


function StudentSchedule({ user }) {
  const [currentDate, setCurrentDate] = useState(null);
  const [parity, setParity] = useState(0);
  const [currentWeek, setCurrentWeek] = useState(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [isSemLoaded, setIsSemLoaded] = useState(false);

  const [error, setError] = useState("");

  const [isCurrentSemLoaded, setIsCurrentSemLoaded] = useState(false);

  function onChangeDateHandler(e) {
    const date = e.target.value
    setCurrentDate(date);
    setParity(calculateParity(date));
    setCurrentWeek(getMondaySunday(date))
  }

  function calculateCurrentDate() {
    let _date = new Date();
    let date = `${_date.getFullYear()}-${Number(_date.getMonth()) + 1}-${_date.getDate()}`;
    return date;
  }

  function calculateParity(_date) {
    let date = _date.split("-");

    const parity =
      getWeekNum(new Date(date[0], date[1], date[2]))[1] % 2 === 0 ? 2 : 1;

    return parity;
  }

  let body = {
    text: "",
    userToken: Cookie.getCookie(token),
  };

  useEffect(() => {
    const promise = postData(studentSemesters, body);
    if (promise) {
      promise
        .then((res) => res.json())
        .then((result) => {
          return new Promise((resolve) => {
            const filteredSems = filterSemestersByUserId(result, user);
            setIsSemLoaded(true);
            resolve(filteredSems);
          }).catch(error => { setError(error) });
        })
        .then((result) => {
          return new Promise(() => {
            setIsCurrentSemLoaded(true);
          }).catch(error => { setError(error) });;
        })
    }
  }, [isLoaded, isSemLoaded, isCurrentSemLoaded]);

  useEffect(() => {
    setCurrentDate(calculateCurrentDate());
    setParity(calculateParity(calculateCurrentDate()));
    setCurrentWeek(getMondaySunday(calculateCurrentDate()))
    setIsLoaded(true);
  }, [isLoaded]);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded || !isCurrentSemLoaded || !isSemLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <>
        <h1 className="main-title">
          <a className="main-title__link">Расписание студента</a>
        </h1>
        <StudentScheduleFragments
          user={user}
          currentDate={currentDate}
          parity={parity}
          currentWeek={currentWeek}
          pageWidth={document.documentElement.scrollWidth}
          onChangeDateHandler={onChangeDateHandler}
        />
      </>
    );
  }
}

export default StudentSchedule;

/*
  todo:
  Узнать текущий семестр и сохранить, вывести на экран
  Сделать кнопку возврата к текущей дате
  Реквест расписания по дню
  Отображение расписания
  -
  Мобильная версия
  Выходные
*/
