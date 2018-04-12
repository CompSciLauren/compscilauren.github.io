import React from 'react';
import Link from 'gatsby-link';

import './home.css';
import circuit_maker from './images/portfolio/circuit_maker.png';
import pictionary_cheat from './images/portfolio/pictionary_cheat.png';
import portfolio_website from './images/portfolio/portfolio_website.png';
import autoit_scripts from './images/portfolio/autoit_scripts.png';
import girls_who_code_lawrence from './images/portfolio/girls_who_code_lawrence.png';
import kc_steminists from './images/portfolio/kc_steminists.png';
import jccc_computer_club from './images/portfolio/jccc_computer_club.png';
import girls_just_want_to_have_fun_coding from './images/portfolio/girls_just_want_to_have_fun_coding.png';
import ptk_induction_ceremonies from './images/portfolio/ptk_induction_ceremonies.png';
import jccc_halloween_binary_bracelets from './images/portfolio/jccc_computer_club_halloween_binary_bracelets.png';
import aauw_brig_general from './images/portfolio/aauw_brig_general.png';
import aauw_women_leadership from './images/portfolio/aauw_women_leadership.png';
import first_robotics from './images/portfolio/first_robotics.png';
import girls_who_code_overland_park from './images/portfolio/girls_who_code_overland_park.png'
import kc_women_in_tech from './images/portfolio/kc_women_in_tech.png';
import hackedkc from './images/portfolio/hackedkc.png';
import jccc_computer_club_create_your_own_app from './images/portfolio/jccc_computer_club_create_your_own_app.png';
import ptk_safehome from './images/portfolio/ptk_safehome.png';
import other_events from './images/portfolio/other_events.png';

const IndexPage = () => (
  <div>
    <div>
      <h1>Hi there.</h1>
      <p>This website is not finished yet. Please <a href="https://www.linkedin.com/in/compscilauren/" target="_blank">click here</a> to view my Linkedin, and <a href="https://github.com/CompSciLauren" target="_blank">click here</a> to view my public projects. Thanks!</p>
    </div>
    <div>
    <section className="featured work">
        <h1 id="portfolio">Portfolio</h1>
        <h2 className="left">My Computer Science Projects</h2>
        <div className="circuit-maker-picture-container">
        <img src={circuit_maker} alt="Click to learn more about circuit maker project."/>
        </div>
        <div className="pictionary-cheat-picture-container">
        <img src={pictionary_cheat} alt="Click to learn more about pictionary cheat project."/>
        </div>
        <div className="portfolio-website-picture-container">
        <img src={portfolio_website} alt="Click to learn more about portfolio website project."/>
        </div>
        <div className="autoit-scripts-picture-container">
        <img src={autoit_scripts} alt="Click to learn more about auto it scripts project."/>
        </div>
        <h2 className="left">My Initiatives</h2>
        <div className="girls-who-code-lawrence-picture-container">
        <img src={girls_who_code_lawrence} alt="Click to learn more about girls who code lawrence initiative."/>
        </div>
        <div className="kc-steminists-picture-container">
        <img src={kc_steminists} alt="Click to learn more about k c steminists initiative."/>
        </div>
        <div className="jccc-computer-club-picture-container">
        <img src={jccc_computer_club} alt="Click to learn more about j c c c computer club initiative."/>
        </div>
        <h2 className="left">Events I Participated in as an Organizer, Leader, or Speaker</h2>
        <div className="girls-just-want-to-have-fun-coding-picture-container">
        <img src={girls_just_want_to_have_fun_coding} alt="Click to learn more about girls just want to have fun coding event."/>
        </div>
        <div className="ptk-induction-ceremonies-picture-container">
        <img src={ptk_induction_ceremonies} alt="Click to learn more about p t k induction ceremonies events."/>
        </div>
        <div className="jccc-halloween-binary-braclets-picture-container">
        <img src={jccc_halloween_binary_bracelets} alt="Click to learn more about j c c c halloween binary bracelets event."/>
        </div>
        <div className="aauw-brigadier-general-picture-container">
        <img src={aauw_brig_general} alt="Click to learn more about a a u w brigadier general event."/>
        </div>
        <div className="aauw-women-leadership-picture-container">
        <img src={aauw_women_leadership} alt="Click to learn more about a a u w women in leadership event."/>
        </div>
        <div className="jccc-computer-club-create-your-own-app-picture-container">
        <img src={jccc_computer_club_create_your_own_app} alt="Click to learn more about j c c c computer club create your own app event."/>
        </div>
        <div className="ptk-safehome-picture-container">
        <img src={ptk_safehome} alt="Click to learn more about p t k safe home events."/>
        </div>
        <div className="other-events-picture-container">
        <img src={other_events} alt="Click to learn more about other events."/>
        </div>
        <h2 className="left">Nonprofits and Events I Participate&#40;d&#41; in as a Volunteer</h2>
        <div className="first-robotics-picture-container">
        <img src={first_robotics} alt="Click to learn more about first robotics volunteering experience."/>
        </div>
        <div className="girls-who-code-overland-park-picture-container">
        <img src={girls_who_code_overland_park} alt="Click to learn more about girls who code overland park volunteering experience."/>
        </div>
        <div className="kc-women-in-tech-picture-container">
        <img src={kc_women_in_tech} alt="Click to learn more about k c women in tech volunteering experience."/>
        </div>
        <div className="hackedkc-picture-container">
        <img src={hackedkc} alt="Click to learn more about hack ed k c volunteering experience."/>
        </div>
      </section>
    </div>
  </div>
);

export default IndexPage;
