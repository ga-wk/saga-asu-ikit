import React from 'react';

import './index.scss'
import '../../styles/reprise.scss'

import { Header } from '../Header';

import { Semester, Searcher } from '../Public';

export const AcademicPlan = () => {
    return (
        <>
            <Header />
            <h1 className="main-title">
                <a className="main-title__link">Учебный план</a>
            </h1>
            <div className="filter">
                <Searcher />
                <Semester />
            </div>
            <section className="academic-plan container">
                {/* <ListOfOrdersFragments pageWidth={document.documentElement.scrollWidth} /> */}
            </section>
        </>
    )
}