import React from 'react'

import {Header} from '../../Header/index'

import './index.scss'

function History() {
  return (
    <>
      <Header/>
      <div className="ordering-container">
        <h1 className="main-title">
          <a className="main-title__link">Студент/Заказ справок/История</a>
        </h1>
      </div>

      <section className="list-of-orders container">
          <OrderingFragments pageWidth={document.documentElement.scrollWidth} />
      </section>
      </>

  )
}

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
                      По месту требования 30.11.2020
                  </h3>
                  <div className="list-of-orders__info">
                  <ul className="info__list">
                          <li className="info__item">
                               № регистрации: № не присвоен
                              </li>
                          <li className="info__item">
                          ФИО: Газзаев Андрей Александрович
                              </li>
                          <li className="info__item">
                          Группа: КИ18-16Б
                              </li>
                          <li className="info__item">
                          Вид: По месту требования
                              </li>
                          <li className="info__item">
                              ГП: нет
                              </li>
                          <li className="info__item">
                          Дата подачи: 30.11.2020
                              </li>
                          <li className="info__item">
                          Статус: Создан
                              </li>
                              <li className="info__item">
                              Дата выполнения: Информации нет
                              </li>
                              <li className="info__item">
                              Факт получения: Нет
                              </li>
                              <li className="info__item info__item-cancel">
                              <p><span>Отменить заявку:</span><button class="cancel-button">Отменить</button></p>
                              </li>
                      </ul>
                  </div>
              </li>
              <li className="list-of-orders__item item_close ">
                  <h3 className="list-of-orders__title">
                      Пенсионный фонд 24.11.2020
                      </h3>
                  <div className="list-of-orders__info">
                  <ul className="info__list">
                          <li className="info__item">
                               № регистрации: № не присвоен
                              </li>
                          <li className="info__item">
                          ФИО: Газзаев Андрей Александрович
                              </li>
                          <li className="info__item">
                          Группа: КИ18-16Б
                              </li>
                          <li className="info__item">
                          Вид: По месту требования
                              </li>
                          <li className="info__item">
                              ГП: нет
                              </li>
                          <li className="info__item">
                          Дата подачи: 30.11.2020
                              </li>
                          <li className="info__item">
                          Статус: Создан
                              </li>
                              <li className="info__item">
                              Дата выполнения: Информации нет
                              </li>
                              <li className="info__item">
                              Факт получения: Нет
                              </li>
                              <li className="info__item info__item-cancel">
                              <p><span>Отменить заявку:</span><button class="cancel-button">Отменить</button></p>
                              </li>
                      </ul>
                  </div>
              </li>
              <li className="list-of-orders__item item_close ">
                  <h3 className="list-of-orders__title">
                  Пенсионный фонд 24.11.2020
                      </h3>
                  <div className="list-of-orders__info">
                  <ul className="info__list">
                          <li className="info__item">
                               № регистрации: № не присвоен
                              </li>
                          <li className="info__item">
                          ФИО: Газзаев Андрей Александрович
                              </li>
                          <li className="info__item">
                          Группа: КИ18-16Б
                              </li>
                          <li className="info__item">
                          Вид: По месту требования
                              </li>
                          <li className="info__item">
                              ГП: нет
                              </li>
                          <li className="info__item">
                          Дата подачи: 30.11.2020
                              </li>
                          <li className="info__item">
                          Статус: Создан
                              </li>
                              <li className="info__item">
                              Дата выполнения: Информации нет
                              </li>
                              <li className="info__item">
                              Факт получения: Нет
                              </li>
                              <li className="info__item info__item-cancel">
                              <p><span>Отменить заявку:</span><button class="cancel-button">Отменить</button></p>
                              </li>
                      </ul>
                  </div>
              </li>
              <li className="list-of-orders__item item_close ">
                  <h3 className="list-of-orders__title">
                  Пенсионный фонд 24.11.2020
                      </h3>
                  <div className="list-of-orders__info">
                      <ul className="info__list">
                          <li className="info__item">
                               № регистрации: № не присвоен
                              </li>
                          <li className="info__item">
                          ФИО: Газзаев Андрей Александрович
                              </li>
                          <li className="info__item">
                          Группа: КИ18-16Б
                              </li>
                          <li className="info__item">
                          Вид: По месту требования
                              </li>
                          <li className="info__item">
                              ГП: нет
                              </li>
                          <li className="info__item">
                          Дата подачи: 30.11.2020
                              </li>
                          <li className="info__item">
                          Статус: Создан
                              </li>
                              <li className="info__item">
                              Дата выполнения: Информации нет
                              </li>
                              <li className="info__item">
                              Факт получения: Нет
                              </li>
                              <li className="info__item info__item-cancel">
                              <p><span>Отменить заявку:</span><button className="cancel-button">Отменить</button></p>
                              </li>
                      </ul>
                  </div>
              </li>
          </ul>

      </>
  )
}

function OrderingFragments(props) {
  const pageWidth = props.pageWidth

  const desktopWidth = 1200
  if (pageWidth <= desktopWidth) {
      return MobileFragment()
  } else {
      // return DesktopFragment()
      return (
        <div>
          <table className="ordering-table">
            <tbody>
              <tr className="ordering-table__row">
                <th className="ordering-table__th">№ регистрации</th>
                <th className="ordering-table__th">ФИО</th>
                <th className="ordering-table__th">Группа</th>
                <th className="ordering-table__th">Вид</th>
                <th className="ordering-table__th">ГП</th>
                <th className="ordering-table__th">Дата подачи</th>
                <th className="ordering-table__th">Статус</th>
                <th className="ordering-table__th">Дата выполнения</th>
                <th className="ordering-table__th">Факт получения</th>
                <th className="ordering-table__th">Отменить заявку</th>
              </tr>
              <tr className="ordering-table">
                <td className="ordering-table__td">№ не присвоен</td>
                <td className="ordering-table__td">Газзаев Андрей Александрович</td>
                <td className="ordering-table__td">КИ18-16Б</td>
                <td className="ordering-table__td">По месту  требования</td>
                <td className="ordering-table__td">Нет</td>
                <td className="ordering-table__td">30.11.2020 09:40</td>
                <td className="ordering-table__td">Создан</td>
                <td className="ordering-table__td">Информации нет</td>
                <td className="ordering-table__td">Нет</td>
                <td className="ordering-table__td">
                  <button className="cancel-button">Отменить</button>
                </td>
              </tr>
              <tr className="ordering-table">
                <td className="ordering-table__td">2991</td>
                <td className="ordering-table__td">Газзаев Андрей Александрович</td>
                <td className="ordering-table__td">КИ18-16Б</td>
                <td className="ordering-table__td">По месту  требования</td>
                <td className="ordering-table__td">Нет</td>
                <td className="ordering-table__td">30.11.2020 09:40</td>
                <td className="ordering-table__td">Создан</td>
                <td className="ordering-table__td">Информации нет</td>
                <td className="ordering-table__td">Нет</td>
                <td className="ordering-table__td"></td>
              </tr>
              <tr className="ordering-table">
                <td className="ordering-table__td">2991</td>
                <td className="ordering-table__td">Газзаев Андрей Александрович</td>
                <td className="ordering-table__td">КИ18-16Б</td>
                <td className="ordering-table__td">По месту  требования</td>
                <td className="ordering-table__td">Нет</td>
                <td className="ordering-table__td">30.11.2020 09:40</td>
                <td className="ordering-table__td">Создан</td>
                <td className="ordering-table__td">Информации нет</td>
                <td className="ordering-table__td">Нет</td>
                <td className="ordering-table__td"></td>
              </tr>
              <tr className="ordering-table">
                <td className="ordering-table__td">2991</td>
                <td className="ordering-table__td">Газзаев Андрей Александрович</td>
                <td className="ordering-table__td">КИ18-16Б</td>
                <td className="ordering-table__td">По месту  требования</td>
                <td className="ordering-table__td">Нет</td>
                <td className="ordering-table__td">30.11.2020 09:40</td>
                <td className="ordering-table__td">Создан</td>
                <td className="ordering-table__td">Информации нет</td>
                <td className="ordering-table__td">Нет</td>
                <td className="ordering-table__td"></td>
              </tr>
              <tr className="ordering-table">
                <td className="ordering-table__td">2991</td>
                <td className="ordering-table__td">Газзаев Андрей Александрович</td>
                <td className="ordering-table__td">КИ18-16Б</td>
                <td className="ordering-table__td">По месту  требования</td>
                <td className="ordering-table__td">Нет</td>
                <td className="ordering-table__td">30.11.2020 09:40</td>
                <td className="ordering-table__td">Создан</td>
                <td className="ordering-table__td">Информации нет</td>
                <td className="ordering-table__td">Нет</td>
                <td className="ordering-table__td"></td>
              </tr>
              <tr className="ordering-table">
                <td className="ordering-table__td">2991</td>
                <td className="ordering-table__td">Газзаев Андрей Александрович</td>
                <td className="ordering-table__td">КИ18-16Б</td>
                <td className="ordering-table__td">По месту  требования</td>
                <td className="ordering-table__td">Нет</td>
                <td className="ordering-table__td">30.11.2020 09:40</td>
                <td className="ordering-table__td">Создан</td>
                <td className="ordering-table__td">Информации нет</td>
                <td className="ordering-table__td">Нет</td>
                <td className="ordering-table__td"></td>
              </tr>
            </tbody>
          </table>
        </div>
      )
  }
}

export default History
