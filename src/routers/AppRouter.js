import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SidebarNav from '../components/SidebarNav';
import InboxPage from "../pages/InboxPage";
import TodayPage from "../pages/TodayPage";
import WorkPage from "../pages/WorkPage";
import CustomPage from "../pages/CustomPage";

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <SidebarNav />
      <Switch>
        <Route path="/" component={InboxPage} exact={true} />
        <Route path="/today" component={TodayPage} />
        <Route path="/work" component={WorkPage} />
        <Route path="/:custom" component={CustomPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
