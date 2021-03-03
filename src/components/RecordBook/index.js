import React, { Fragment } from 'react';

import './index.scss'
import '../../styles/reprise.scss'

import { Header } from '../Header';

export const RecordBook = () => {
    return (
        <>
            <Header />
            <h1 className="main-title">
                <a className="main-title__link">Уведомления</a>
            </h1>

        </>
    )
}