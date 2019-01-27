import React from 'react';
import Link from 'gatsby-link';

import './about.css';
import Layout from '../layouts/index';
import logo from '../../src/images/logo.png';
import PortfolioListing from '../components/PortfolioListing/PortfolioListing';
import christy_mcward from './images/recommendations/christy_mcward.jpg';
import tom_pagano from './images/recommendations/tom_pagano.jpg';
import circuit_maker from './images/portfolio/circuit_maker.png';
import pictionary_cheat from './images/portfolio/pictionary_cheat.png';
import autoit_scripts from './images/portfolio/autoit_scripts.png';
import community_impact_collage from './images/portfolio/communityimpactcollage.jpg';

class About extends React.Component {
  render() {
    return (
      <Layout>
        <div className="topnav-container clearfix sticky-navbar">
          <ul className="topnav">
            <Link to="#portfolio-section" className="menu-item">
              Portfolio
            </Link>
            <Link to="#about-section" className="menu-item">
              About
            </Link>
            <a
              className="menu-item"
              href="https://drive.google.com/open?id=1JLEBx0AYOl4_qKoNMqz7vKbxVZgkCvO2"
              target="_blank"
            >
              Resume
            </a>
            <Link to="#contact-section" className="menu-item">
              Contact Me
            </Link>
            <Link to="/blog" className="menu-item">
              Blog
            </Link>
            <div className="menu-item">
              <a href="https://twitter.com/CompSciLauren" target="_blank">
                <i className="fa fa-twitter" />
              </a>
            </div>
            <div className="menu-item">
              <a href="https://github.com/CompSciLauren" target="_blank">
                <i className="fa fa-github" />
              </a>
            </div>
            <div className="menu-item">
              <a
                href="https://www.linkedin.com/in/compscilauren/"
                target="_blank"
              >
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </ul>
          <img src={logo} alt="CompSci Lauren Logo" />
        </div>

        <header className="hero-image" />

        <div className="main-content white-background">
          <div className="container-fluid">
            <div className="portfolio" id="portfolio-section">
              <br />
              <br />
              <br />
              <h1>Portfolio</h1>
              <PortfolioListing
                layout="custom-three-image-layout"
                image={circuit_maker}
                image_shape="rectangle-image"
                alt="Click to learn more about circuit maker project."
                description="An online GUI for demonstrating binary logic gates."
                link="/portfolio-items/circuit-maker"
              />
              <PortfolioListing
                layout="custom-three-image-layout"
                image={pictionary_cheat}
                image_shape="rectangle-image"
                alt="Click to learn more about pictionary cheat project."
                description="A GUI for assisting gamers in online pictionary games."
                link="/portfolio-items/pictionary-cheat"
              />
              <PortfolioListing
                layout="custom-three-image-layout"
                image={autoit_scripts}
                image_shape="rectangle-image"
                alt="Click to learn more about auto it scripts project."
                description="AutoIt scripts used to automate simple tasks for games and websites."
                link="/portfolio-items/autoit-scripts"
              />
              <a href="https://github.com/CompSciLauren" target="_blank">
                <button className="btn-block btn-info">
                  <i className="fa fa-github" /> View Projects on GitHub
                </button>
              </a>
            </div>
            <h1>Community Impact</h1>
            <div className="center-div">
              <div className="row">
                <div className="column">
                  <img
                    src={community_impact_collage}
                    alt="Collage displaying community impact activities."
                  />
                </div>
                <div className="column">
                  <p>
                    I have been an active volunteer in my tech community for
                    several years. I have started several computer science
                    education organizations, organized numerous educational
                    events about computer science and women's issues, and spoken
                    at a small number of events. Most often, you'll find me
                    mentoring young learners and teaching in small group
                    settings. You can find out more about my civic efforts
                    below!
                  </p>
                </div>
              </div>
              <a href="/">
                <button className="btn-block btn-info">
                  View Community Impact Activities
                </button>
              </a>
            </div>

            <div className="center-div" id="about-section">
              <br />
              <br />
              <br />
              <h1>About</h1>
              <div className="row">
                <div className="column">
                  <p>
                    I'm an apprentice software engineer at Cerner and a computer
                    science major at the University of Kansas. Co-Founder of KC
                    STEMinists and a Girls Who Code Club. I'm a forward-thinking
                    troubleshooter, but not just in class or on the job. After
                    learning of the lack of resources for girls interested in
                    computer science who live West of the KC area, I partnered
                    with three other women to start a Girls Who Code Club in
                    Lawrence, Kansas in 2018.
                  </p>
                </div>
                <div className="column">
                  <p>
                    I'm also Founder and former President of the JCCC Computer
                    Club, which began in 2017, and is a student organization
                    that aims to help students explore computer science. One of
                    my earlier endeavors was in 2016, when I Co-Founded KC
                    STEMinists, an organization that teaches Kansas City area
                    middle and high school girls how to code, with an emphasis
                    on entrepreneurship and community-driven development. I also
                    have extensive leadership and volunteer experience in a
                    variety of student and non-profit organizations.
                  </p>
                </div>
              </div>
              <a
                href="https://drive.google.com/open?id=1JLEBx0AYOl4_qKoNMqz7vKbxVZgkCvO2"
                target="_blank"
              >
                <button className="btn-block btn-info">View Resume</button>
              </a>
            </div>
            <br />
            <br />
            <div className="darker-background">
              <hr />
              <div className="center-div">
                <h1>Recommendations</h1>
                <div className="row">
                  <div className="column">
                    <div className="christy-mcward-picture-container">
                      <img
                        src={christy_mcward}
                        alt="Christy Mcward portrait picture."
                      />
                    </div>
                    <h3 className="left">
                      Christy McWard, Director of Communications & Advancement
                      at University of Kansas
                    </h3>
                    <h4>April 2018</h4>
                    <p>
                      “Lauren is exceptional in every one of the many roles she
                      plays at Johnson County Community College. As a student,
                      she works hard and excels in her classes while building
                      strong relationships with faculty and classmates. As a
                      campus leader, she is engaged in several groups, not only
                      as a member, but often as an officer, a co-founder, an
                      event planner, or a public speaker on behalf of the groups
                      she belongs to. As an employee of JCCC's Collaboration
                      Center, the CoLab, where I was her supervisor, she was a
                      shining example of what it means to be a committed,
                      responsible and enthusiastic colleague. And finally, she
                      is a delightful person through and through. Her kindness,
                      compassion and curiosity about the world are contagious
                      among all who have the good fortune to work with her."
                    </p>
                  </div>
                  <div className="column">
                    <div className="tom-pagano-picture-container">
                      <img
                        src={tom_pagano}
                        alt="Tom Pagano portrait picture."
                      />
                    </div>
                    <h3 className="left">
                      Tom Pagano, VP/CIO at Johnson County Community College
                    </h3>
                    <h4>December 2017</h4>
                    <p>
                      “I met Lauren through the JCCC Student Computer Club.
                      After an insightful and vibrant first meeting, I was
                      impressed with her desire to enhance the Computer Club
                      experience. As the President of the Club, Lauren, worked
                      with the Faculty Facilitator to -incorporate me into the
                      meetings. It has been a very rewarding experience for me
                      thus far and the feedback from the group has been
                      positive. Lauren has visited with me and on a number of
                      occasions to talk about career planning, course selection
                      and how to integrate with local IT professional
                      organizations. Lauren is well poised in her education to
                      make innovative contributions to the IT Industry, the
                      local organizations she will become involved with and the
                      way we use technology to make our lives better. I look
                      forward to the ongoing interaction with Lauren as she
                      moves on to future success.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="contact" id="contact-section">
              <br />
              <br />
              <br />
              <h1>Contact Me</h1>

              <div className="center-div">
                <div className="row">
                  <p>
                    I am always up for a challenge. Are you looking to
                    collaborate on a project? In need of a guest speaker or
                    volunteer for a worthwhile cause? Perhaps you just want to
                    ask me a question. If you have anything to say, I'm always
                    open to listening! Please feel free to contact me at any
                    time.
                  </p>
                </div>
                <div className="row">
                  <div className="custom-image-adjust">
                    <i className="fa fa-envelope-o"> compscilauren@gmail.com</i>
                  </div>
                  <div className="custom-image-adjust">
                    <a href="https://twitter.com/CompSciLauren" target="_blank">
                      <i className="fa fa-twitter" />
                    </a>
                  </div>
                  <div className="custom-image-adjust">
                    <a href="https://github.com/CompSciLauren" target="_blank">
                      <i className="fa fa-github" />
                    </a>
                  </div>
                  <div className="custom-image-adjust">
                    <a
                      href="https://www.linkedin.com/in/compscilauren/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="center-div">
              <div className="row">
                <div className="column footer-piece">
                  <h2>Media</h2>
                  <p>
                    <a
                      href="http://blogs.jccc.edu/cbl/2018/08/13/service-testimonial-lauren-stephenson/"
                      target="_blank"
                    >
                      Advancing Computer Science Education, a Community Service
                      Testimonial
                    </a>
                    <br />
                    <br />
                    <a
                      href="http://www2.ljworld.com/news/2018/jun/05/got-daughter-interested-computers-lawrence-now-has/"
                      target="_blank"
                    >
                      Have a daughter interested in computers? Lawrence now has
                      a ‘Girls Who Code’ club
                    </a>
                    <br />
                    <br />
                    <a
                      href="http://blogs.jccc.edu/campusledger/2017/11/07/some-students-so-involved-others-not-so-much/"
                      target="_blank"
                    >
                      Some students so involved, others not so much
                    </a>
                    <br />
                    <br />
                    <a
                      href="https://blogs.jccc.edu/campusledger/2017/10/11/honors-program-holds-used-book-sale-to-support-student-scholarships/"
                      target="_blank"
                    >
                      Honors program holds used book sale to support student
                      scholarships
                    </a>
                    <br />
                    <br />
                    <a
                      href="http://www.gardneredge.com/featured/gehs-students-initiated-into-national-technical-honor-society/"
                      target="_blank"
                    >
                      GEHS students initiated into National Technical Honor
                      Society
                    </a>
                  </p>
                </div>
                <div className="column footer-piece">
                  <h2>Twitter</h2>
                  <p>
                    <a
                      className="twitter-timeline"
                      data-height="500"
                      data-link-color="#981CEB"
                      href="https://twitter.com/CompSciLauren?ref_src=twsrc%5Etfw"
                    >
                      Tweets by CompSciLauren
                    </a>
                  </p>
                </div>
                <div className="column footer-piece">
                  <h2>Instagram</h2>
                  <iframe
                    src="https://www.instagram.com/p/BpXW0YohcGS/embed"
                    width="400"
                    height="500"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default About;
