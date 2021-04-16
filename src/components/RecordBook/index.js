import React from 'react';

import './index.scss'
import '../../styles/reprise.scss'

import { Semester } from '../Public'
import { Header } from '../Header';

function itemClick(e) {
    e.preventDefault()
    if (e.target.parentElement.classList.contains('item_close')) {
        e.target.parentElement.classList.add('item_open');
        e.target.parentElement.classList.remove('item_close');
    } else if (e.target.parentElement.classList.contains('item_open')) {
        e.target.parentElement.classList.add('item_close');
        e.target.parentElement.classList.remove('item_open');
    }
}

function MobileFragment() {
    return (
        <>
            <ul className="record-book__list " onClick={itemClick}>
                <li className="record-book__item item_close ">
                    <h3 className="record-book__title exam">
                        Программирование на COS в Intersystems Cache
                        </h3>
                    <div className="record-book__info">
                        <ul className="info__list">
                            <li className="info__item">
                                Кол-во часов: 144( з.е.)
                                </li>
                            <li className="info__item">
                                Оценка: -
                                </li>
                            <li className="info__item">
                                Дата: -
                                </li>
                            <li className="info__item">
                                Преподователь: Погребников Алексанр Константинович
                                </li>
                            <li className="info__item">
                                Доп. Информация: -
                                </li>
                        </ul>
                    </div>
                </li>
                <li className="record-book__item item_close ">
                    <h3 className="record-book__title exam">
                        Проектирование и архитектура информационных систем
                        </h3>
                    <div className="record-book__info">
                        <ul className="info__list">
                            <li className="info__item">
                                Кол-во часов: 144( з.е.)
                                </li>
                            <li className="info__item">
                                Оценка: -
                                </li>
                            <li className="info__item">
                                Дата: -
                                </li>
                            <li className="info__item">
                                Преподователь: Погребников Алексанр Константинович
                                </li>
                            <li className="info__item">
                                Доп. Информация: -
                                </li>
                        </ul>
                    </div>
                </li>
                <li className="record-book__item item_close ">
                    <h3 className="record-book__title exam">
                        Язык программирования C#
                        </h3>
                    <div className="record-book__info">
                        <ul className="info__list">
                            <li className="info__item">
                                Кол-во часов: 144( з.е.)
                                </li>
                            <li className="info__item">
                                Оценка: -
                                </li>
                            <li className="info__item">
                                Дата: -
                                </li>
                            <li className="info__item">
                                Преподователь: Погребников Алексанр Константинович
                                </li>
                            <li className="info__item">
                                Доп. Информация: -
                                </li>
                        </ul>
                    </div>
                </li>
                <li className="record-book__item item_close ">
                    <h3 className="record-book__title offset">
                        Командный курсовой проект “Корпоративные приложения”
                        </h3>
                    <div className="record-book__info">
                        <ul className="info__list">
                            <li className="info__item">
                                Кол-во часов: 144( з.е.)
                                </li>
                            <li className="info__item">
                                Оценка: -
                                </li>
                            <li className="info__item">
                                Дата: -
                                </li>
                            <li className="info__item">
                                Преподователь: Погребников Алексанр Константинович
                                </li>
                            <li className="info__item">
                                Доп. Информация: -
                                </li>
                        </ul>
                    </div>
                </li>
                <li className="record-book__item item_close ">
                    <h3 className="record-book__title offset">
                        Модели стохастических объектов
                        </h3>
                    <div className="record-book__info">
                        <ul className="info__list">
                            <li className="info__item">
                                Кол-во часов: 144( з.е.)
                                </li>
                            <li className="info__item">
                                Оценка: -
                                </li>
                            <li className="info__item">
                                Дата: -
                                </li>
                            <li className="info__item">
                                Преподователь: Погребников Алексанр Константинович
                                </li>
                            <li className="info__item">
                                Доп. Информация: -
                                </li>
                        </ul>
                    </div>
                </li>
                <li className="record-book__item item_close ">
                    <h3 className="record-book__title course-work">
                        Прикладная физическая культуры и спорта
                        </h3>
                    <div className="record-book__info">
                        <ul className="info__list">
                            <li className="info__item">
                                Кол-во часов: 144( з.е.)
                                </li>
                            <li className="info__item">
                                Оценка: -
                                </li>
                            <li className="info__item">
                                Дата: -
                                </li>
                            <li className="info__item">
                                Преподователь: Погребников Алексанр Константинович
                                </li>
                            <li className="info__item">
                                Доп. Информация: -
                                </li>
                        </ul>
                    </div>
                </li>
                <li className="record-book__item item_close ">
                    <h3 className="record-book__title course-work" >
                        Программирование на языке Java
                        </h3>
                    <div className="record-book__info">
                        <ul className="info__list">
                            <li className="info__item">
                                Кол-во часов: 144( з.е.)
                                </li>
                            <li className="info__item">
                                Оценка: -
                                </li>
                            <li className="info__item">
                                Дата: -
                                </li>
                            <li className="info__item">
                                Преподователь: Погребников Алексанр Константинович
                                </li>
                            <li className="info__item">
                                Доп. Информация: -
                                </li>
                        </ul>
                    </div>
                </li>
                <li className="record-book__item item_close ">
                    <h3 className="record-book__title course-project">
                        Профессионально-орентированный иностранный язык
                        </h3>
                    <div className="record-book__info">
                        <ul className="info__list">
                            <li className="info__item">
                                Кол-во часов: 144( з.е.)
                                </li>
                            <li className="info__item">
                                Оценка: -
                                </li>
                            <li className="info__item">
                                Дата: -
                                </li>
                            <li className="info__item">
                                Преподователь: Погребников Алексанр Константинович
                                </li>
                            <li className="info__item">
                                Доп. Информация: -
                                </li>
                        </ul>
                    </div>
                </li>
                <li className="record-book__item item_close ">
                    <h3 className="record-book__title course-project">
                        Программирование на COS в Intersystems Cache
                        </h3>
                    <div className="record-book__info">
                        <ul className="info__list">
                            <li className="info__item">
                                Кол-во часов: 144( з.е.)
                                </li>
                            <li className="info__item">
                                Оценка: -
                                </li>
                            <li className="info__item">
                                Дата: -
                                </li>
                            <li className="info__item">
                                Преподователь: Погребников Алексанр Константинович
                                </li>
                            <li className="info__item">
                                Доп. Информация: -
                                </li>
                        </ul>
                    </div>
                </li>
                <li className="record-book__item item_close ">
                    <h3 className="record-book__title practice">
                        Физическая культура и спорт
                        </h3>
                    <div className="record-book__info">
                        <ul className="info__list">
                            <li className="info__item">
                                Кол-во часов: 144( з.е.)
                                </li>
                            <li className="info__item">
                                Оценка: -
                                </li>
                            <li className="info__item">
                                Дата: -
                                </li>
                            <li className="info__item">
                                Преподователь: Погребников Алексанр Константинович
                                </li>
                            <li className="info__item">
                                Доп. Информация: -
                                </li>
                        </ul>
                    </div>
                </li>
            </ul>

        </>
    )
}

function DesktopFragment() {
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
                <tr className="table__body">
                    <td className="table__body-item exam">Программирование на COS в Intersystems Cache</td>
                    <td className="table__body-item">144 (4 з.е.)</td>
                    <td className="table__body-item">-</td>
                    <td className="table__body-item">-</td>
                    <td className="table__body-item">Погребников Александр Константинович</td>
                    <td className="table__body-item">-</td>
                </tr>
                <tr className="table__body">
                    <td className="table__body-item exam">Проектирование и архитектура информационных систем</td>
                    <td className="table__body-item">144 (4 з.е.)</td>
                    <td className="table__body-item">-</td>
                    <td className="table__body-item">-</td>
                    <td className="table__body-item">Кукарцев Владислав Викторович</td>
                    <td className="table__body-item">-</td>
                </tr>
                <tr className="table__body">
                    <td className="table__body-item offset">Язык программирования C#</td>
                    <td className="table__body-item">180 (5 з.е.)</td>
                    <td className="table__body-item">-</td>
                    <td className="table__body-item">-</td>
                    <td className="table__body-item">Чикизов Алексей Александрович</td>
                    <td className="table__body-item">-</td>
                </tr>
                <tr className="table__body">
                    <td className="table__body-item offset">Командный курсовой проект “Корпоративные приложения”</td>
                    <td className="table__body-item">144 (4 з.е.)</td>
                    <td className="table__body-item">-</td>
                    <td className="table__body-item">-</td>
                    <td className="table__body-item">Хныкин Антон Владимирович</td>
                    <td className="table__body-item">-</td>
                </tr>
                <tr className="table__body">
                    <td className="table__body-item course-work">Модели стохастических объектов</td>
                    <td className="table__body-item">144 (4 з.е.)</td>
                    <td className="table__body-item">-</td>
                    <td className="table__body-item">-</td>
                    <td className="table__body-item">Михалев Антон Сергеевич</td>
                    <td className="table__body-item">-</td>
                </tr>
                <tr className="table__body">
                    <td className="table__body-item course-work">Прикладная физическая культуры и спорта</td>
                    <td className="table__body-item">46 (4 з.е.)</td>
                    <td className="table__body-item">-</td>
                    <td className="table__body-item">-</td>
                    <td className="table__body-item">Сбродов Иван Геннадьевич</td>
                    <td className="table__body-item">-</td>
                </tr>
                <tr className="table__body">
                    <td className="table__body-item course-project">Программирование на языке Java</td>
                    <td className="table__body-item">108 (4 з.е.)</td>
                    <td className="table__body-item">-</td>
                    <td className="table__body-item">-</td>
                    <td className="table__body-item">Черниговский Алексей Сергеевич</td>
                    <td className="table__body-item">-</td>
                </tr>
                <tr className="table__body">
                    <td className="table__body-item course-project">Профессионально-орентированный иностранный язык</td>
                    <td className="table__body-item">72 (4 з.е.)</td>
                    <td className="table__body-item">-</td>
                    <td className="table__body-item">-</td>
                    <td className="table__body-item">Романовская Анна Александрова</td>
                    <td className="table__body-item">-</td>
                </tr>
                <tr className="table__body">
                    <td className="table__body-item practice">Физическая культура и спорт</td>
                    <td className="table__body-item">18 (4 з.е.)</td>
                    <td className="table__body-item">-</td>
                    <td className="table__body-item">-</td>
                    <td className="table__body-item">Сбродов Иван Геннадьевич</td>
                    <td className="table__body-item">-</td>
                </tr>
            </table>

            <ul className="helper__list ">
                <li className="helper__item exam">
                    Экзамен
                </li>
                <li className="helper__item offset">
                    Зачет
                </li>
                <li className="helper__item course-work">
                    Курсовой проект
                </li>
                <li className="helper__item course-project">
                    Курсовая работа
                </li>
                <li className="helper__item practice">
                    Практика
                </li>
            </ul>
        </>
    )
}

function RecordBookFragments(props) {
    const pageWidth = props.pageWidth
    const desktopWidth = 1200
    if (pageWidth <= desktopWidth) {
        return MobileFragment()
    } else {
        return DesktopFragment()
    }
}
export const RecordBook = () => {
    return (
        <>
            <h1 className="main-title">
                <a className="main-title__link">Зачетная книжка</a>
            </h1>
            <Semester />
            <section className="record-book container">
                <RecordBookFragments pageWidth={document.documentElement.scrollWidth} />
            </section>
        </>
    )
}
