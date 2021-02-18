import React from 'react'

import './index.scss'

import { sfuLogoHeaderMobile } from '../../assets/images'

function closedAll() {
  const sidebar = document.querySelector('.main-header__sidebar')
  const subnav = document.querySelector('.sidebar__subnav')
  const help = document.querySelector('.main-header__help')

  if (sidebar.classList.contains('sidebar--opened')) {
    sidebar.classList.remove('sidebar--opened')
    sidebar.classList.add('sidebar--closed')
  }
  if (subnav.classList.contains('sidebar__item--opened')) {
    subnav.classList.remove('sidebar__item--opened')
    subnav.classList.add('sidebar__item--closed')
  }
  if (help.classList.contains('help--open')) {
    help.classList.remove('help--open')
    help.classList.add('help--closed')
  }
  // sidebar.classList.remove('sidebar--opened')
  // subnav.classList.remove('sidebar__item--opened')
  // help.classList.remove('help--open')
  // sidebar.removeEventListener()
  // subnav.removeEventListener()
  // help.removeEventListener()
}

function sidebarClick(e) {
  e.preventDefault()
  const sidebar = document.querySelector('.main-header__sidebar')
  if (sidebar.classList.contains('sidebar--closed')) {
    closedAll()
    sidebar.classList.remove('sidebar--closed')
    sidebar.classList.add('sidebar--opened')
  } else if (sidebar.classList.contains('sidebar--opened')) {
    sidebar.classList.remove('sidebar--opened')
    sidebar.classList.add('sidebar--closed')
  }
}

function sublistClick(e) {
  e.preventDefault()
  const subnav = document.querySelector('.sidebar__subnav')
  if (subnav.classList.contains('sidebar__item--closed')) {
    subnav.classList.remove('sidebar__item--closed')
    subnav.classList.add('sidebar__item--opened')
  } else if (subnav.classList.contains('sidebar__item--opened')) {
    subnav.classList.remove('sidebar__item--opened')
    subnav.classList.add('sidebar__item--closed')
  }
}

function helpClick(e) {
  e.preventDefault()
  const help = document.querySelector('.main-header__help')
  if (help.classList.contains('help--closed')) {
    closedAll()
    help.classList.remove('help--closed')
    help.classList.add('help--open')
  } else if (help.classList.contains('help--open')) {
    help.classList.remove('help--open')
    help.classList.add('help--closed')
  }
}

export const Header = () => (
  <header className="main-header">
    <div className="main-header__top">
      <div className="main-header__inner-wrapper">
        <img className="main-header__logo-image" src={sfuLogoHeaderMobile} width="50" height="50" alt="СФУ ЛОГО" />
        <div className="main-header__profile">
        <span className="main-header__student-name">Виктор</span>
        <div className="main-header__help help help--closed">
          <ul className="help__list">
            <li className="help__item"><a className="help__link" href="#">Помощь</a></li>
            <li className="help__item"><a className="help__link" href="#">Сообщить о проблеме</a></li>
            <li className="help__item"><a className="help__link" href="#">Выход</a></li>
          </ul>
          <button className="help__toggle" onClick={helpClick}>Закрыть</button>
        </div>
        </div>
      </div>
    </div>
    <aside className="main-header__sidebar sidebar sidebar--closed">
      <ul className="sidebar__list">
        <li className="sidebar__item"><a className="sidebar__link" href="#">Профиль</a></li>
        <li className="sidebar__item"><a className="sidebar__link" href="#">Уведомления</a></li>
        <li className="sidebar__item sidebar__subnav sidebar__item--closed">
        <a className="sidebar__link sidebar__sublink" href="#" onClick={sublistClick}>Студент</a>
          <ul className="sidebar__sublist">
            <li className="sidebar__item sidebar__subitem"><a className="sidebar__link" href="#">Зачетная книжка</a></li>
            <li className="sidebar__item sidebar__subitem"><a className="sidebar__link" href="#">Календарь событий</a></li>
            <li className="sidebar__item sidebar__subitem"><a className="sidebar__link" href="#">Заказ справок</a></li>
            <li className="sidebar__item sidebar__subitem"><a className="sidebar__link" href="#">Опросник</a></li>
            <li className="sidebar__item sidebar__subitem"><a className="sidebar__link" href="#">Список приказов</a></li>
            <li className="sidebar__item sidebar__subitem"><a className="sidebar__link" href="#">Расписание студентов</a></li>
            <li className="sidebar__item sidebar__subitem"><a className="sidebar__link" href="#">Учебный план</a></li>
          </ul>
        </li>
      </ul>

      <button className="sidebar__toggle" type="button" onClick={sidebarClick}>Закрыть</button>
    </aside>
  </header>
)
