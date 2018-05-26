import React from 'react';

import './recommendations.css';
import christy_mcward from './images/recommendations/christy_mcward.jpg';
import tom_pagano from './images/recommendations/tom_pagano.jpg';
import recommendations_person from './images/recommendations/recommendations_person.png';

const Recommendations = () => (
  <div>
    <h1>Recommendations</h1>
    <div className="christy-mcward-picture-container">
      <img src={christy_mcward} alt="Christy Mcward portrait picture." />
    </div>
    <h3 className="left">Christy McWard, Director of Communications & Advancement at University of Kansas</h3>
    <h4>April 2018</h4>
    <p>
      “Lauren is exceptional in every one of the many roles she plays at Johnson County Community College. As a student,
       she works hard and excels in her classes while building strong relationships with faculty and classmates. As
        a campus leader, she is engaged in several groups, not only as a member, but often as an officer, a
         co-founder, an event planner, or a public speaker on behalf of the groups she belongs to. As an
          employee of JCCC's Collaboration Center, the CoLab, where I was her supervisor, she was a
           shining example of what it means to be a committed, responsible and enthusiastic colleague.
            And finally, she is a delightful person through and through. Her kindness, compassion
             and curiosity about the world are contagious among all who have the good fortune to work with her."
    </p>
    <hr></hr>
    <br />
    <div className="tom-pagano-picture-container">
      <img src={tom_pagano} alt="Tom Pagano portrait picture." />
    </div>
    <h3 className="left">Tom Pagano, VP/CIO at Johnson County Community College</h3>
    <h4>December 2017</h4>
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
      <img src={recommendations_person} alt="Drawing of a person used to represent anybody interested in giving a recommendation." />
    </div>
    <h3 className="left">Your Name Here</h3>
    <h4>Date Here</h4>
    <p>
      Have you worked with me on a project or in an organization? You can write an honest
       review via LinkedIn or by contacting me. Thanks!
    </p>
  </div>
);

export default Recommendations;
