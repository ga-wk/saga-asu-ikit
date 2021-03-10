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

function MobileFragment() {
    return (
        <>
            <ul className="list-of-orders__list " onClick={itemClick}>
                <li className="list-of-orders__item item_close ">
                    <h3 className="list-of-orders__title">
                        12.08.2019
                        </h3>
                    <div className="list-of-orders__info">
                        <ul className="info__list">
                            <li className="info__item">
                                Семестр: 2018 - 2019 (Весна)
                                </li>
                            <li className="info__item">
                                Группа: КИ18-17/2Б
                                </li>
                            <li className="info__item">
                                Дата приказа: 12.08.2019
                                </li>
                            <li className="info__item">
                                Тип приказа: ГАС
                                </li>
                            <li className="info__item">
                                Номер приказа: 14082/С
                                </li>
                            <li className="info__item">
                                Описание приказа: Дата: с 01.08.2019 по 31.01.2020; О назначении государственной академической стипендии
                                </li>
                            <li className="info__item">
                                Пункт приказа: Сумма: 2480.0 (руб.);
                                п.1 Назначить государственную академическую стипендию в размере, установленном приказом ректора СФУ, с $date1$ по $date2$ следующим обучающимся, успешно прошедшим промежуточную аттестацию:.
                                </li>
                        </ul>
                    </div>
                </li>
                <li className="list-of-orders__item item_close ">
                    <h3 className="list-of-orders__title">
                        12.08.2019
                        </h3>
                    <div className="list-of-orders__info">
                        <ul className="info__list">
                            <li className="info__item">
                                Семестр: 2018 - 2019 (Весна)
                                </li>
                            <li className="info__item">
                                Группа: КИ18-17/2Б
                                </li>
                            <li className="info__item">
                                Дата приказа: 12.08.2019
                                </li>
                            <li className="info__item">
                                Тип приказа: ГАС
                                </li>
                            <li className="info__item">
                                Номер приказа: 14082/С
                                </li>
                            <li className="info__item">
                                Описание приказа: Дата: с 01.08.2019 по 31.01.2020; О назначении государственной академической стипендии
                                </li>
                            <li className="info__item">
                                Пункт приказа: Сумма: 2480.0 (руб.);
                                п.1 Назначить государственную академическую стипендию в размере, установленном приказом ректора СФУ, с $date1$ по $date2$ следующим обучающимся, успешно прошедшим промежуточную аттестацию:.
                                </li>
                        </ul>
                    </div>
                </li>
                <li className="list-of-orders__item item_close ">
                    <h3 className="list-of-orders__title">
                        12.08.2019
                        </h3>
                    <div className="list-of-orders__info">
                        <ul className="info__list">
                            <li className="info__item">
                                Семестр: 2018 - 2019 (Весна)
                                </li>
                            <li className="info__item">
                                Группа: КИ18-17/2Б
                                </li>
                            <li className="info__item">
                                Дата приказа: 12.08.2019
                                </li>
                            <li className="info__item">
                                Тип приказа: ГАС
                                </li>
                            <li className="info__item">
                                Номер приказа: 14082/С
                                </li>
                            <li className="info__item">
                                Описание приказа: Дата: с 01.08.2019 по 31.01.2020; О назначении государственной академической стипендии
                                </li>
                            <li className="info__item">
                                Пункт приказа: Сумма: 2480.0 (руб.);
                                п.1 Назначить государственную академическую стипендию в размере, установленном приказом ректора СФУ, с $date1$ по $date2$ следующим обучающимся, успешно прошедшим промежуточную аттестацию:.
                                </li>
                        </ul>
                    </div>
                </li>
                <li className="list-of-orders__item item_close ">
                    <h3 className="list-of-orders__title">
                        12.08.2019
                        </h3>
                    <div className="list-of-orders__info">
                        <ul className="info__list">
                            <li className="info__item">
                                Семестр: 2018 - 2019 (Весна)
                                </li>
                            <li className="info__item">
                                Группа: КИ18-17/2Б
                                </li>
                            <li className="info__item">
                                Дата приказа: 12.08.2019
                                </li>
                            <li className="info__item">
                                Тип приказа: ГАС
                                </li>
                            <li className="info__item">
                                Номер приказа: 14082/С
                                </li>
                            <li className="info__item">
                                Описание приказа: Дата: с 01.08.2019 по 31.01.2020; О назначении государственной академической стипендии
                                </li>
                            <li className="info__item">
                                Пункт приказа: Сумма: 2480.0 (руб.);
                                п.1 Назначить государственную академическую стипендию в размере, установленном приказом ректора СФУ, с $date1$ по $date2$ следующим обучающимся, успешно прошедшим промежуточную аттестацию:.
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
                    <th className="table__header-item">Группа</th>
                    <th className="table__header-item">Номер приказа</th>
                    <th className="table__header-item">Дата приказа</th>
                    <th className="table__header-item">Тип приказа</th>
                    <th className="table__header-item">Описание приказа</th>
                    <th className="table__header-item">Пункт приказа</th>
                </tr>
                <tr className="table__body">
                    <td className="table__body-item">2018 - 2019 (весна)”</td>
                    <td className="table__body-item">КИ18-17/2Б</td>
                    <td className="table__body-item">14082/С</td>
                    <td className="table__body-item">12.08.2019</td>
                    <td className="table__body-item">ГАС</td>
                    <td className="table__body-item">Дата: с 01.08.2019 по 31.01.2020; О назначении государственной академической стипендии</td>
                    <td className="table__body-item"> Сумма: 2480.0 (руб.);
 п.1 Назначить государственную академическую стипендию в размере, установленном приказом ректора СФУ, с $date1$ по $date2$ следующим обучающимся, успешно прошедшим промежуточную аттестацию:. </td>
                </tr>
                <tr className="table__body">
                    <td className="table__body-item">2018 - 2019 (весна)”</td>
                    <td className="table__body-item">КИ18-17/2Б</td>
                    <td className="table__body-item">14082/С</td>
                    <td className="table__body-item">12.08.2019</td>
                    <td className="table__body-item">ГАС</td>
                    <td className="table__body-item">Дата: с 01.08.2019 по 31.01.2020; О назначении государственной академической стипендии</td>
                    <td className="table__body-item"> Сумма: 2480.0 (руб.);
 п.1 Назначить государственную академическую стипендию в размере, установленном приказом ректора СФУ, с $date1$ по $date2$ следующим обучающимся, успешно прошедшим промежуточную аттестацию:. </td>
                </tr>
                <tr className="table__body">
                    <td className="table__body-item">2018 - 2019 (весна)”</td>
                    <td className="table__body-item">КИ18-17/2Б</td>
                    <td className="table__body-item">14082/С</td>
                    <td className="table__body-item">12.08.2019</td>
                    <td className="table__body-item">ГАС</td>
                    <td className="table__body-item">Дата: с 01.08.2019 по 31.01.2020; О назначении государственной академической стипендии</td>
                    <td className="table__body-item"> Сумма: 2480.0 (руб.);
 п.1 Назначить государственную академическую стипендию в размере, установленном приказом ректора СФУ, с $date1$ по $date2$ следующим обучающимся, успешно прошедшим промежуточную аттестацию:. </td>
                </tr>
                <tr className="table__body">
                    <td className="table__body-item">2018 - 2019 (весна)”</td>
                    <td className="table__body-item">КИ18-17/2Б</td>
                    <td className="table__body-item">14082/С</td>
                    <td className="table__body-item">12.08.2019</td>
                    <td className="table__body-item">ГАС</td>
                    <td className="table__body-item">Дата: с 01.08.2019 по 31.01.2020; О назначении государственной академической стипендии</td>
                    <td className="table__body-item"> Сумма: 2480.0 (руб.);
 п.1 Назначить государственную академическую стипендию в размере, установленном приказом ректора СФУ, с $date1$ по $date2$ следующим обучающимся, успешно прошедшим промежуточную аттестацию:. </td>
                </tr>
            </table>
        </>
    )
}

function ListOfOrdersFragments(props) {
    const pageWidth = props.pageWidth

    const desktopWidth = 1200
    if (pageWidth <= desktopWidth) {
        return MobileFragment()
    } else {
        return DesktopFragment()
    }
}

export const ListOfOrders = () => {
    return (
        <>
            <Header />
            <h1 className="main-title">
                <a className="main-title__link">Список приказов</a>
            </h1>

            <section className="list-of-orders container">
                <ListOfOrdersFragments pageWidth={document.documentElement.scrollWidth} />
            </section>
        </>
    )
}