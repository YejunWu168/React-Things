import React from 'react';
import Nav from './Nav/Nav'
import DashboardContainer from '../containers/DashboardContainer'

const App = ({match : {params}}) => (
  <div className="container">
    <Nav />
    <DashboardContainer params={params}/>
  </div>
);


export default App;