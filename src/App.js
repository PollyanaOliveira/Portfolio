import { useEffect, useState } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';
import {FaWhatsapp} from 'react-icons/fa';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {CgCopyright} from 'react-icons/cg';

import Skills from './components/Skills';
import Projects from './components/Projects';
import Animation from './components/Animation';
import About from './components/About';

import Profile from './images/profile-images/profile.jpeg';

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  // ---------------------------------------------------------------------------------------------
    // CICLOS DE VIDA
    useEffect(() => { Aos.init({ duration: 2000 }); }, []);

    // ---------------------------------------------------------------------------------------------
  
  return (
    <div className="App">
      {/* <!--===== HEADER =====--> */}
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <a href="#home" className="nav__logo">Pollyana Oliveira</a>
          </div>
          <div className={ (showMenu) ? 'nav__menu show' : 'nav__menu' } id="nav-menu">
            <ul className="nav__list" onClick={ () => setShowMenu(!showMenu) }>
              <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
              <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
              <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
              <li className="nav__item"><a href="#portfolio" className="nav__link">Projects</a></li>
              <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
            </ul>
          </div>
          <button
              type="button"
              onClick={ () => setShowMenu(!showMenu) }
              className={ (showMenu) ? 'icon icon__active' : 'icon' }>
              <div className="hamburguer" />
          </button>
        </nav>
    </header>
    <main className="l-main">
      {/* <!--===== HOME =====--> */}
      <section className="home bd-grid" id="home">
        <div data-aos="fade-down" className="home__data">
          <h1 className="home__title">
            Hi,<br />I am<span className="home__title-color"> Pollyana</span><br />Developer
          </h1>
          <a href="#contact" className="button">Contact</a>
        </div>

        <div className="home__social">
            <a href="https://www.linkedin.com/in/oliveirapollyana/" className="home__social-icon"><FaLinkedinIn /></a>
            <a href="https://www.github.com/PollyanaOliveira" className="home__social-icon"><FaGithub /></a>
        </div>

        <div data-aos="fade-down" data-aos-delay="500" className="home__img">    
          <Animation />
        </div>
      </section>
      {/* <!--===== ABOUT =====--> */}
      <section className="about section" id="about">
        <h2 data-aos="fade-down" className="section-title">About</h2>
        <div data-aos="fade-down" className="about__container bd-grid">
          <div data-aos="fade-down" data-aos-delay="700" className="about__img">
            <img src={Profile} alt="profile" />
          </div>
          <div>
            <h2 data-aos="fade-down" className="about__subtitle">I'm Pollyana</h2>
            <p data-aos="fade-down" className="about__text">
              👩🏽‍💻 I'm a web development studenty at <a href="https://www.betrybe.com/" className="school__link">Trybe</a> School. <br />
              🤓 I'm currently learning Back-End features. I'm very interested in improving my knowledge in web development. <br />
              👩🏽‍🎓 I have degree in Education and Accounting. <br />
              🥦 I'm veggie.<br />
              🏃🏾‍♀️ I'm constantly on the move. Never accommodate!<br />
              📍From Campo Grande - MS 🇧🇷 <br />
              📄 See my <a href = "https://gitconnected.com/pollyanaoliveira/resume" className="curriculum__link">Curriculum Vitae</a> to get more info.
            </p>
          </div>
          <div data-aos="fade-down" data-aos-delay="900">
            <About />
          </div>
        </div>
      </section>
      <Skills />
      <Projects />
      {/* <!--===== CONTACT =====--> */}
      <section className="contact__section" id="contact">
        <h2 data-aos="fade-down" className="section-title">Contact</h2>

        <div className="contact__container bd-grid">
          <div>
            <h3 data-aos="fade-down" className="contact__subtitle">E-MAIL</h3>
            <a href="mailto:pollyana.deoliveir@gmail.com">
              <span data-aos="fade-down" data-aos-delay="200" className="contact__text">pollyana.deoliveir@gmail.com</span>
            </a>
            <h3 data-aos="fade-down" data-aos-delay="600" className="contact__subtitle">PHONE</h3>
            <a href="https://api.whatsapp.com/send?phone=5567981155931">
              <span data-aos="fade-down" data-aos-delay="600" className="contact__text"><FaWhatsapp /> +55 67 98115-5931</span>
            </a>
            <h3 data-aos="fade-down" data-aos-delay="1000" className="contact__subtitle">ADDRESS</h3>
            <span data-aos="fade-down" data-aos-delay="1000" className="contact__text">Campo Grande - MS / Brazil</span>
          </div>
          </div>
      </section>
      {/* <!--===== FOOTER =====--> */}
      <footer className="footer section">
        <div className="footer__container layout__grid">
            <div>
                <h2 className="footer__title">POLLYANA OLIVEIRA</h2>
                <p>I'm Pollyana Oliveira and this is my personal website</p>
            </div>
            <div>
                <h2 className="footer__title">EXPLORE</h2>
                <ul>
                    <li><a href="#home" className="footer__link">Home</a></li>
                    <li><a href="#about" className="footer__link">About</a></li>
                    <li><a href="#skills" className="footer__link">Skills</a></li>
                    <li><a href="#portfolio" className="footer__link">Portfolio</a></li>
                    <li><a href="#contact" className="footer__link">Contact</a></li>
                </ul>
            </div>
            
            <div>
                <h2 className="footer__title">FOLLOW</h2>
                <a href="https://www.linkedin.com/in/oliveirapollyana/"><FaLinkedinIn className="about_social_icon" /></a>
                <a href="https://www.github.com/PollyanaOliveira"><FaGithub className="about_social_icon" /></a>
            </div>
        </div>
        <p className="footer__copy"><CgCopyright /> 2021 Made 🤍 by Pollyana Oliveira.</p>
      </footer>
    </main>
    </div>
  );
}
