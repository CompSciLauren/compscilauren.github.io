import React from 'react';

import './recommendations.css';
import tom_pagano from './images/recommendations/tom_pagano.jpg';
import recommendations_person from './images/recommendations/recommendations_person.png';

const Recommendations = () => (
  <div>
    <h1>Recommendations</h1>
    <div className="tom-pagano-picture-container">
      <img src={tom_pagano} alt="Tom Pagano portrait picture."/>
    </div>
    <h2 className="left">Tom Pagano, VP/CIO at Johnson County Community College</h2>
    <h3>December 3, 2017</h3>
    <p>
    “I met Lauren through the JCCC Student Computer Club. After an insightful and vibrant first meeting, I was impressed
     with her desire to enhance the Computer Club experience. As the President of the Club, Lauren, worked with the Faculty
      Facilitator to incorporate me into the meetings. It has been a very rewarding experience for me thus far and the
       feedback from the group has been positive. Lauren has visited with me and on a number of occasions to talk about
        career planning, course selection and how to integrate with local IT professional organizations. Lauren is well
         poised in her education to make innovative contributions to the IT Industry, the local organizations she will
          become involved with and the way we use technology to make our lives better. I look forward to the ongoing
           interaction with Lauren as she moves on to future success.”
    </p>
    <hr></hr>
    <br />
    <div className="recommendations-person-picture-container">
      <img src={recommendations_person} alt="Drawing of a person used to represent anybody interested in giving a recommendation."/>
    </div>
    <h2 className="left">Your Name Here</h2>
    <h3>Date Here</h3>
    <p>
    Have you worked with me on a project or in an organization? You can write an honest
     review via LinkedIn or by contacting me. Thanks!
    </p>
  </div>
);

export default Recommendations;
