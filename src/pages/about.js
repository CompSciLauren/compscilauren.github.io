import React from 'react';

import './about.css';
import LaurenCampusLedger from './LaurenCampusLedger.jpg';
import LaurenPTKInductionSpeech from './LaurenPTKInductionSpeech.jpg';

const About = () => (
  <div>
    <h3>About Me</h3>
    <div className="profile-picture-container">
      <img src={LaurenCampusLedger} alt="LaurenCampusLedger" />
    </div>
    <p>
      I am the Founder and President of JCCC Computer Club, a student organization at Johnson
      County Community College that explores the various realms of computer science and
      collaborates on projects to help people on campus and in the community. I am also
      a Co-Founder of KC STEMinists, an organization that teaches Kansas City area middle
      and high school girls how to code, with an emphasis on entrepreneurship and creating
      sustainable community solutions. I have extensive leadership experience
      in a variety of student organizations at JCCC in diverse roles.
      I also have a fair amount of experience volunteering for a variety
      of events and organizations such as Girls Who Code and KC Women in Tech.
    </p>
    <div className="second-picture-container">
      <img src={LaurenPTKInductionSpeech} alt="LaurenPTKInductionSpeech" />
    </div>
    <p>
      I am focused on leveraging my leadership experience and technical skills to
      positively impact individuals and communities. I am proactive, passionate,
      and versatile. My Clifton StrengthsFinderTM Top 5 Strengths are
      Significance, Woo, Individualization, Communication, and Competition.
    </p>
    <p>
      In my spare time, I enjoy spending time with family, friends,
      and my two cats. I also like to perform on flute, play
      video games, roller skate, read, and write.
    </p>
  </div>
);

export default About;
