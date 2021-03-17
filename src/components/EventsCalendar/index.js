import React from 'react'

import {Semester} from '../Public'
import { Header } from '../Header';

import Calendar from '../Calendar'

import './index.scss'

function showHideDate(event) {
    const li = event.target.parentElement
    const date = li.querySelector('.week__day-list')
    const desc = li.querySelector('.week__day-desc')

    date.classList.toggle('show')
    desc.classList.remove('show')
}

function showHideDesc(event) {
    const li = event.target.parentElement
    console.log(li)
    const desc = li.querySelector('.week__day-desc')

    desc.classList.toggle('show')
}

function MobileFragment() {
    return (
        <>
            <section className="events-calendar">
                <div className="events-calendar__semestr-date">
                    <p>Начало семестра: <span>01.09.2020</span></p>
                    <p>Окончание семестра: <span>30.01.2021</span></p>
                </div>

                <div className="events-calendar__calendar">
                    <span className="events-calendar__month">Ноябрь</span>
                </div>

                <ul className="events-calendar__list week-list">
                    <li className="week__item">
                        <div className="week__day" onClick={showHideDate}>Понедельник</div>
                        
                        <ul className="week__day-list">
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>26</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>02</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>09</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>16</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>23</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>30</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                        </ul>
                        

                    </li>
                    <li className="week__item">
                        <div className="week__day" onClick={showHideDate}>Вторник</div>
                        
                        <ul className="week__day-list">
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>26</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>02</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>09</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>16</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>23</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>30</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                        </ul>
                        

                    </li>
                    <li className="week__item">
                        <div className="week__day" onClick={showHideDate}>Среда</div>
                        
                        <ul className="week__day-list">
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>26</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>02</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>09</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>16</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>23</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>30</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                        </ul>
                        

                    </li>
                    <li className="week__item">
                        <div className="week__day" onClick={showHideDate}>Четверг</div>
                        
                        <ul className="week__day-list">
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>26</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>02</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>09</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>16</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>23</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>30</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                        </ul>
                        

                    </li>
                    <li className="week__item">
                        <div className="week__day" onClick={showHideDate}>Пятница</div>
                        
                        <ul className="week__day-list">
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>26</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>02</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>09</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>16</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>23</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>30</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                        </ul>
                        

                    </li>
                    <li className="week__item">
                        <div className="week__day" onClick={showHideDate}>Суббота</div>
                        
                        <ul className="week__day-list">
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>26</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>02</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>09</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>16</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>23</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>30</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                        </ul>
                        

                    </li>
                    <li className="week__item">
                        <div className="week__day" onClick={showHideDate}>Воскресенье</div>
                        
                        <ul className="week__day-list">
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>26</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>02</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>09</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>16</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>23</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                            <li className="week__day-list__item">
                                <div className="week__day-date" onClick={showHideDesc}>30</div>
                                <div className="week__day-desc">
                                Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)
                                </div>
                            </li>
                        </ul>
                        

                    </li>
                </ul>

            </section>
        </>
    )
}


function DesktopFragment() {
    return (
        <>
            <section className="events-calendar">
                <div className="events-calendar__semestr-date">
                    <p>Начало семестра: <span>01.09.2020</span></p>
                    <p>Окончание семестра: <span>30.01.2021</span></p>
                </div>

                <div className="events-calendar__calendar">
                    <span className="events-calendar__month">Ноябрь</span>
                </div>

                <div className="events-calendar__wrapper">
                    <div className="events-calendar__days">
                        <Calendar/>
                    </div>
                    <div className="events-calendar__dict">
                        <ul className="dict-list">
                            <li className="dict__item"> - Все занятия пропущены</li>
                            <li className="dict__item dict__item--no-write"> - Староста не заполнял журнал посещаемости</li>
                            <li className="dict__item dict__item--pass"> - Есть пропущенные занятия</li>
                            <li className="dict__item dict__item--100"> - 100%-ая посещаемость </li>
                            <li className="dict__item dict__item--no-lessons"> - Занятий не было</li>
                        </ul>
                    </div>
                </div>
                <div className="events-calendar__info">
                    <p className="events-calendar__info-title">Расписание на 05.12.2020</p>
                    <ul className="events-calendar__info-lessons lessons__list">
                        <li className="lessons__item">
                            <p>Профессионально-ориентированный иностраный язык - Сплепченко НН.,Шарова А.В.(Эиос)</p>
                        </li>
                        <li className="lessons__item">
                            <p>Модели стохастических объектов - Михалев А.С.(Эиос)</p>
                        </li>
                        <li className="lessons__item">
                            <p>Программирование на языке Java - Черниговский А.С.(Эиос)</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

function Fragments(props) {
    const pageWidth = props.pageWidth
    const desktopWidth = 1200
    if (pageWidth <= desktopWidth) {
        return MobileFragment()
    } else {
        return DesktopFragment()
    }
}

export const EventsCalendar = () => {

    

    return (
        <>
            <Header/>
            <h1 className="main-title">
                <a className="main-title__link">Календарь событий</a>
            </h1>
            <Semester />
            <Fragments pageWidth={document.documentElement.scrollWidth} />
        </> 
    )
}