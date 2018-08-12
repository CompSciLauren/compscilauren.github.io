import React from 'react';
import { withPrefix } from 'gatsby-link';

import TwitterLoader from '../components/TwitterLoader';

import './about.css';
import lauren_holding_cat from './images/contact/lauren_holding_cat.jpg';
import christy_mcward from './images/recommendations/christy_mcward.jpg';
import tom_pagano from './images/recommendations/tom_pagano.jpg';

const About = () => (
  <div className="container-fluid">
    <h1 className="text-center">About Me</h1>
    <div className="second-picture-container">
      <img
        className="img-responsive rounded-corners"
        src={lauren_holding_cat}
        alt="Lauren holding her orange cat."
      />
    </div>
    <p>
      I'm a forward-thinking troubleshooter, but not just in class or on the
      job. After learning of the lack of resources for girls interested in
      computer science who live West of the KC area, I partnered with three
      other women to start a new Girls Who Code Club in Lawrence, Kansas in
      2018. I'm also Founder and former President of the JCCC Computer Club,
      which began in 2017, and is a student organization to help students
      develop coding skills, collaborate on projects, and learn from
      professionals in the industry. One of my earlier endeavors was back in
      2016, when I Co-Founded KC STEMinists, an organization that teaches Kansas
      City area middle and high school girls how to code, with an emphasis on
      entrepreneurship and community-driven development. I also have extensive
      leadership and volunteer experience in a variety of student and non-profit
      organizations.
    </p>
    <p>
      With a strong grasp of computer science fundamentals and a knowledge base
      of more advanced coding concepts that grows each day, it is my priority to
      provide high-quality technological solutions to our communities.
    </p>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <h1>Recommendations</h1>
    <div className="christy-mcward-picture-container">
      <img src={christy_mcward} alt="Christy Mcward portrait picture." />
    </div>
    <h3 className="left">
      Christy McWard, Director of Communications & Advancement at University of
      Kansas
    </h3>
    <h4>April 2018</h4>
    <p>
      “Lauren is exceptional in every one of the many roles she plays at Johnson
      County Community College. As a student, she works hard and excels in her
      classes while building strong relationships with faculty and classmates.
      As a campus leader, she is engaged in several groups, not only as a
      member, but often as an officer, a co-founder, an event planner, or a
      public speaker on behalf of the groups she belongs to. As an employee of
      JCCC's Collaboration Center, the CoLab, where I was her supervisor, she
      was a shining example of what it means to be a committed, responsible and
      enthusiastic colleague. And finally, she is a delightful person through
      and through. Her kindness, compassion and curiosity about the world are
      contagious among all who have the good fortune to work with her."
    </p>
    <hr />
    <br />
    <div className="tom-pagano-picture-container">
      <img src={tom_pagano} alt="Tom Pagano portrait picture." />
    </div>
    <h3 className="left">
      Tom Pagano, VP/CIO at Johnson County Community College
    </h3>
    <h4>December 2017</h4>
    <p>
      “I met Lauren through the JCCC Student Computer Club. After an insightful
      and vibrant first meeting, I was impressed with her desire to enhance the
      Computer Club experience. As the President of the Club, Lauren, worked
      with the Faculty Facilitator to incorporate me into the meetings. It has
      been a very rewarding experience for me thus far and the feedback from the
      group has been positive. Lauren has visited with me and on a number of
      occasions to talk about career planning, course selection and how to
      integrate with local IT professional organizations. Lauren is well poised
      in her education to make innovative contributions to the IT Industry, the
      local organizations she will become involved with and the way we use
      technology to make our lives better. I look forward to the ongoing
      interaction with Lauren as she moves on to future success.”
    </p>
    <hr />
    <br />
    <h2>News Stories</h2>
    <p>
      <a
        href="http://www2.ljworld.com/news/2018/jun/05/got-daughter-interested-computers-lawrence-now-has/"
        target="_blank"
      >
        Have a daughter interested in computers? Lawrence now has a ‘Girls Who
        Code’ club
      </a>
      <br />
      <a
        href="http://blogs.jccc.edu/campusledger/2017/11/07/some-students-so-involved-others-not-so-much/"
        target="_blank"
      >
        Some students so involved, others not so much
      </a>
      <br />
      <a
        href="https://blogs.jccc.edu/campusledger/2017/10/11/honors-program-holds-used-book-sale-to-support-student-scholarships/"
        target="_blank"
      >
        Honors program holds used book sale to support student scholarships
      </a>
      <br />
      <a
        href="http://www.gardneredge.com/featured/gehs-students-initiated-into-national-technical-honor-society/"
        target="_blank"
      >
        GEHS students initiated into National Technical Honor Society
      </a>
    </p>
    <a
      className="twitter-timeline"
      data-height="500"
      data-link-color="#981CEB"
      href="https://twitter.com/CompSciLauren?ref_src=twsrc%5Etfw"
    >
      Tweets by CompSciLauren
    </a>
    <TwitterLoader />
  </div>
);
export default About;
