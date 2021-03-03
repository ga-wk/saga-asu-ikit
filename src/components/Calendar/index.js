import React from 'react'

import './index.scss'

export default function Calendar() {

    function showInfo(event) {
        const list = document.querySelector('.events-calendar__info')
        list.classList.toggle('show')

        console.log(list)
    }


    return (
        <div id="app-calendar">
            <table>
                <tbody>
                    <tr className="app-calendar__week"> 
                        <th>пн</th>
                        <th>вт</th>
                        <th>ср</th>
                        <th>чт</th>
                        <th>пт</th>
                        <th>сб</th>
                        <th>вс</th>
                    </tr>
                    <tr className="app-calendar__days">
                        <th onClick={showInfo}>26</th>
                        <th onClick={showInfo}>27</th>
                        <th onClick={showInfo}>28</th>
                        <th onClick={showInfo}>29</th>
                        <th onClick={showInfo}>30</th>
                        <th onClick={showInfo}>31</th>
                        <th onClick={showInfo}>01</th>
                    </tr>
                    <tr className="app-calendar__days">
                        <th onClick={showInfo}>02</th>
                        <th onClick={showInfo}>03</th>
                        <th onClick={showInfo}>04</th>
                        <th onClick={showInfo}>05</th>
                        <th onClick={showInfo}>06</th>
                        <th onClick={showInfo}>07</th>
                        <th onClick={showInfo}>08</th>
                    </tr>
                    <tr className="app-calendar__days">
                        <th onClick={showInfo}>26</th>
                        <th onClick={showInfo}>27</th>
                        <th onClick={showInfo}>28</th>
                        <th onClick={showInfo}>29</th>
                        <th onClick={showInfo}>30</th>
                        <th onClick={showInfo}>31</th>
                        <th onClick={showInfo}>01</th>
                    </tr>
                    <tr className="app-calendar__days">
                        <th onClick={showInfo}>02</th>
                        <th onClick={showInfo}>03</th>
                        <th onClick={showInfo}>04</th>
                        <th onClick={showInfo}>05</th>
                        <th onClick={showInfo}>06</th>
                        <th onClick={showInfo}>07</th>
                        <th onClick={showInfo}>08</th>
                    </tr>
                    <tr className="app-calendar__days">
                        <th onClick={showInfo}>26</th>
                        <th onClick={showInfo}>27</th>
                        <th onClick={showInfo}>28</th>
                        <th onClick={showInfo}>29</th>
                        <th onClick={showInfo}>30</th>
                        <th onClick={showInfo}>31</th>
                        <th onClick={showInfo}>01</th>
                    </tr>
                    <tr className="app-calendar__days">
                        <th onClick={showInfo}>26</th>
                        <th onClick={showInfo}>27</th>
                        <th onClick={showInfo}>28</th>
                        <th onClick={showInfo}>29</th>
                        <th onClick={showInfo}>30</th>
                        <th onClick={showInfo}>31</th>
                        <th onClick={showInfo}>01</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}