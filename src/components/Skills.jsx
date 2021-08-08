import React from 'react';

import {DiJavascript} from 'react-icons/di';
import {GiOctopus, GiHook} from 'react-icons/gi';
import {SiJest, SiRedux, SiMysql, SiMongodb} from 'react-icons/si';
import {FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaReact} from 'react-icons/fa';

import work from '../images/skills-images/work.png';

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-grid">
        <div>
          <h2 className="skills__subtitle">Professional Skills</h2>
          <p className="skills__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.
          </p>
          <div className="skills__data">
            <div className="skills__names">
                <FaGitAlt className="skills__icon" />
                <span>GIT</span>
                <div className="skills__bar" />
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
                <FaGithub className="skills__icon" />
                <span>GitHub</span>
                <div className="skills__bar skills__css" />
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
                <FaHtml5 className="skills__icon" />
                <span>HTML5</span>
                <div className="skills__bar skills__css" />
            </div>
          </div>      
          <div className="skills__data">
            <div className="skills__names">
                <FaCss3Alt className="skills__icon" />
                <span>CSS3</span>
                <div className="skills__bar skills__css" />
            </div>
          </div>     
          <div className="skills__data">
            <div className="skills__names">
                <DiJavascript className="skills__icon" />
                <span>JavaScript</span>
                <div className="skills__bar skills__css" />
            </div>
          </div>       
          <div className="skills__data">
            <div className="skills__names">
                <SiJest className="skills__icon" />
                <span>JEST</span>
                <div className="skills__bar skills__css" />
            </div>
          </div>       
          <div className="skills__data">
            <div className="skills__names">
                <FaReact className="skills__icon" />
                <span>React.JS</span>
                <div className="skills__bar skills__css" />
            </div>
          </div>       
          <div className="skills__data">
            <div className="skills__names">
                <GiOctopus className="skills__icon" />
                <span>RTL</span>
                <div className="skills__bar skills__css" />
            </div>
          </div>       
          <div className="skills__data">
            <div className="skills__names">
                <SiRedux className="skills__icon" />
                <span>Redux</span>
                <div className="skills__bar skills__css" />
            </div>
          </div>         
          <div className="skills__data">
            <div className="skills__names">
                <GiHook className="skills__icon" />
                <span>Hooks</span>
                <div className="skills__bar skills__css" />
            </div>
          </div>      
          <div className="skills__data">
            <div className="skills__names">
                <SiMysql className="skills__icon" />
                <span>MySQL</span>
                <div className="skills__bar skills__css" />
            </div>
          </div>      
          <div className="skills__data">
            <div className="skills__names">
                <SiMongodb className="skills__icon" />
                <span>MongoDB</span>
                <div className="skills__bar skills__css" />
            </div>
          </div>                
        </div>
            <div>
            <img src={work} alt="work_skills" className="skills__img" />
            </div>           
      </div>
    </section>
  );
}
