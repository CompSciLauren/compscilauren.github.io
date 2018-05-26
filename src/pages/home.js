import React from 'react';
import Link from 'gatsby-link';

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
        <div className="circuit-maker-picture-container custom-three-image-layout">
          <div className="custom-container">
            <img src={circuit_maker} alt="Click to learn more about circuit maker project." className="custom-image" />
            <div className="custom-overlay">
              <div className="custom-text">
                An online GUI for demonstrating binary logic gates.
                <br />
                <br />
                <Link to="/portfolio-items/circuit-maker">
                  <button>Learn More ></button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="pictionary-cheat-picture-container custom-three-image-layout">
          <div className="custom-container">
            <img src={pictionary_cheat} alt="Click to learn more about pictionary cheat project." className="custom-image" />
            <div className="custom-overlay">
              <div className="custom-text">
                A GUI for assisting gamers in online pictionary games.
                <br />
                <br />
                <Link to="/portfolio-items/pictionary-cheat">
                  <button>Learn More ></button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="autoit-scripts-picture-container custom-three-image-layout">
          <div className="custom-container">
            <img src={autoit_scripts} alt="Click to learn more about auto it scripts project." className="custom-image" />
            <div className="custom-overlay">
              <div className="custom-text">
                AutoIt scripts used to automate simple tasks for games and websites.
                <br />
                <br />
                <Link to="/portfolio-items/autoit-scripts">
                  <button>Learn More ></button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <a href="https://github.com/CompSciLauren" target="_blank"><button className="btn btn-block btn-info"><i className="fa fa-github"></i> See more on GitHub</button></a>
        <br />
        <br />
        <br />
        <h2>My Initiatives</h2>
        <h4>Check out the clubs and organizations I've founded.</h4>
        <div className="girls-who-code-lawrence-picture-container custom-three-image-layout">
          <img className="btn" src={girls_who_code_lawrence} alt="Click to learn more about girls who code lawrence initiative." />
        </div>
        <div className="kc-steminists-picture-container custom-three-image-layout">
          <img className="btn" src={kc_steminists} alt="Click to learn more about k c steminists initiative." />
        </div>
        <div className="jccc-computer-club-picture-container custom-three-image-layout">
          <img className="btn" src={jccc_computer_club} alt="Click to learn more about j c c c computer club initiative." />
        </div>
        <br />
        <br />
        <br />
        <br />
        <h2>Recent Events I Participated in as an Organizer or Speaker</h2>
        <h4>Read about a few recent events I participated in.</h4>
        <div className="girls-just-want-to-have-fun-coding-picture-container custom-four-image-layout">
          <img className="btn" src={girls_just_want_to_have_fun_coding} alt="Click to learn more about girls just want to have fun coding event." />
        </div>
        <div className="aauw-women-leadership-picture-container custom-four-image-layout">
          <img className="btn" src={aauw_women_leadership} alt="Click to learn more about a a u w women in leadership event." />
        </div>
        <div className="jccc-honors-symposium-picture-container custom-four-image-layout">
          <img className="btn" src={jccc_honors_symposium} alt="Click to learn more about j c c c honors symposium." />
        </div>
        <div className="ptk-safehome-picture-container custom-four-image-layout">
          <img className="btn" src={ptk_safehome} alt="Click to learn more about p t k safe home events." />
        </div>
        <br />
        <br />
        <br />
        <br />
        <h2>Nonprofits and Events I Participated in as a Volunteer</h2>
        <h4>Learn more about my volunteer work in computer science education.</h4>
        <div className="first-robotics-picture-container custom-four-image-layout">
          <img className="btn" src={first_robotics} alt="Click to learn more about first robotics volunteering experience." />
        </div>
        <div className="girls-who-code-overland-park-picture-container custom-four-image-layout">
          <img className="btn" src={girls_who_code_overland_park} alt="Click to learn more about girls who code overland park volunteering experience." />
        </div>
        <div className="kc-women-in-tech-picture-container custom-four-image-layout">
          <img className="btn" src={kc_women_in_tech} alt="Click to learn more about k c women in tech volunteering experience." />
        </div>
        <div className="hackedkc-picture-container custom-four-image-layout">
          <img className="btn" src={hackedkc} alt="Click to learn more about hack ed k c volunteering experience." />
        </div>
      </section>
    </div>
  </div>
);

export default IndexPage;