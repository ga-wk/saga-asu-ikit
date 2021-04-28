import React, { useState, useEffect } from "react";

import { filterSemestersByUserId, Semester } from "../Public";
import { Header } from "../Header";
import SemesterContext from "../../context/SemesterContext";
import Calendar from "../Calendar";

import "./index.scss";
import { postData } from "../../libs/requests";
import { Cookie } from "../../libs/cookie";

function showHideDate(event) {
  const li = event.target.parentElement;
  const date = li.querySelector(".week__day-list");
  const desc = li.querySelector(".week__day-desc");

  date.classList.toggle("show");
  desc.classList.remove("show");
}

function showHideDesc(event) {
  const li = event.target.parentElement;
  console.log(li);
  const desc = li.querySelector(".week__day-desc");

  desc.classList.toggle("show");
}

function MobileFragment() {
  return (
    <>
      <section className="events-calendar">
        <div className="events-calendar__semestr-date">
          <p>
            Начало семестра: <span>01.09.2020</span>
          </p>
          <p>
            Окончание семестра: <span>30.01.2021</span>
          </p>
        </div>

        <div className="events-calendar__calendar">
          <span className="events-calendar__month">Ноябрь</span>
        </div>

        <ul className="events-calendar__list week-list">
          <li className="week__item">
            <div className="week__day" onClick={showHideDate}>
              Понедельник
            </div>

            <ul className="week__day-list">
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  26
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  02
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  09
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  16
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  23
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  30
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
            </ul>
          </li>
          <li className="week__item">
            <div className="week__day" onClick={showHideDate}>
              Вторник
            </div>

            <ul className="week__day-list">
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  26
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  02
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  09
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  16
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  23
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  30
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
            </ul>
          </li>
          <li className="week__item">
            <div className="week__day" onClick={showHideDate}>
              Среда
            </div>

            <ul className="week__day-list">
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  26
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  02
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  09
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  16
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  23
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  30
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
            </ul>
          </li>
          <li className="week__item">
            <div className="week__day" onClick={showHideDate}>
              Четверг
            </div>

            <ul className="week__day-list">
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  26
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  02
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  09
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  16
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  23
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  30
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
            </ul>
          </li>
          <li className="week__item">
            <div className="week__day" onClick={showHideDate}>
              Пятница
            </div>

            <ul className="week__day-list">
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  26
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  02
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  09
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  16
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  23
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  30
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
            </ul>
          </li>
          <li className="week__item">
            <div className="week__day" onClick={showHideDate}>
              Суббота
            </div>

            <ul className="week__day-list">
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  26
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  02
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  09
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  16
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  23
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  30
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
            </ul>
          </li>
          <li className="week__item">
            <div className="week__day" onClick={showHideDate}>
              Воскресенье
            </div>

            <ul className="week__day-list">
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  26
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  02
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  09
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  16
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  23
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
              <li className="week__day-list__item">
                <div className="week__day-date" onClick={showHideDesc}>
                  30
                </div>
                <div className="week__day-desc">
                  Профессионально-ориентированный иностраный язык - Сплепченко
                  НН.,Шарова А.В.(Эиос)
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </>
  );
}

function DesktopFragment(
  currentSemester,
  month,
  year,
  updateCurYear,
  updateCurMonth
) {
const [shedule, setShedule] = useState(null);
  const dateofbegin = currentSemester.dateofbegin.split("-");
  const dateofend = currentSemester.dateofend.split("-");
  const updateShedule = (value) => setShedule(value);
  //   const [curMonth, setCurMonth] = useState(Number(dateofbegin[1]));
  //   const [curYear, setCurYear] = useState(Number(dateofbegin[0]));

  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const [monthName, setMonthName] = useState(monthNames[month]);

  function incMouth() {
    if (month > 10) {
      updateCurYear(year + 1);
      updateCurMonth(0);
    } else {
      updateCurMonth(month + 1);
    }
    setMonthName(monthNames[month]);
  }

  function decMouth() {
    if (month < 1) {
      updateCurYear(year - 1);
      updateCurMonth(11);
    } else {
      updateCurMonth(month - 1);
    }
    setMonthName(monthNames[month]);
  }

  return (
    <>
      <section className="events-calendar">
        <div className="events-calendar__semestr-date">
          <p>
            Начало семестра: <span>{currentSemester.dateofbegin}</span>
          </p>
          <p>
            Окончание семестра: <span>{currentSemester.dateofend}</span>
          </p>
        </div>

        <div className="events-calendar__calendar">
          <button
            className="events-calendar__btn"
            onClick={decMouth}
            disabled={
              year === Number(dateofbegin[0]) &&
              month === Number(dateofbegin[1])
            }
          />
          <span className="events-calendar__month">{monthName}</span>
          <button
            className="events-calendar__btn"
            onClick={incMouth}
            disabled={
              year === Number(dateofend[0]) && month === Number(dateofend[1])
            }
          />
        </div>

        <div className="events-calendar__wrapper">
          <div className="events-calendar__days">
            <Calendar month={month} year={year} updateShedule={updateShedule}/>
          </div>
          <div className="events-calendar__dict">
            <ul className="dict-list">
              <li className="dict__item"> - Все занятия пропущены</li>
              <li className="dict__item dict__item--no-write">
                {" "}
                - Староста не заполнял журнал посещаемости
              </li>
              <li className="dict__item dict__item--pass">
                {" "}
                - Есть пропущенные занятия
              </li>
              <li className="dict__item dict__item--100">
                {" "}
                - 100%-ая посещаемость{" "}
              </li>
              <li className="dict__item dict__item--no-lessons">
                {" "}
                - Занятий не было
              </li>
            </ul>
          </div>
        </div>
        <div className="events-calendar__info">
            
          {/* <p className="events-calendar__info-title">
            Расписание на 05.12.2020
          </p> */}
          <ul className="events-calendar__info-lessons lessons__list">
              {shedule?<div>{shedule}</div>:'Загрузка'}
            {/* <li className="lessons__item">
              <p>
                Профессионально-ориентированный иностраный язык - Сплепченко
                НН.,Шарова А.В.(Эиос)
              </p>
            </li>
            <li className="lessons__item">
              <p>Модели стохастических объектов - Михалев А.С.(Эиос)</p>
            </li>
            <li className="lessons__item">
              <p>Программирование на языке Java - Черниговский А.С.(Эиос)</p>
            </li> */}
          </ul>
        </div>
      </section>
    </>
  );
}

function Fragments(props) {
  const pageWidth = props.pageWidth;
  const desktopWidth = 1200;
  if (pageWidth <= desktopWidth) {
    return <h1>В разработке</h1>;
  } else {
    return DesktopFragment(
      props.currentSemester,
      props.month,
      props.year,
      props.updateCurYear,
      props.updateCurMonth
    );
  }
}

export const EventsCalendar = ({ user }) => {
  function onChangeSemesterHandler(e) {
    e.preventDefault();

    const promise = new Promise((resolve) => {
      const curSem = semesters.filter((sem) => {
        return sem.semesterNumber === Number(e.target.value);
      });
      setCurrentSemester(curSem[0]);
      setCurMonth(Number(curSem[0].dateofbegin.split("-")[1]));
      setCurYear(Number(curSem[0].dateofbegin.split("-")[0]));
      resolve(curSem[0]);
    }).then((curSem) => {
      //   changeCurrentRating(curSem);
    });
  }

  const [semesters, setSemesters] = useState(null);
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const [currentSemester, setCurrentSemester] = useState(null);
  const [isCurrentSemLoaded, setIsCurrentSemLoaded] = useState(false);

  const [currentRating, setCurrentRating] = useState(null);
  const [isCurrentRatingLoading, setCurrentRatingLoading] = useState(null);

  const [curMonth, setCurMonth] = useState(null);
  const [curYear, setCurYear] = useState(null);
  const updateCurYear = (value) => setCurYear(value);
  const updateCurMonth = (value) => setCurMonth(value);

  let url = "http://193.218.136.174:8080/cabinet/rest/student/semesters";
  let body = {
    text: "",
    userToken: Cookie.getCookie("usertoken"),
  };
  let dateofbegin = null;
  // REQUEST FOR SEMESTERS
  useEffect(() => {
    const promise = postData(url, body);
    if (promise) {
      promise
        .then((res) => res.json())
        .then((result) => {
          return new Promise((resolve) => {
            const filteredSems = filterSemestersByUserId(result, user);
            setSemesters(filteredSems);
            setIsLoaded(true);
            resolve(filteredSems);
          });
        })
        .then((result) => {
          return new Promise((resolve) => {
            setCurrentSemester(result[0]);
            setCurMonth(Number(result[0].dateofbegin.split("-")[1]));
            setCurYear(Number(result[0].dateofbegin.split("-")[0]));
            setIsCurrentSemLoaded(true);
          });
        })
    }
  }, [isLoaded, isCurrentSemLoaded]);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded || !isCurrentSemLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <SemesterContext.Provider value={{ onChangeSemesterHandler }}>
        <h1 className="main-title">
          <a className="main-title__link">Календарь событий</a>
        </h1>
        <Semester semesters={semesters} />
        <Fragments
          pageWidth={document.documentElement.scrollWidth}
          currentSemester={currentSemester}
          month={curMonth}
          year={curYear}
          updateCurYear={updateCurYear}
          updateCurMonth={updateCurMonth}
        />
      </SemesterContext.Provider>
    );
  }
};
