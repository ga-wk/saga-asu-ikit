import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { HeaderPage } from './pages/HeaderPage'
import { ProfilePage } from './pages/ProfilePage'
import { NotificationsPage } from './pages/NotificationsPage'
import { RecordBookPage } from './pages/RecordBookPage'
import { EventsCalendarPage } from './pages/EventsCalendarPage'
import { EventsCalendar } from './components/EventsCalendar'
import { ListOfOrdersPage} from './pages/ListOfOrdersPage'
import { OrderingPage } from './pages/OrderingPage'
import { AcademicPlanPage } from './pages/AcademicPlanPage'
import {HistoryPage} from './pages/HistoryPage'
import { StudentSchedulePage } from './pages/StudentSchedulePage'


export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/login" exact component={Login}/>
          <Route path="/" exact component={ProfilePage}/>
          <Route path="/notifications" exact component={NotificationsPage}/>
          <Route path="/recordbook" exact component={RecordBookPage}/>
          <Route path="/eventscalendar" exact component={ EventsCalendarPage }/>
          <Route path="/listoforders" exact component={ ListOfOrdersPage }/>
          <Route path="/ordering" exact component={ OrderingPage }/>
          <Route path="/academicplan" exact component={ AcademicPlanPage }/>
          <Route path="/schedule" exact component={ StudentSchedulePage }/>
          <Route path="/ordering/history" exact component={ HistoryPage }/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
