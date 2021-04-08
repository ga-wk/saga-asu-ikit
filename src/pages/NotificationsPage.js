import React, { Fragment } from "react";

import { Notifications } from "../components/Notifications";
import { Header } from "../components/Header";

export const NotificationsPage = () => {
  return (
    <Fragment>
      <Header
        firstName={localStorage.getItem("firstName")}
        fullName={localStorage.getItem("fullName")}
      />
      <Notifications />
    </Fragment>
  );
};
