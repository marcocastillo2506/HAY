import React from 'react';
import { Switch, Route } from 'react-router-dom';

//SubLayouts
import Home from "./pages/Home.jsx";
import Cohort from "./pages/Cohort.jsx";
import HolaCode from "./components/home/HolaCode.jsx";
import HeaderBar from "./components/home/HeaderBar.jsx";

const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <div>
      //deleting this since it was causing conflicts with all the other base pages,
      //it kept duplicating information as well as traspassing to pages where it
      //wasn't meant to be
    </div>
    <div>
      /*deleting this since it was causing conflicts with all the other base pages,
      it kept duplicating information as well as traspassing to pages where it
      wasn't meant to be*/
    </div>
    <main>
      <Switch>
        <Route exact path={`${match.path}`} component={Home} />
        <Route path={`${match.url}cohort`} component={Cohort} />
      </Switch>
    </main>
  </div>
)

export default PrimaryLayout;
