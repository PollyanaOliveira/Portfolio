import React from 'react';

import {DiJavascript} from 'react-icons/di';
import {GiOctopus, GiHook} from 'react-icons/gi';
import {SiJest, SiRedux, SiMysql, SiMongodb} from 'react-icons/si';
import {FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaReact} from 'react-icons/fa';

import work from '../images/skills-images/work.png';

export default function Skills() {
  return (
    <section>
      <h2 className="skills section">Skills</h2>
      <div className="skills__container bd-grid">
        <div>
          <h2 className="skills__subtitle">Professional Skills</h2>
          <p className="skills__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.
          </p>
          <div className="skills__data">
            <div className="skills__names">
                <FaGitAlt />
                <span>GIT</span>
                <FaGithub />
                <span>GitHub</span>
                <FaHtml5 />
                <span>HTML5</span>
                <FaCss3Alt />
                <span>CSS3</span>
                <DiJavascript />
                <span>JavaScript</span>
                <SiJest />
                <span>JEST</span>
                <FaReact />
                <span>React.JS</span>
                <GiOctopus />
                <span>RTL</span>  
                <SiRedux />
                <span>Redux</span>
                <GiHook />
                <span>Hooks</span>
                <SiMysql />
                <span>MySQL</span>
                <SiMongodb />
                <span>MongoDB</span>
              </div>
              </div>
              <div>
              <img src={work} alt="work_skills" />
              </div>
            </div>            
          </div>
    </section>
  );
}
