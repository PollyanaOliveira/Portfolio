import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import {DiJavascript} from 'react-icons/di';
import {GiOctopus, GiHook} from 'react-icons/gi';
import {SiJest, SiRedux, SiMysql, SiMongodb} from 'react-icons/si';
import {FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaReact} from 'react-icons/fa';

import work from '../images/skills-images/work.png';

export default function Skills() {
  // ---------------------------------------------------------------------------------------------
    // CICLOS DE VIDA
    useEffect(() => { Aos.init({ duration: 2000 }); }, []);

    // ---------------------------------------------------------------------------------------------
  
  return (
    <section className="skills section bd-grid" id="skills">
      <h2 data-aos="fade-down" className="section-title">Skills</h2>
      <h2 data-aos="fade-down" className="skills__subtitle">Professional Skills</h2>
      <p data-aos="fade-down" data-aos-delay="300" className="skills__text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.
      </p>
      <div data-aos="fade-down" data-aos-delay="200" className="skills__container">
        <div className="skills__data">
          <div className="skills__names">
              <FaGitAlt className="skills__icon" />
              <span>GIT</span>
              <div className="skills__bar" />
          </div>
        </div>
        <div data-aos="fade-down" data-aos-delay="400" className="skills__data">
          <div className="skills__names">
              <FaGithub className="skills__icon" />
              <span>GitHub</span>
              <div className="skills__bar skills__css" />
          </div>
        </div>
        <div data-aos="fade-down" data-aos-delay="600" className="skills__data">
          <div className="skills__names">
              <FaHtml5 className="skills__icon" />
              <span>HTML5</span>
              <div className="skills__bar skills__css" />
          </div>
        </div>      
        <div data-aos="fade-down" data-aos-delay="800" className="skills__data">
          <div className="skills__names">
              <FaCss3Alt className="skills__icon" />
              <span>CSS3</span>
              <div className="skills__bar skills__css" />
          </div>
        </div>     
        <div data-aos="fade-down" data-aos-delay="1000" className="skills__data">
          <div className="skills__names">
              <DiJavascript className="skills__icon" />
              <span>JavaScript</span>
              <div className="skills__bar skills__css" />
          </div>
        </div>       
        <div data-aos="fade-down" data-aos-delay="1200" className="skills__data">
          <div className="skills__names">
              <SiJest className="skills__icon" />
              <span>JEST</span>
              <div className="skills__bar skills__css" />
          </div>
        </div>       
        <div data-aos="fade-down" data-aos-delay="1400" className="skills__data">
          <div className="skills__names">
              <FaReact className="skills__icon" />
              <span>React.JS</span>
              <div className="skills__bar skills__css" />
          </div>
        </div>       
        <div data-aos="fade-down" data-aos-delay="1600" className="skills__data">
          <div className="skills__names">
              <GiOctopus className="skills__icon" />
              <span>RTL</span>
              <div className="skills__bar skills__css" />
          </div>
        </div>       
        <div data-aos="fade-down" data-aos-delay="1800" className="skills__data">
          <div className="skills__names">
              <SiRedux className="skills__icon" />
              <span>Redux</span>
              <div className="skills__bar skills__css" />
          </div>
        </div>         
        <div data-aos="fade-down" data-aos-delay="2000" className="skills__data">
          <div className="skills__names">
              <GiHook className="skills__icon" />
              <span>Hooks</span>
              <div className="skills__bar skills__css" />
          </div>
        </div>      
        <div data-aos="fade-down" data-aos-delay="2200" className="skills__data">
          <div className="skills__names">
              <SiMysql className="skills__icon" />
              <span>MySQL</span>
              <div className="skills__bar skills__css" />
          </div>
        </div>      
        <div data-aos="fade-down" data-aos-delay="2400" className="skills__data">
          <div className="skills__names">
              <SiMongodb className="skills__icon" />
              <span>MongoDB</span>
              <div className="skills__bar skills__css" />
          </div>
        </div>                
      </div>
        <div data-aos="fade-down" data-aos-delay="500" className="skills__img">
        <img src={work} alt="work_skills" />
        </div>           
    </section>
  );
}
