import React from 'react';
import {Link} from 'react-router-dom';


import {Tabs, Tab} from 'material-ui/Tabs';
import Home from "../../pages/Home.jsx";
import Cohort from "../../pages/Cohort.jsx";

var TabsExampleSimple = () => (
  <div class="rowTH">
    <Tabs>
    <div class="columnTH">
      <Link to="/"><Tab label="Home Page" >
      </Tab></Link>
    </div>

    <div class="columnTH">
    <Link to="/cohort"><Tab label="Cohort Page" >
    </Tab></Link>
    </div>
    </Tabs>
  </div>
);

export default TabsExampleSimple;
