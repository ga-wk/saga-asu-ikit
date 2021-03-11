import React from 'react'

import {Header} from '../Header/index'

import './index.scss'

function OrderingHeader() {
  return (
      <>
          <header className="record-book__header container" styles={{paddingLeft: 0}}>
              <div className="record-book__semester">
                  <select className="semester__list" id="order-list" name="order-list">
                      <option className="semester__item">Пенсионный фонд</option>
                      <option className="semester__item">По месту требования</option>
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

function Ordering() {
  return (
    <>
      <Header/>
      <div className="ordering-container">
        <h1 className="main-title">
          <a className="main-title__link">Студент/Заказ справок</a>
        </h1>
        <h2 className="subtitle">Сервис заказа справок</h2>
        <form>
          <label for="order-list">Вид справки:</label>
          <OrderingHeader/>
          <label for="order-count">Кол-во:</label>
          <input className="ordering-input" type="text" id="order-count" placeholder="1"/>
          <p className="ordering-checkbox-paragraph">
            <label className="ordering-checkbox-label" for="official-seal">Наличие гербовой печати:</label>
            <input type="checkbox" className="ordering-checkbox"/>
          </p>
          <p className="ordering__desc">
          Оповещение на почту не придет, потому что почта не заполнена или отключено уведомление в модуле “Профиль”
          </p>
          <div class="buttons-wrapper">
            <button className="ordering-button profile-info__button profile-info__button-material">Заказать</button>
            <button className="ordering-button profile-info__button profile-info__button-social">История</button>
          </div>
        </form>

      </div>

    </>
  )
}



export default Ordering
