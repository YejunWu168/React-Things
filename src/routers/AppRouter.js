import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SidebarNav from '../components/SidebarNav';
import Inbox from "../components/pages/Inbox";
import Today from "../components/pages/Today";
import Work from "../components/pages/Work";
import Custom from "../components/pages/Custom";

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <SidebarNav />
      <Switch>
        <Route path="/" component={Inbox} exact={true} />
        <Route path="/today" component={Today} />
        <Route path="/work" component={Work} />
        <Route path="/:custom" component={Custom} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
