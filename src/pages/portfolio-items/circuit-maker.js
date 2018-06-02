import React from 'react';

import circuit_maker_overview from '../images/portfolio/portfolio-pages/circuit_maker_overview.png';

const Circuit_Maker = () => (
  <div className="container-fluid">
    <h1>Circuit Maker</h1>
    <img className="img-responsive" src={circuit_maker_overview} alt="Circuit Maker project overview image." />
    <p>
      <i>An online GUI for demonstrating binary logic gates.</i>
      <br />
      <p>Language Written In: JavaScript</p>
      <br />
      <br />
      <div className="row">
        <div className="col-md-6">
          <a href="http://circuit-maker.compscilauren.com" target="_blank"><button className="btn-block btn-info fa fa-magic"> Interact with the project online</button></a>
        </div>
        <div className="col-md-6">
          <a href="https://github.com/CompSciLauren/circuit-maker" target="_blank"><button className="btn-block btn-info fa fa-github"> View the project on GitHub</button></a>
        </div>
      </div>
    </p>
  </div>
);

export default Circuit_Maker;