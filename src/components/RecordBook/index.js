import React, { useState, useEffect } from "react";

import "./index.scss";
import "../../styles/reprise.scss";

import { filterSemestersByUserId, Semester } from "../Public";
import { postData } from "../../libs/requests";
import { Cookie } from "../../libs/cookie";
import SemesterContext from "../../context/SemesterContext";
import { token } from "../../strings/public";
import { studentRating, studentSemesters } from "../../strings/urls";

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

function MobileFragment({ currentRating }) {
  return (
    <>
      <ul className="record-book__list " onClick={itemClick}>
        {currentRating.ratings.map((rating, index) => {
          let classes = ["record-book__title"];

          if (rating.isExam) {
            classes.push("exam");
          } else if (rating.isPractice) {
            classes.push("practice");
          } else if (rating.isCP) {
            classes.push("course-project");
          } else if (rating.isCW) {
            classes.push("course-work");
          } else {
            classes.push("offset");
          }

          return (
            <li className="record-book__item item_close " key={index}>
              <h3 className={classes.join(" ")}>{rating.subjectName}</h3>
              <div className="record-book__info">
                <ul className="info__list">
                  <li className="info__item">
                    Кол-во часов: {rating.hoursCount}
                  </li>
                  <li className="info__item">
                    Оценка:{" "}
                    {rating.isExam
                      ? rating.examrating !== 0
                        ? rating.examrating
                        : "-"
                      : rating.passrating
                      ? rating.passrating > 1
                        ? rating.passrating
                        : "Зачет"
                      : "-"}
                  </li>
                  <li className="info__item">Дата: -</li>
                  <li className="info__item">
                    Преподователь:{" "}
                    {rating.isExam
                      ? rating.examTutor
                        ? rating.examTutor
                        : "-"
                      : rating.passTutor
                      ? rating.passTutor
                      : "-"}
                  </li>
                  <li className="info__item">
                    Доп. Информация:
                    <br />
                    {rating.dateOfPass ? `Консультация: ` : ""}
                    <br />
                    {rating.dateOfPass ? `Зачет: ${rating.dateOfPass}` : ""}
                  </li>
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

function DesktopFragment({ currentRating }) {
  return (
    <>
      <table className="table">
        <tr className="table__header">
          <th className="table__header-item">Предметы</th>
          <th className="table__header-item">Кол-во часов</th>
          <th className="table__header-item">Оценка</th>
          <th className="table__header-item">Дата</th>
          <th className="table__header-item">Преподаватель</th>
          <th className="table__header-item">Доп. Информация</th>
        </tr>

        {currentRating.ratings.map((rating, index) => {
          let classes = ["table__body-item"];

          if (rating.isExam) {
            classes.push("exam");
          } else if (rating.isPractice) {
            classes.push("practice");
          } else if (rating.isCP) {
            classes.push("course-project");
          } else if (rating.isCW) {
            classes.push("course-work");
          } else {
            classes.push("offset");
          }

          return (
            <tr className="table__body" key={index}>
              <td className={classes.join(" ")}>{rating.subjectName}</td>
              <td className="table__body-item">{rating.hoursCount}</td>
              <td className="table__body-item">
                {" "}
                {rating.isExam
                  ? rating.examrating !== 0
                    ? rating.examrating
                    : "-"
                  : rating.passrating
                  ? rating.passrating > 1
                    ? rating.passrating
                    : "Зачет"
                  : "-"}
              </td>
              <td className="table__body-item">-</td>
              <td className="table__body-item">
                {rating.isExam
                  ? rating.examTutor
                    ? rating.examTutor
                    : "-"
                  : rating.passTutor
                  ? rating.passTutor
                  : "-"}
              </td>
              <td className="table__body-item table__body-item-add_info">
                <p>Доп. Информация:</p>
                <p>{rating.dateOfPass ? `Консультация: ` : ""}</p>
                <p>{rating.dateOfPass ? `Зачет: ${rating.dateOfPass}` : ""}</p>
              </td>
            </tr>
          );
        })}
      </table>

      <ul className="helper__list ">
        <li className="helper__item exam">Экзамен</li>
        <li className="helper__item offset">Зачет</li>
        <li className="helper__item course-work">Курсовой проект</li>
        <li className="helper__item course-project">Курсовая работа</li>
        <li className="helper__item practice">Практика</li>
      </ul>
    </>
  );
}

function RecordBookFragments(props) {
  const pageWidth = props.pageWidth;
  const desktopWidth = 1200;
  if (pageWidth <= desktopWidth) {
    return MobileFragment(props);
  } else {
    return DesktopFragment(props);
  }
}

// TODO
// модалка
// для десктопа
// доки

export const RecordBook = ({ user }) => {
  function onChangeSemesterHandler(e) {
    e.preventDefault();

    const promise = new Promise((resolve) => {
      const curSem = semesters.filter((sem) => {
        return sem.semesterNumber === Number(e.target.value);
      });
      setCurrentSemester(curSem[0]);
      resolve(curSem[0]);
    }).then((curSem) => {
      changeCurrentRating(curSem);
    });
  }

  function changeCurrentRating(currentSem) {
    return new Promise((resolve) => {
      let url = "http://193.218.136.174:8080/cabinet/rest/student/rating";
      let body = {
        semester: currentSem.idLGS,
        userToken: Cookie.getCookie("usertoken"),
      };

      const ratingPromise = postData(url, body);

      if (ratingPromise) {
        ratingPromise
          .then((res) => res.json())
          .then((res) => {
            return new Promise((resolve) => {
              setCurrentRating(res);
              resolve(res);
            });
          });
      }
    });
  }

  const [semesters, setSemesters] = useState(null);
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const [currentSemester, setCurrentSemester] = useState(null);
  const [isCurrentSemLoaded, setIsCurrentSemLoaded] = useState(false);

  const [currentRating, setCurrentRating] = useState(null);
  const [isCurrentRatingLoading, setCurrentRatingLoading] = useState(null);

  const body = {
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
          return new Promise((resolve) => {
            setCurrentSemester(result[0]);
            setIsCurrentSemLoaded(true);
            resolve(result);
          });
        })
        .then((result) => {
          return new Promise((resolve) => {

            let body = {
              semester: result[0].idLGS,
              userToken: Cookie.getCookie(token),
            };

            const ratingPromise = postData(studentRating, body);

            if (ratingPromise) {
              ratingPromise
                .then((res) => res.json())
                .then((res) => {
                  return new Promise((resolve) => {
                    setCurrentRating(res);
                    setCurrentRatingLoading(true);
                    resolve(res);
                  });
                });
            }
          });
        });
    }
  }, [isLoaded, isCurrentSemLoaded, isCurrentRatingLoading]);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded || !isCurrentSemLoaded || !isCurrentRatingLoading) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <SemesterContext.Provider value={{ onChangeSemesterHandler }}>
        <h1 className="main-title">
          <a className="main-title__link">Зачетная книжка</a>
        </h1>
        <Semester semesters={semesters} helper={"RecordBook"} />
        <section className="record-book container">
          <RecordBookFragments
            currentRating={currentRating}
            pageWidth={document.documentElement.scrollWidth}
          />
        </section>
      </SemesterContext.Provider>
    );
  }
};
