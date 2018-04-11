import React from 'react';

import './about.css';
import lauren_campus_ledger from './images/about/lauren_campus_ledger.jpg';
import lauren_ptk_induction_speech from './images/about/lauren_ptk_induction_speech.jpg';

const About = () => (
  <div>
    <h1>About Me</h1>
    <div className="profile-picture-container">
      <img src={lauren_campus_ledger} alt="Lauren sitting at a table surrounded by objects that represent a few stem and j c c c experiences."/>
    </div>
    <p>
    As a Computer Science Student, Developer, Founder, Facilitator, Speaker, Teacher, Learner, I get to write code for
     diverse projects and participate in lots of cool stuff. Whether it's writing code for my OOP college class, working
      on a personal project, or teaching beginners the fundamentals of computer science, I'm always having a good time.
       The majority of my computer programming experience is in Java and C++, but I've done some personal projects and
        taught students using other languages as well.
    </p>
    <div className="second-picture-container">
      <img src={lauren_ptk_induction_speech} alt="Lauren giving a speech at a p t k induction ceremony."/>
    </div>
    <p>
    I'm a forward-thinking troubleshooter, but not just in class or on the job. After learning of the lack of resources
     for girls interested in computer science who live West of the KC area, I partnered with two other women to start a
      new Girls Who Code Club in Lawrence, Kansas in 2018. I'm also Founder and President of the JCCC Computer Club, a
       student organization to help students develop coding skills, collaborate on projects, and learn from
        professionals in the industry. One of my earlier endeavors was back in 2016, when I Co-Founded KC STEMinists,
         an organization that teaches Kansas City area middle and high school girls how to code, with an emphasis on
          entrepreneurship and community-driven development. I also have extensive leadership and volunteer experience
           in a variety of student and non-profit organizations, which you can learn more about by checking out
            my Linkedin profile.
    </p>
    <p>
    With a strong grasp of computer science fundamentals and a knowledge base of more advanced coding concepts
     that grows each day, it is my priority to provide high-quality technological solutions for your community,
      business, and quality-driven needs.
    </p>
    <h2>News Stories</h2>
    <p>
      <a href="http://blogs.jccc.edu/campusledger/2017/11/07/some-students-so-involved-others-not-so-much/">Some students so involved, others not so much</a>
      <br />
      <a href="https://blogs.jccc.edu/campusledger/2017/10/11/honors-program-holds-used-book-sale-to-support-student-scholarships/">Honors program holds used book sale to support student scholarships</a>
      <br />
      <a href="http://www.gardneredge.com/featured/gehs-students-initiated-into-national-technical-honor-society/">GEHS students initiated into National Technical Honor Society</a>
    </p>
  </div>
);

export default About;
