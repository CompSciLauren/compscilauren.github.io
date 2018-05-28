import React from 'react';
import Link from 'gatsby-link';

import PortfolioListing from '../components/PortfolioListing/PortfolioListing';
import './home.css';

import circuit_maker from './images/portfolio/circuit_maker.png';
import pictionary_cheat from './images/portfolio/pictionary_cheat.png';
import autoit_scripts from './images/portfolio/autoit_scripts.png';
import girls_who_code_lawrence from './images/portfolio/girls_who_code_lawrence.png';
import kc_steminists from './images/portfolio/kc_steminists.png';
import jccc_computer_club from './images/portfolio/jccc_computer_club.jpg';
import girls_just_want_to_have_fun_coding from './images/portfolio/girls_just_want_to_have_fun_coding.jpg';
import aauw_women_leadership from './images/portfolio/aauw_women_leadership.png';
import first_robotics from './images/portfolio/first_robotics.png';
import girls_who_code_overland_park from './images/portfolio/girls_who_code_overland_park.png'
import kc_women_in_tech from './images/portfolio/kc_women_in_tech.png';
import hackedkc from './images/portfolio/hackedkc.jpg';
import jccc_honors_symposium from './images/portfolio/jccc_honors_symposium.jpg';
import ptk_safehome from './images/portfolio/ptk_safehome.png';

const IndexPage = () => (
  <div>
    <div>
      <section className="custom-display">
        <br />
        <h2>My Recent Work</h2>
        <h4>View my recent projects.</h4>
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
        <br />
        <br />
        <a href="https://github.com/CompSciLauren" target="_blank"><button className="btn-block btn-info"><i className="fa fa-github"></i> See more on GitHub</button></a>
        <br />
        <br />
        <br />
        <h2>My Initiatives</h2>
        <h4>Check out the clubs and organizations I've founded.</h4>
        <PortfolioListing
          layout="custom-three-image-layout"
          image={girls_who_code_lawrence}
          image_shape="square-image"
          alt="Click to learn more about girls who code lawrence initiative."
          description="A club for girls to learn how to code in Lawrence, KS."
          link="/portfolio-items/autoit-scripts"
        />
        <PortfolioListing
          layout="custom-three-image-layout"
          image={kc_steminists}
          image_shape="square-image"
          alt="Click to learn more about k c steminists initiative."
          description="A group for girls to learn how to code in Overland Park, KS."
          link="/portfolio-items/autoit-scripts"
        />
        <PortfolioListing
          layout="custom-three-image-layout"
          image={jccc_computer_club}
          image_shape="square-image"
          alt="Click to learn more about j c c c computer club initiative."
          description="A club for students to explore computer science at JCCC."
          link="/portfolio-items/autoit-scripts"
        />
        <br />
        <br />
        <br />
        <br />
        <h2>Recent Events I Participated in as an Organizer or Speaker</h2>
        <h4>Read about a few recent events I participated in.</h4>
        <PortfolioListing
          layout="custom-four-image-layout"
          image={girls_just_want_to_have_fun_coding}
          image_shape="square-image"
          alt="Click to learn more about girls just want to have fun coding event."
          description="A one day event for middle school girls to explore computer science."
          link="/portfolio-items/autoit-scripts"
        />
        <PortfolioListing
          layout="custom-four-image-layout"
          image={aauw_women_leadership}
          image_shape="square-image"
          alt="Click to learn more about a a u w women in leadership event."
          description="A roundtable discussion of women in leadership."
          link="/portfolio-items/autoit-scripts"
        />
        <PortfolioListing
          layout="custom-four-image-layout"
          image={jccc_honors_symposium}
          image_shape="square-image"
          alt="Click to learn more about j c c c honors symposium."
          description="A presentation of one of my computer science projects."
          link="/portfolio-items/autoit-scripts"
        />
        <PortfolioListing
          layout="custom-four-image-layout"
          image={ptk_safehome}
          image_shape="square-image"
          alt="Click to learn more about p t k safe home event."
          description="A series of events and fundraisers for SAFEHOME."
          link="/portfolio-items/autoit-scripts"
        />
        <br />
        <br />
        <br />
        <br />
        <h2>Nonprofits and Events I Participated in as a Volunteer</h2>
        <h4>Learn more about my volunteer work in computer science education.</h4>
        <PortfolioListing
          layout="custom-four-image-layout"
          image={first_robotics}
          image_shape="square-image"
          alt="Click to learn more about first robotics volunteering experience."
          description="Mentoring a robotics team and volunteering at competitions."
          link="/portfolio-items/autoit-scripts"
        />
        <PortfolioListing
          layout="custom-four-image-layout"
          image={girls_who_code_overland_park}
          image_shape="square-image"
          alt="Click to learn more about girls who code overland park volunteering experience."
          description="Mentoring girls as they learn how to code."
          link="/portfolio-items/autoit-scripts"
        />
        <PortfolioListing
          layout="custom-four-image-layout"
          image={kc_women_in_tech}
          image_shape="square-image"
          alt="Click to learn more about k c women in tech volunteering experience."
          description="Mentoring children in two KC Women in Tech coding programs."
          link="/portfolio-items/autoit-scripts"
        />
        <PortfolioListing
          layout="custom-four-image-layout"
          image={hackedkc}
          image_shape="square-image"
          alt="Click to learn more about hack ed k c volunteering experience."
          description="Mentoring high school students in an annual hackathon."
          link="/portfolio-items/autoit-scripts"
        />
      </section>
    </div>
  </div>
);

export default IndexPage;