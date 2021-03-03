import React, { Fragment } from 'react';

import './index.scss'
import '../../styles/reprise.scss'

import { Header } from '../Header';

function RecordBookHeader() {
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
            <section className="record-book container">
                <ul className="record-book__list">
                    <li className="record-book__item">
                        <h3 className="record-book__title">
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
                </ul>
            </section>
        </>
    )
}

function DesktopFragment() {
    return (
        <>

            Desktop
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
            <RecordBookFragments pageWidth={document.documentElement.scrollWidth} />
        </>
    )
}