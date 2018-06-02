import React from 'react';

import FIRST from '../images/portfolio/first_robotics.jpg';
import FIRST_Team_1710 from '../images/portfolio/portfolio-pages/first_team_1710.jpg';
import './first-robotics.css';

const FIRST_Robotics = () => (
  <div>
    <h1>FIRST Robotics</h1>
    <div className="row">
      <div className="col-md-6">
        <img className="set-img" src={FIRST} alt="First non-profit logo." />
      </div>
      <div className="col-md-6">
        <img className="set-img" src={FIRST_Team_1710} alt="First Robotics Team 1710 logo." />
      </div>
    </div>
    <p>
      <i>Brief description.</i>
    </p>
  </div>
);

export default FIRST_Robotics;