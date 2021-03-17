import React, { Fragment } from 'react';

import './index.scss'
import '../../styles/reprise.scss'

import { Header } from '../Header';

export const AcademicPlan = () => {
    return (
        <>
            <Header />
            <h1 className="main-title">
                <a className="main-title__link">Учебный план</a>
            </h1>

            <section className="academic-plan container">
                <ListOfOrdersFragments pageWidth={document.documentElement.scrollWidth} />
            </section>
        </>
    )
}