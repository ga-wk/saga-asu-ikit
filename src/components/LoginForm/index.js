import React, { Fragment } from 'react';

import './index.scss';
import { sfuLoginImageMobile } from "../../assets/images";


export const LoginForm = () => (
  <section className="login">
  <div className="login__background"></div>
  <div className="login__wrapper">
    <div className="login__wrapper-fixed">
      <p className="login__logo">
        <img className="login__logo-image" src={sfuLoginImageMobile} width="54" height="61" alt="СФУ ЛОГО" />
        <span className="login__logo-title">АСУ ИКИТ</span>
      </p>
      <form className="login__form">
        
      </form>
    </div>
  </div>

  </section>
)
