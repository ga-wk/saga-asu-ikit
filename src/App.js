import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { HeaderPage } from "./pages/HeaderPage";
import { ProfilePage } from "./pages/ProfilePage";
import { NotificationsPage } from "./pages/NotificationsPage";
import { RecordBookPage } from "./pages/RecordBookPage";
import { EventsCalendarPage } from "./pages/EventsCalendarPage";
import { EventsCalendar } from "./components/EventsCalendar";
import { ListOfOrdersPage } from "./pages/ListOfOrdersPage";
import { OrderingPage } from "./pages/OrderingPage";
import { AcademicPlanPage } from "./pages/AcademicPlanPage";
import { HistoryPage } from "./pages/HistoryPage";
import { StudentSchedulePage } from "./pages/StudentSchedulePage";
import {
  academicPlan,
  eventsCalendar,
  history,
  listOfOrders,
  login,
  notifications,
  ordering,
  profile,
  questionnaireList,
  recordBook,
  studentSchedule,
} from "./strings/links";
import { QuestionnairesPage } from "./pages/QuestionnairesPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path={login} exact component={Login} />
          <Route path={profile} exact component={ProfilePage} />
          <Route path={notifications} exact component={NotificationsPage} />
          <Route path={recordBook} exact component={RecordBookPage} />
          <Route path={eventsCalendar} exact component={EventsCalendarPage} />
          <Route path={listOfOrders} exact component={ListOfOrdersPage} />
          <Route path={ordering} exact component={OrderingPage} />
          <Route path={academicPlan} exact component={AcademicPlanPage} />
          <Route path={studentSchedule} exact component={StudentSchedulePage} />
          <Route path={history} exact component={HistoryPage} />
          <Route
            path={questionnaireList}
            exact
            component={QuestionnairesPage}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
