import React, { useState, useEffect } from "react";

import { filterSemestersByUserId, Semester } from "../Public";
import { Header } from "../Header";
import SemesterContext from "../../context/SemesterContext";
import Calendar from "../Calendar";

import "./index.scss";
import { postData } from "../../libs/requests";
import { Cookie } from "../../libs/cookie";
import { monthNames, token } from "../../strings/public";
import { studentSemesters } from "../../strings/urls";

function Fragment({
  currentSemester,
  month,
  year,
  updateCurYear,
  updateCurMonth}
) {
const [shedule, setShedule] = useState(null);
  const dateofbegin = currentSemester.dateofbegin.split("-");
  const dateofend = currentSemester.dateofend.split("-");
  const updateShedule = (value) => setShedule(value);

  const [monthName, setMonthName] = useState(monthNames[month]);

  function incMouth() {
    let tmpMount = month;
    if (month > 10) {
      updateCurYear(year + 1);
      tmpMount = 0
      updateCurMonth(tmpMount);
    } else {
      tmpMount++
      updateCurMonth(tmpMount);
    }
    console.log(month)
    setMonthName(monthNames[tmpMount]);
  }

  function decMouth() {
    let tmpMount = month;
    if (month < 1) {
      updateCurYear(year - 1);
      tmpMount =11
      updateCurMonth(tmpMount);
    } else {
      tmpMount--
      updateCurMonth(tmpMount);
    }
    setMonthName(monthNames[tmpMount]);
  }

  return (
    <>
      <section className="events-calendar ">
        <div className="events-calendar__semestr-date ">
          <p>
            Начало семестра: <span>{currentSemester.dateofbegin}</span>
          </p>
          <p>
            Окончание семестра: <span>{currentSemester.dateofend}</span>
          </p>
        </div>

        <div className="events-calendar__calendar ">
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

        <div className="events-calendar__wrapper ">
          <div className="events-calendar__days ">
            <Calendar month={month} year={year} updateShedule={updateShedule}/>
          </div>
          <div className="events-calendar__dict">
            <ul className="dict-list">
              <li className="dict__item"> - Все занятия пропущены</li>
              <li className="dict__item dict__item--no-write">
                - Староста не заполнял журнал посещаемости
              </li>
              <li className="dict__item dict__item--pass">
                - Есть пропущенные занятия
              </li>
              <li className="dict__item dict__item--100">
                - 100%-ая посещаемость
              </li>
              <li className="dict__item dict__item--no-lessons">
                - Занятий не было
              </li>
            </ul>
          </div>
        </div>
        <div className="events-calendar__info show">
          <ul className="events-calendar__info-lessons lessons__list">
              {shedule?<div>{shedule}</div>:null}
          </ul>
        </div>
      </section>
    </>
  );
}


    


export const EventsCalendar = ({ user }) => {
  function onChangeSemesterHandler(e) {
    e.preventDefault();

    new Promise(() => {
      const curSem = semesters.filter((sem) => {
        return sem.semesterNumber === Number(e.target.value);
      });
      setCurrentSemester(curSem[0]);
      setCurMonth(Number(curSem[0].dateofbegin.split("-")[1]));
      setCurYear(Number(curSem[0].dateofbegin.split("-")[0]));
    })
  }

  const [semesters, setSemesters] = useState(null);
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const [currentSemester, setCurrentSemester] = useState(null);
  const [isCurrentSemLoaded, setIsCurrentSemLoaded] = useState(false);

  const [curMonth, setCurMonth] = useState(null);
  const [curYear, setCurYear] = useState(null);
  const updateCurYear = (value) => setCurYear(value);
  const updateCurMonth = (value) => setCurMonth(value);


  let body = {
    text: "",
    userToken: Cookie.getCookie(token),
  };

  // REQUEST FOR SEMESTERS
  useEffect(() => {
    const promise = postData(studentSemesters, body);
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
          return new Promise(() => {
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
        <Semester semesters={semesters} helper={'EventsCalendar'}/>
        <Fragment
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
