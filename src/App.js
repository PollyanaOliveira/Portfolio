import Aos from 'aos';
import 'aos/dist/aos.css';
import {FaWhatsapp} from 'react-icons/fa';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {CgCopyright} from 'react-icons/cg';
import {GiHamburgerMenu} from 'react-icons/gi';

import Skills from './components/Skills';
import Projects from './components/Projects';
import Animation from './components/Animation';

import Profile from './images/profile-images/profile.jpeg';
import { useEffect } from 'react';

export default function App() {
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
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
              <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
              <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
              <li className="nav__item"><a href="#portfolio" className="nav__link">Projects</a></li>
              <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
            </ul>
            <div className="nav__toggle" id="nav-toggle">
              <GiHamburgerMenu />
            </div>
          </div>
        </nav>
    </header>
    <main className="l-main">
      {/* <!--===== HOME =====--> */}
      <section className="home bd-grid" id="home">
        <div data-aos="fade-down" className="home__data">
          <h1 className="home__title">
            Hi,<br />I'am<span className="home__title-color"> Pollyana</span><br />Developer
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
          <div className="about__img">
            <img src={Profile} alt="profile" />
          </div>
          <div>
            <h2 className="about__subtitle">I'am Pollyana</h2>
            <p className="about__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.
            </p>
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
            <span data-aos="fade-down" data-aos-delay="600" className="contact__text"><FaWhatsapp /> +55 67 98115-5931</span>
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
        <p className="footer__copy"><CgCopyright /> 2021 Pollyana Oliveira. All right reserved</p>
      </footer>
    </main>
    </div>
  );
}
