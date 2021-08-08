import React from 'react';

import panda from '../images/portfolio-images/panda.png';
import movie from '../images/portfolio-images/movie.png';
import model from '../images/portfolio-images/model.png';
import jm from '../images/portfolio-images/jm.png';
import blog from '../images/portfolio-images/blog.png';
import trivia from '../images/portfolio-images/trivia.png';
import pixels from '../images/portfolio-images/pixels.png';
import todolist from '../images/portfolio-images/todolist.png';

export default function Projects() {
  return(
    <section className="portfolio section" id="portfolio">
      <h2 className="section-title">Projects</h2>

      <div className="portfolio__container bd-grid">
        <div className="portfolio__img">
          <a href="https://github.com/PollyanaOliveira/panda-store-project" className="portfolio_details">
            <img src={panda} alt="" />
          </a>
        </div>

        <div className="portfolio__img">
          <a href="https://github.com/PollyanaOliveira/project-movie-card-library-crud" className="portfolio_details">
            <img src={movie} alt="" />
          </a>
        </div>

        <div className="portfolio__img">
          <a href="https://github.com/PollyanaOliveira/extras-projects/tree/main/2.Proj_Extras/Anna_Bella" className="portfolio_details">
            <img src={model} alt="" />
          </a>
        </div>

        <div className="portfolio__img">
          <a href="https://github.com/PollyanaOliveira/extras-projects/tree/main/2.Proj_Extras/JM_Viagens" className="portfolio_details">
            <img src={jm} alt="" />
          </a>
        </div>

        <div className="portfolio__img">
          <a href="https://github.com/PollyanaOliveira/extras-projects/tree/main/2.Proj_Extras/TecBlog" className="portfolio_details">
            <img src={blog} alt="" />
          </a>
        </div>

        <div className="portfolio__img">
          {/* <a href="https://github.com/PollyanaOliveira/trivia-game" className="portfolio_details"> */}
            <img src={trivia} alt="" />
          {/* </a> */}
        </div>

        <div className="portfolio__img">
          <a href="https://github.com/PollyanaOliveira/pixels-art" className="portfolio_details">
            <img src={pixels} alt="" />
          </a>
        </div>

        <div className="portfolio__img">
          <a href="https://github.com/PollyanaOliveira/project-todo-list" className="portfolio_details">
            <img src={todolist} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}