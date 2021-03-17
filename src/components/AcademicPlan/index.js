import React from 'react';

import './index.scss'
import '../../styles/reprise.scss'

import { Header } from '../Header';

import { Semester, Searcher, Pagination } from '../Public';

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
            <ul className="academic-plan__list " onClick={itemClick}>
                <li className="academic-plan__item item_close ">
                    <h3 className="academic-plan__title close-rgba">
                        История
                        </h3>
                    <div className="academic-plan__info">
                        <ul className="info__list">
                            <li className="info__item">
                                Семестр: 1 семестр
                                </li>
                            <li className="info__item">
                                Код предмета: Б.1.Б.02
                                </li>
                            <li className="info__item">
                                ЗЕ: 4
                                </li>
                            <li className="info__item">
                                Аудит. часов: 54
                                </li>
                            <li className="info__item">
                                Всего часов: 144
                                </li>
                            <li className="info__item">
                                Форма: Экзамен
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="academic-plan__item item_close ">
                    <h3 className="academic-plan__title unknown-rgba">
                        Иностранный язык
                        </h3>
                    <div className="academic-plan__info">
                        <ul className="info__list">
                            <li className="info__item">
                                Семестр: 1 семестр
                                </li>
                            <li className="info__item">
                                Код предмета: Б.1.Б.02
                                </li>
                            <li className="info__item">
                                ЗЕ: 4
                                </li>
                            <li className="info__item">
                                Аудит. часов: 54
                                </li>
                            <li className="info__item">
                                Всего часов: 144
                                </li>
                            <li className="info__item">
                                Форма: Экзамен
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="academic-plan__item item_close ">
                    <h3 className="academic-plan__title unknown-rgba">
                        Экология
                        </h3>
                    <div className="academic-plan__info">
                        <ul className="info__list">
                            <li className="info__item">
                                Семестр: 1 семестр
                                </li>
                            <li className="info__item">
                                Код предмета: Б.1.Б.02
                                </li>
                            <li className="info__item">
                                ЗЕ: 4
                                </li>
                            <li className="info__item">
                                Аудит. часов: 54
                                </li>
                            <li className="info__item">
                                Всего часов: 144
                                </li>
                            <li className="info__item">
                                Форма: Экзамен
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="academic-plan__item item_close ">
                    <h3 className="academic-plan__title open-rgba">
                        Физическая культура и спорт
                        </h3>
                    <div className="academic-plan__info">
                        <ul className="info__list">
                            <li className="info__item">
                                Семестр: 1 семестр
                                </li>
                            <li className="info__item">
                                Код предмета: Б.1.Б.02
                                </li>
                            <li className="info__item">
                                ЗЕ: 4
                                </li>
                            <li className="info__item">
                                Аудит. часов: 54
                                </li>
                            <li className="info__item">
                                Всего часов: 144
                                </li>
                            <li className="info__item">
                                Форма: Экзамен
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="academic-plan__item item_close ">
                    <h3 className="academic-plan__title close-rgba">
                        Введение в инженерную деятельность
                        </h3>
                    <div className="academic-plan__info">
                        <ul className="info__list">
                            <li className="info__item">
                                Семестр: 1 семестр
                                </li>
                            <li className="info__item">
                                Код предмета: Б.1.Б.02
                                </li>
                            <li className="info__item">
                                ЗЕ: 4
                                </li>
                            <li className="info__item">
                                Аудит. часов: 54
                                </li>
                            <li className="info__item">
                                Всего часов: 144
                                </li>
                            <li className="info__item">
                                Форма: Экзамен
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="academic-plan__item item_close ">
                    <h3 className="academic-plan__title open-rgba">
                        Математический анализ
                        </h3>
                    <div className="academic-plan__info">
                        <ul className="info__list">
                            <li className="info__item">
                                Семестр: 1 семестр
                                </li>
                            <li className="info__item">
                                Код предмета: Б.1.Б.02
                                </li>
                            <li className="info__item">
                                ЗЕ: 4
                                </li>
                            <li className="info__item">
                                Аудит. часов: 54
                                </li>
                            <li className="info__item">
                                Всего часов: 144
                                </li>
                            <li className="info__item">
                                Форма: Экзамен
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="academic-plan__item item_close ">
                    <h3 className="academic-plan__title close-rgba">
                        Основы программирования
                        </h3>
                    <div className="academic-plan__info">
                        <ul className="info__list">
                            <li className="info__item">
                                Семестр: 1 семестр
                                </li>
                            <li className="info__item">
                                Код предмета: Б.1.Б.02
                                </li>
                            <li className="info__item">
                                ЗЕ: 4
                                </li>
                            <li className="info__item">
                                Аудит. часов: 54
                                </li>
                            <li className="info__item">
                                Всего часов: 144
                                </li>
                            <li className="info__item">
                                Форма: Экзамен
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="academic-plan__item item_close ">
                    <h3 className="academic-plan__title open-rgba">
                        Алгебра и геометрия
                        </h3>
                    <div className="academic-plan__info">
                        <ul className="info__list">
                            <li className="info__item">
                                Семестр: 1 семестр
                                </li>
                            <li className="info__item">
                                Код предмета: Б.1.Б.02
                                </li>
                            <li className="info__item">
                                ЗЕ: 4
                                </li>
                            <li className="info__item">
                                Аудит. часов: 54
                                </li>
                            <li className="info__item">
                                Всего часов: 144
                                </li>
                            <li className="info__item">
                                Форма: Экзамен
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
                    <th className="table__header-item">Семестр</th>
                    <th className="table__header-item">Код предмета</th>
                    <th className="table__header-item">Предмет</th>
                    <th className="table__header-item">ЗЕ</th>
                    <th className="table__header-item">Аудит.часов</th>
                    <th className="table__header-item">Всего часов</th>
                    <th className="table__header-item">Форма контроля</th>
                </tr>
                <tr className="table__body-filter">
                    <td className="table__body-item "><input placeholder="Семестр..." type="text"></input></td>
                    <td className="table__body-item"><input placeholder="Код предмета..." type="text"></input></td>
                    <td className="table__body-item"><input placeholder="Предмет..." type="text"></input></td>
                    <td className="table__body-item"></td>
                    <td className="table__body-item"></td>
                    <td className="table__body-item"></td>
                    <td className="table__body-item"><input placeholder="Форма контроля..." type="text"></input></td>
                </tr>
                <tr className="table__body close-rgba">
                    <td className="table__body-item ">1 семестр</td>
                    <td className="table__body-item">Б1.Б.02</td>
                    <td className="table__body-item">История</td>
                    <td className="table__body-item">4</td>
                    <td className="table__body-item">54</td>
                    <td className="table__body-item">144</td>
                    <td className="table__body-item">Экзамен</td>
                </tr>
                <tr className="table__body close-rgba">
                    <td className="table__body-item ">1 семестр</td>
                    <td className="table__body-item">Б1.Б.02</td>
                    <td className="table__body-item">История</td>
                    <td className="table__body-item">4</td>
                    <td className="table__body-item">54</td>
                    <td className="table__body-item">144</td>
                    <td className="table__body-item">Экзамен</td>
                </tr>
                <tr className="table__body close-rgba">
                    <td className="table__body-item ">1 семестр</td>
                    <td className="table__body-item">Б1.Б.02</td>
                    <td className="table__body-item">История</td>
                    <td className="table__body-item">4</td>
                    <td className="table__body-item">54</td>
                    <td className="table__body-item">144</td>
                    <td className="table__body-item">Экзамен</td>
                </tr>
                <tr className="table__body close-rgba">
                    <td className="table__body-item ">1 семестр</td>
                    <td className="table__body-item">Б1.Б.02</td>
                    <td className="table__body-item">История</td>
                    <td className="table__body-item">4</td>
                    <td className="table__body-item">54</td>
                    <td className="table__body-item">144</td>
                    <td className="table__body-item">Экзамен</td>
                </tr>
                <tr className="table__body close-rgba">
                    <td className="table__body-item ">1 семестр</td>
                    <td className="table__body-item">Б1.Б.02</td>
                    <td className="table__body-item">История</td>
                    <td className="table__body-item">4</td>
                    <td className="table__body-item">54</td>
                    <td className="table__body-item">144</td>
                    <td className="table__body-item">Экзамен</td>
                </tr>
                <tr className="table__body close-rgba">
                    <td className="table__body-item ">1 семестр</td>
                    <td className="table__body-item">Б1.Б.02</td>
                    <td className="table__body-item">История</td>
                    <td className="table__body-item">4</td>
                    <td className="table__body-item">54</td>
                    <td className="table__body-item">144</td>
                    <td className="table__body-item">Экзамен</td>
                </tr>
                <tr className="table__body close-rgba">
                    <td className="table__body-item ">1 семестр</td>
                    <td className="table__body-item">Б1.Б.02</td>
                    <td className="table__body-item">История</td>
                    <td className="table__body-item">4</td>
                    <td className="table__body-item">54</td>
                    <td className="table__body-item">144</td>
                    <td className="table__body-item">Экзамен</td>
                </tr>
            </table>

            <ul className="helper__list ">
                <li className="helper__item close-rgba">
                    Закрытый предмет
                </li>
                <li className="helper__item open-rgba">
                    Не закрытый предмет
                </li>
                <li className="helper__item unknown-rgba">
                    Предмет не изучен
                </li>
            </ul>
        </>
    )
}

function AcademicPlanFragments(props) {
    const pageWidth = props.pageWidth
    const desktopWidth = 1200
    if (pageWidth <= desktopWidth) {
        return MobileFragment()
    } else {
        return DesktopFragment()
    }
}

function FilterFragments(props) {
    const pageWidth = props.pageWidth
    const desktopWidth = 1200
    if (pageWidth <= desktopWidth) {
        return (
            <>
                <Searcher />
                <Semester />
            </>
        )
    } else {
        return (
            <>
                <p className="filter__info">
                    Группа:КИ18-16Б Код специальность:09.03.04 <br></br>
                    Специальность: Програмная инженерия
                </p>
                <Semester />
                <div className="filter__check">
                    <p><input type="checkbox" name="a" value="1417"></input> Только закрытые дисциплины</p>
                    <p><input type="checkbox" name="a" value="1680"></input>Скрыть не изучаемые дисциплины</p>
                </div>
            </>
        )
    }
}

export const AcademicPlan = () => {
    return (
        <>
            <Header />
            <h1 className="main-title">
                <a className="main-title__link">Учебный план</a>
            </h1>
            
            <div className="filter container">
                <FilterFragments pageWidth={document.documentElement.scrollWidth} />
            </div>
            <section className="academic-plan container">
                <AcademicPlanFragments pageWidth={document.documentElement.scrollWidth} />
            </section>
            <Pagination />
        </>
    )
}