import React from 'react';

import './about.css';
import lauren_campus_ledger from './images/about/lauren_campus_ledger.jpg';
import lauren_ptk_induction_speech from './images/about/lauren_ptk_induction_speech.jpg';

const About = () => (
  <div className="container-fluid">
    <h1 className="text-center">About Lauren Stephenson</h1>
    <div className="custom-center-image">
      <img className="img-responsive" src={lauren_campus_ledger} alt="Lauren sitting at a table surrounded by objects that represent a few stem and j c c c experiences." />
    </div>
    <p>
      My name is Lauren Stephenson. As a KCIT Apprentice, Founder, Speaker, and Computer Science Student,
       I get to write code for diverse projects and participate in many exciting opportunities. Whether
        it's writing code for my OOP college class, working on a personal project, or teaching computer
         programming at non-profit events, I'm always having a great time. The majority of my computer
          programming experience is in Java and C++.
    </p>
    <div className="second-picture-container">
      <img className="img-responsive" src={lauren_ptk_induction_speech} alt="Lauren giving a speech at a p t k induction ceremony." />
    </div>
    <p>
    I'm a forward-thinking troubleshooter, but not just in class or on the job. After learning of the lack
     of resources for girls interested in computer science who live West of the KC area, I partnered with
      three other women to start a new Girls Who Code Club in Lawrence, Kansas in 2018. I'm also Founder
       and former President of the JCCC Computer Club, which began in 2017, and is a student organization
        to help students develop coding skills, collaborate on projects, and learn from professionals in
         the industry. One of my earlier endeavors was back in 2016, when I Co-Founded KC STEMinists, an
          organization that teaches Kansas City area middle and high school girls how to code, with an
           emphasis on entrepreneurship and community-driven development. I also have extensive leadership
            and volunteer experience in a variety of student and non-profit organizations.
    </p>
    <p>
    With a strong grasp of computer science fundamentals and a knowledge base of more advanced coding concepts
     that grows each day, it is my priority to provide high-quality technological solutions to our communities.
    </p>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <h2>News Stories</h2>
    <p>
      <a href="http://www2.ljworld.com/news/2018/jun/05/got-daughter-interested-computers-lawrence-now-has/" target="_blank">Have a daughter interested in computers? Lawrence now has a ‘Girls Who Code’ club</a>
      <br />
      <a href="http://blogs.jccc.edu/campusledger/2017/11/07/some-students-so-involved-others-not-so-much/" target="_blank">Some students so involved, others not so much</a>
      <br />
      <a href="https://blogs.jccc.edu/campusledger/2017/10/11/honors-program-holds-used-book-sale-to-support-student-scholarships/" target="_blank">Honors program holds used book sale to support student scholarships</a>
      <br />
      <a href="http://www.gardneredge.com/featured/gehs-students-initiated-into-national-technical-honor-society/" target="_blank">GEHS students initiated into National Technical Honor Society</a>
    </p>
  </div>
);
export default About;