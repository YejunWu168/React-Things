import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import InboxPage from "../components/pages/InboxPage";
import TodayPage from "../components/pages/TodayPage";
import WorkPage from "../components/pages/WorkPage";
import CustomPage from "../components/pages/CustomPage";
import SidebarNav from "../components/SidebarNav";

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
