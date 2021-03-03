import React, { Fragment } from 'react';

import './index.scss'
import '../../styles/reprise.scss'

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

export function RecordBookHeader() {
    return (
        <>
            <header className="record-book__header container">
                <div className="record-book__semester">
                    <select className="semester__list">
                        <option className="semester__item">5 семестр</option>
                        <option className="semester__item">4 семестр</option>
                        <option className="semester__item">3 семестр</option>
                        <option className="semester__item">2 семестр</option>
                        <option className="semester__item">1 семестр</option>
                    </select>
                </div>
                <button className="record-book__helper">
                    <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.9042 20.249H8.69673C7.84636 20.249 7.15527 20.9401 7.15527 21.7905V23.4578C7.15527 24.3082 7.84636 24.9993 8.69673 24.9993H9.9042C10.7546 24.9993 11.4457 24.3082 11.4457 23.4578V21.7905C11.4457 20.9376 10.7546 20.249 9.9042 20.249Z" fill="#222322" />
                        <path d="M1.39061 7.34251L3.61803 7.61998C4.32454 7.70733 4.99507 7.30141 5.24942 6.63601C5.57055 5.79591 6.01758 5.13308 6.59049 4.65009C7.40235 3.9667 8.41199 3.62244 9.61947 3.62244C10.8706 3.62244 11.8674 3.95129 12.6073 4.60641C13.3472 5.2641 13.7146 6.05025 13.7146 6.97256C13.7146 7.63539 13.5065 8.2417 13.0903 8.79149C12.8206 9.14089 11.9908 9.87566 10.606 10.9984C9.21869 12.1211 8.2964 13.1333 7.83397 14.0324C7.36125 14.9522 7.19683 15.9721 7.15572 16.9947C7.11978 17.8707 7.81855 18.6003 8.69719 18.6003H9.95605C10.7576 18.6003 11.4204 17.9863 11.4924 17.1899C11.5438 16.617 11.6388 16.1828 11.7827 15.8874C12.0242 15.3813 12.6485 14.7133 13.6504 13.8809C15.5901 12.2752 16.8541 11.0061 17.4476 10.0709C18.0385 9.13832 18.3365 8.14921 18.3365 7.10359C18.3365 5.21529 17.5324 3.55822 15.9215 2.13493C14.3133 0.711643 12.1449 0 9.42167 0C6.83201 0 4.74333 0.701367 3.15048 2.10667C1.79399 3.30387 0.969305 4.72202 0.678996 6.35854C0.589052 6.8364 0.915328 7.28342 1.39061 7.34251Z" fill="#222322" />
                    </svg>
                </button>
            </header>
        </>
    )
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
            <Header />
            <h1 className="main-title">
                <a className="main-title__link">Зачетная книжка</a>
            </h1>
            <RecordBookHeader />
            <section className="record-book container">
                <RecordBookFragments pageWidth={document.documentElement.scrollWidth} />
            </section>
        </>
    )
}