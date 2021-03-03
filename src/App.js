import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { HeaderPage } from './pages/HeaderPage'
import { ProfilePage } from './pages/ProfilePage'
import { NotificationsPage } from './pages/NotificationsPage'
import { RecordBookPage } from './pages/RecordBookPage'
import { EventsCalendarPage } from './pages/EventsCalendarPage'
import { EventsCalendar } from './components/EventsCalendar';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/header" exact component={HeaderPage}/>
          <Route path="/profile" exact component={ProfilePage}/>
          <Route path="/notifications" exact component={NotificationsPage}/>
          <Route path="/recordbook" exact component={RecordBookPage}/>
          <Route path="/eventscalendar" exact component={ EventsCalendarPage }/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
