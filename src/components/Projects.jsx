import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import panda from '../images/portfolio-images/panda.png';
import movie from '../images/portfolio-images/movie.png';
import model from '../images/portfolio-images/model.png';
import jm from '../images/portfolio-images/jm.png';
import blog from '../images/portfolio-images/blog.png';
import trivia from '../images/portfolio-images/trivia.png';
import pixels from '../images/portfolio-images/pixels.png';
import todolist from '../images/portfolio-images/todolist.png';

export default function Projects() {
  // ---------------------------------------------------------------------------------------------
    // CICLOS DE VIDA
    useEffect(() => { Aos.init({ duration: 2000 }); }, []);

    // ---------------------------------------------------------------------------------------------
  
  return(
    <section className="portfolio section" id="portfolio">
      <h2 data-aos="fade-down" className="section-title">Projects</h2>

      <div data-aos="fade-down" data-aos-delay="200" className="portfolio__container bd-grid">
        <div className="portfolio__img">
          <a href="https://github.com/PollyanaOliveira/panda-store-project" className="portfolio_details">
            <img src={panda} alt="" />
          </a>
        </div>

        <div data-aos="fade-down" data-aos-delay="400" className="portfolio__img">
          <a href="https://github.com/PollyanaOliveira/project-movie-card-library-crud" className="portfolio_details">
            <img src={movie} alt="" />
          </a>
        </div>

        <div data-aos="fade-down" data-aos-delay="600"className="portfolio__img">
          <a href="https://github.com/PollyanaOliveira/extras-projects/tree/main/2.Proj_Extras/Anna_Bella" className="portfolio_details">
            <img src={model} alt="" />
          </a>
        </div>

        <div data-aos="fade-down" data-aos-delay="800" className="portfolio__img">
          <a href="https://github.com/PollyanaOliveira/extras-projects/tree/main/2.Proj_Extras/JM_Viagens" className="portfolio_details">
            <img src={jm} alt="" />
          </a>
        </div>

        <div data-aos="fade-down" data-aos-delay="1000" className="portfolio__img">
          <a href="https://github.com/PollyanaOliveira/extras-projects/tree/main/2.Proj_Extras/TecBlog" className="portfolio_details">
            <img src={blog} alt="" />
          </a>
        </div>

        <div data-aos="fade-down" data-aos-delay="1200" className="portfolio__img">
          {/* <a href="https://github.com/PollyanaOliveira/trivia-game" className="portfolio_details"> */}
            <img src={trivia} alt="" />
          {/* </a> */}
        </div>

        <div data-aos="fade-down" data-aos-delay="1400" className="portfolio__img">
          <a href="https://github.com/PollyanaOliveira/pixels-art" className="portfolio_details">
            <img src={pixels} alt="" />
          </a>
        </div>

        <div data-aos="fade-down" data-aos-delay="1600" className="portfolio__img">
          <a href="https://github.com/PollyanaOliveira/project-todo-list" className="portfolio_details">
            <img src={todolist} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}