import React from 'react';
import './index.css';
import {NavBar} from './components/topnav'
import SideBar from './components/sidebar'
import DashboardContainer from './components/dashboardcontiainer'


const App = () => {
  return (
    <div>
      <NavBar>
      </NavBar>
      <section className="flex">
        <div className="relative" style={{width: '260px'}}>
          <SideBar></SideBar>
        </div>
        <div className="flex-1">
          <DashboardContainer/>
        </div>
      </section>
    </div>
  );
}

export default App;
