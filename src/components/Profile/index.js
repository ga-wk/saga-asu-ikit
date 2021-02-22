import React, { Fragment } from 'react';

import './index.scss'
import { Header } from '../Header';

export const Profile = () => {
    return (
        <>
            <Header/>
            <div className="profile">
                <h1 className="main-title">
                    <a className="main-title__link">Профиль</a>
                </h1>
                <div className="profile-info">
                    <span className="profile-info__name">Сахно В.В.</span>
                </div>
            </div>
        </>
    )
}