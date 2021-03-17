import React from 'react'
import './index.scss'

import { Header } from '../Header';

function ScheduleHeader() {
  return (
    <div className="semester__header container">
    <div className="semester">
    <input className="date-choice" type="date" id="start" name="trip-start"
       min="2018-01-01" max="2018-12-31"/>
    </div>
    <button className="semester__helper">
        <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.9042 20.249H8.69673C7.84636 20.249 7.15527 20.9401 7.15527 21.7905V23.4578C7.15527 24.3082 7.84636 24.9993 8.69673 24.9993H9.9042C10.7546 24.9993 11.4457 24.3082 11.4457 23.4578V21.7905C11.4457 20.9376 10.7546 20.249 9.9042 20.249Z" fill="#222322" />
            <path d="M1.39061 7.34251L3.61803 7.61998C4.32454 7.70733 4.99507 7.30141 5.24942 6.63601C5.57055 5.79591 6.01758 5.13308 6.59049 4.65009C7.40235 3.9667 8.41199 3.62244 9.61947 3.62244C10.8706 3.62244 11.8674 3.95129 12.6073 4.60641C13.3472 5.2641 13.7146 6.05025 13.7146 6.97256C13.7146 7.63539 13.5065 8.2417 13.0903 8.79149C12.8206 9.14089 11.9908 9.87566 10.606 10.9984C9.21869 12.1211 8.2964 13.1333 7.83397 14.0324C7.36125 14.9522 7.19683 15.9721 7.15572 16.9947C7.11978 17.8707 7.81855 18.6003 8.69719 18.6003H9.95605C10.7576 18.6003 11.4204 17.9863 11.4924 17.1899C11.5438 16.617 11.6388 16.1828 11.7827 15.8874C12.0242 15.3813 12.6485 14.7133 13.6504 13.8809C15.5901 12.2752 16.8541 11.0061 17.4476 10.0709C18.0385 9.13832 18.3365 8.14921 18.3365 7.10359C18.3365 5.21529 17.5324 3.55822 15.9215 2.13493C14.3133 0.711643 12.1449 0 9.42167 0C6.83201 0 4.74333 0.701367 3.15048 2.10667C1.79399 3.30387 0.969305 4.72202 0.678996 6.35854C0.589052 6.8364 0.915328 7.28342 1.39061 7.34251Z" fill="#222322" />
        </svg>
    </button>
</div>
  )
}

function StudentScheduleFragments(props) {
  const pageWidth = props.pageWidth

  const desktopWidth = 1200
  if (pageWidth <= desktopWidth) {
      return MobileFragment()
  } else {
      return DesktopFragment()
  }
}

function showHideDesc(event) {
  const li = event.target.parentElement
  console.log(li)
  const desc = li.querySelector('.week__day-desc')

  desc.classList.toggle('show')
}

function MobileFragment() {
  return (
    <div>
      <ScheduleHeader/>
      <div className="events-calendar__semestr-date schedule-calendar">
          <p>Неделя: <span>нечетная</span></p>
          <p><span>23.11.2020 - 29.11.2020</span></p>

          <ul className="events-calendar__list week-list">
                    <li className="week__item">
                        <div className="week__day" onClick={showHideDesc}>Понедельник</div>

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
                        <div className="week__day" onClick={showHideDesc}>Вторник</div>

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
                        <div className="week__day" onClick={showHideDesc}>Среда</div>

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
                        <div className="week__day" onClick={showHideDesc}>Четверг</div>

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
                        <div className="week__day" onClick={showHideDesc}>Пятница</div>

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
                        <div className="week__day" onClick={showHideDesc}>Суббота</div>

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
  )
}

function DesktopFragment() {
  return (
    <div className="schedule-wrapper">
        <ul className="schedule-header">
          <li className="schedule-header__item">
            <b>Группа:</b>
            <span>КИ18-16Б</span>
          </li>
          <li className="schedule-header__item">
            <b>неделя:</b>
            <span>нечетная (23.11.2020-29.11.2020)</span>
          </li>
          <li className="schedule-header__item">
            <b>Семестр:</b>
            <span>2020-2021 осень</span>
          </li>
          <li className="schedule-header__item">
            <b>Дата:</b>
            <input type="date"/>
            <button className="reset-date">Вернуться к начальной дате</button>
          </li>
        </ul>
        <table className="schedule-main-table">
          <tbody>
            <tr className="schedule-main-table__tr">
              <th className="schedule-main-table__th">Время</th>
              <th className="schedule-main-table__th">Понедельник</th>
              <th className="schedule-main-table__th">Вторник</th>
              <th className="schedule-main-table__th">Среда</th>
              <th className="schedule-main-table__th">Четверг</th>
              <th className="schedule-main-table__th">Пятница</th>
              <th className="schedule-main-table__th">Суббота</th>
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
              <td className="schedule-main-table__td">
              </td>
              <td className="schedule-main-table__td"></td>
              <td className="schedule-main-table__td">
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
              <td className="schedule-main-table__td">14:10 - 15.45</td>
              <td className="schedule-main-table__td">
              <div className="schedule-current-lesson">
                  <p>Модели стохастических объектов</p>
                  <p>Воронов В.С. (прак)</p>
                  <p>УЛК 119</p>
                </div>
              </td>
              <td className="schedule-main-table__td schedule-main-table__td--free"></td>
              <td className="schedule-main-table__td">

              </td>
              <td className="schedule-main-table__td"></td>
              <td className="schedule-main-table__td">
              </td>
              <td className="schedule-main-table__td">
              </td>
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
              <td className="schedule-main-table__td">

              </td>
              <td className="schedule-main-table__td"></td>
              <td className="schedule-main-table__td">
              </td>
              <td className="schedule-main-table__td">
              </td>
            </tr>
            <tr className="schedule-main-table__tr">
              <td className="schedule-main-table__td">19:25 - 21:00</td>
              <td className="schedule-main-table__td">
              </td>
              <td className="schedule-main-table__td schedule-main-table__td--free"></td>
              <td className="schedule-main-table__td">

              </td>
              <td className="schedule-main-table__td"></td>
              <td className="schedule-main-table__td">
              </td>
              <td className="schedule-main-table__td">
              </td>
            </tr>
            <tr className="schedule-main-table__tr schedule-main-table__tr--even">
              <td className="schedule-main-table__td">21:10 - 22:40</td>
              <td className="schedule-main-table__td">
              </td>
              <td className="schedule-main-table__td schedule-main-table__td--free"></td>
              <td className="schedule-main-table__td">

              </td>
              <td className="schedule-main-table__td"></td>
              <td className="schedule-main-table__td">
              </td>
              <td className="schedule-main-table__td">
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

function StudentSchedule() {
  return (
    <>
      <Header/>
      <h1 className="main-title">
          <a className="main-title__link">Расписание студента</a>
      </h1>
      <StudentScheduleFragments pageWidth={document.documentElement.scrollWidth} />
    </>
  )
}


export default StudentSchedule
