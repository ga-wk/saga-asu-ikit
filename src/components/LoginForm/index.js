import React, {useRef} from 'react';
import './index.scss';
import { sfuLoginImageTablet, sfuLoginImageMobile } from "../../assets/images";

// import axios from 'axios'


export function LoginForm() {

  let loginRef = useRef()
  let passwordRef = useRef()

  async function handleSubmit(e) {
    e.preventDefault()

    const url = "http://193.218.136.174:8080/cabinet/rest/auth/login"

    async function postData(url = '', data = {}) {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
      });
      return await response.json()
    }

    let bodyPost = {
      "username": loginRef.current.value,
      "password": passwordRef.current.value,
      "appToken": "4xNEa3sFzQ"
    };

    postData(url, bodyPost).then((data) => {
      console.log(data)
    })
  }

  return (
    <section className="login">
    {/* <div className="login__background"></div> */}
    <div className="login__wrapper">
      <div className="login__wrapper-fixed">
        <p className="login__logo">
          <img className="login__logo-image mobile-image-logo" src={sfuLoginImageMobile} width="54" height="61" alt="СФУ ЛОГО" />
          <img className="login__logo-image tablet-image-logo" src={sfuLoginImageTablet} width="117" height="226" alt="СФУ ЛОГО"/>
          <span className="login__logo-title">АСУ<br/>ИКИТ</span>
        </p>
        <form className="login__form" method="POST" onSubmit={handleSubmit}>
          <p className="login__text">Вход в личный кабинет:</p>
          <p className="login__field login__login">
            <input className="login__input login__login-input" type="text" name="login" placeholder="Логин" ref={loginRef}/>
            <svg className="login__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="#c0c0c0" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/>
            </svg>
          </p>
          <p className="login__field login__password">
            <input className="login__input login__password-input" type="password" name="password" placeholder="Пароль" ref={passwordRef} />
            <svg className="login__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="#c0c0c0" d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.707 13.946l-1.035 1.054h-.672v1h-1v1h-3v-2.292l3.146-3.185c.496 1.111 1.419 1.988 2.561 2.423zm5.293-4.279c0 2.025-1.642 3.667-3.667 3.667-2.024 0-3.666-1.642-3.666-3.667s1.642-3.667 3.666-3.667c2.025 0 3.667 1.642 3.667 3.667zm-1.375-1.375c0-.506-.41-.917-.917-.917s-.916.411-.916.917.409.917.916.917.917-.411.917-.917z"/>
            </svg>
          </p>
          <button className="login__button" type="submit">Войти</button>
        </form>
      </div>
    </div>

    </section>
  )
}
