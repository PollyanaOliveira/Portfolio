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
    <section className="portfolio_section">
      <h2 className="section-title">Projects</h2>
      <div className="portfolio_container">
        <div className="portfolio_link">

          <div className="image_portfolio">
            <img src={panda} alt="" />
            <a href="https://github.com/PollyanaOliveira/panda-store-project" className="portfolio_details">View Details</a>
          </div>

          <div className="image_portfolio">
            <img src={movie} alt="" />
            <a href="https://github.com/PollyanaOliveira/project-movie-card-library-crud" className="portfolio_details">View Details</a>
          </div>

          <div className="image_portfolio">
            <img src={model} alt="" />
            <a href="https://github.com/PollyanaOliveira/extras-projects/tree/main/2.Proj_Extras/Anna_Bella" className="portfolio_details">View Details</a>
          </div>

          <div className="image_portfolio">
            <img src={jm} alt="" />
            <a href="https://github.com/PollyanaOliveira/extras-projects/tree/main/2.Proj_Extras/JM_Viagens" className="portfolio_details">View Details</a>
          </div>

          <div className="image_portfolio">
            <img src={blog} alt="" />
            <a href="https://github.com/PollyanaOliveira/extras-projects/tree/main/2.Proj_Extras/TecBlog" className="portfolio_details">View Details</a>
          </div>

          <div className="image_portfolio">
            <img src={trivia} alt="" />
            <a href="https://github.com/PollyanaOliveira/trivia-game" className="portfolio_details">View Details</a>
          </div>

          <div className="image_portfolio">
            <img src={pixels} alt="" />
            <a href="https://github.com/PollyanaOliveira/pixels-art" className="portfolio_details">View Details</a>
          </div>

          <div className="image_portfolio">
            <img src={todolist} alt="" />
            <a href="https://github.com/PollyanaOliveira/project-todo-list" className="portfolio_details">View Details</a>
          </div>

        </div>
      </div>
    </section>
  );
}