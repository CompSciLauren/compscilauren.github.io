import React from 'react';
import Link from 'gatsby-link';

import './home.css';
import circuit_maker from './images/portfolio/circuit_maker.png';
import pictionary_cheat from './images/portfolio/pictionary_cheat.png';
import portfolio_website from './images/portfolio/portfolio_website.png';
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
    <section className="featured work">
        <h1 id="portfolio">Portfolio</h1>
        <h2 className="left">My Computer Science Projects</h2>
        <div className="circuit-maker-picture-container">
        <Link to="/portfolio-items/circuit-maker">
        <img className="btn" src={circuit_maker} alt="Click to learn more about circuit maker project."/>
        </Link>
        </div>
        <div className="pictionary-cheat-picture-container">
        <Link to="/portfolio-items/pictionary-cheat">
        <img className="btn" src={pictionary_cheat} alt="Click to learn more about pictionary cheat project."/>
        </Link>
        </div>
        <div className="portfolio-website-picture-container">
        <img className="btn" src={portfolio_website} alt="Click to learn more about portfolio website project."/>
        </div>
        <div className="autoit-scripts-picture-container">
        <img className="btn" src={autoit_scripts} alt="Click to learn more about auto it scripts project."/>
        </div>
        <h2 className="left">My Initiatives</h2>
        <div className="girls-who-code-lawrence-picture-container">
        <img className="btn" src={girls_who_code_lawrence} alt="Click to learn more about girls who code lawrence initiative."/>
        </div>
        <div className="kc-steminists-picture-container">
        <img className="btn" src={kc_steminists} alt="Click to learn more about k c steminists initiative."/>
        </div>
        <div className="jccc-computer-club-picture-container">
        <img className="btn" src={jccc_computer_club} alt="Click to learn more about j c c c computer club initiative."/>
        </div>
        <h2 className="left">Events I Participated in as an Organizer or Speaker</h2>
        <div className="girls-just-want-to-have-fun-coding-picture-container">
        <img className="btn" src={girls_just_want_to_have_fun_coding} alt="Click to learn more about girls just want to have fun coding event."/>
        </div>
        <div className="aauw-women-leadership-picture-container">
        <img className="btn" src={aauw_women_leadership} alt="Click to learn more about a a u w women in leadership event."/>
        </div>
        <div className="jccc-honors-symposium-picture-container">
        <img className="btn" src={jccc_honors_symposium} alt="Click to learn more about j c c c honors symposium."/>
        </div>
        <div className="ptk-safehome-picture-container">
        <img className="btn" src={ptk_safehome} alt="Click to learn more about p t k safe home events."/>
        </div>
        <h2 className="left">Nonprofits and Events I Have Participated in as a Volunteer</h2>
        <div className="first-robotics-picture-container">
        <img className="btn" src={first_robotics} alt="Click to learn more about first robotics volunteering experience."/>
        </div>
        <div className="girls-who-code-overland-park-picture-container">
        <img className="btn" src={girls_who_code_overland_park} alt="Click to learn more about girls who code overland park volunteering experience."/>
        </div>
        <div className="kc-women-in-tech-picture-container">
        <img className="btn" src={kc_women_in_tech} alt="Click to learn more about k c women in tech volunteering experience."/>
        </div>
        <div className="hackedkc-picture-container">
        <img className="btn" src={hackedkc} alt="Click to learn more about hack ed k c volunteering experience."/>
        </div>
      </section>
    </div>
  </div>
);

export default IndexPage;
