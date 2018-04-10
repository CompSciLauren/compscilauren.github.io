import React from 'react';

import './recommendations.css';
import TomPagano from './tompagano.jpg';
import RecommendationPerson from './recommendationperson.jpg';

const Recommendations = () => (
  <div>
    <h3>Recommendations</h3>
    <div className="tom-pagano-picture-container">
      <img src={TomPagano} alt="TomPagano"/>
    </div>
    <h2>Tom Pagano, VP/CIO Johnson County Community College Information Services</h2>
    <h1>December 3, 2017</h1>
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
    <div className="recommendation-person-picture-container">
      <img src={RecommendationPerson} alt="RecommendationPerson"/>
    </div>
    <h2>Your Name Here</h2>
    <h1>Date Here</h1>
    <p>
    Have you worked with me on a project or in an organization? You can write an honest
     review via LinkedIn or by contacting me. Thanks!
    </p>
  </div>
);

export default Recommendations;
