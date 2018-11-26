import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SidebarNav from '../components/SidebarNav';
import Inbox from "../routes/Inbox";
import Today from "../routes/Today";
import Work from "../routes/Work";
import Custom from "../routes/Custom";

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
