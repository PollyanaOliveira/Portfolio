import {FaWhatsapp} from 'react-icons/fa';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {CgCopyright} from 'react-icons/cg';
import {GiHamburgerMenu} from 'react-icons/gi';

import Skills from './components/Skills';
import Projects from './components/Projects';

import Profile from './images/profile-images/profile.jpeg';

export default function App() {
  return (
    <div className="App">
      {/* <!--===== HEADER =====--> */}
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <a href="#home" className="nav__logo">Pollyana Oliveira</a>
          </div>
          <div className="nav__menu">
            <ul className="nav__list">
              <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
              <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
              <li class="nav__item"><a href="#skills" class="nav__link">Skills</a></li>
              <li class="nav__item"><a href="#portfolio" class="nav__link">Projects</a></li>
              <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
            </ul>
            <div className="nav__toggle">
              <GiHamburgerMenu />
            </div>
          </div>
        </nav>
    </header>
    <main className="l-main">
      {/* <!--===== HOME =====--> */}
      <section className="home bd-grid">
        <div className="home__data">
          <h1 className="home__title">
            Hi,<br />I'am<span className="home__title-color"> Pollyana</span><br />Developer
          </h1>
          <a href="#home" className="button">Contact</a>
        </div>
        <div class="home__img">    
          <img src={Profile} alt="profile" />
        </div>
      </section>
      {/* <!--===== ABOUT =====--> */}
      <section className="about section">
        <h2 className="section-title">About</h2>
        <div className="about__container bd-grid">
          <div>Imagem a escolher</div>
        </div>
        <div>
          <h2 className="about__subtitle">I'am Pollyana</h2>
          <p className="about__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.
          </p>
        </div>
      </section>
      <Skills />
      <Projects />
      {/* <!--===== CONTACT =====--> */}
      <section className="contact__section">
        <h2 className="section__title">Contact</h2>
        <div className="contact__container">
          <div>
            <h3 className="contact__subtitle">E-MAIL</h3>
            <span className="contact__text">pollyana.deoliveir@gmail.com</span>
            <h3 className="contact__subtitle">PHONE</h3>
            <span className="contact__text"><FaWhatsapp /> +55 67 98115-5931</span>
            <h3 className="contact__subtitle">ADRESS</h3>
            <span className="contact__text">Campo Grande - MS / Brazil</span>
          </div>
          </div>
      </section>
      {/* <!--===== FOOTER =====--> */}
      <footer className="footer">
      <div className="footer__container">
        <div>
          <h2 className="footer__title">POLLYANA OLIVEIRA</h2>
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
          <a href="https://www.linkedin.com/in/adao-bjunior/"><FaLinkedinIn className="social__icon" /></a>
          <a href="https://www.github.com/PollyanaOliveira"><FaGithub className="social__icon" /></a>
        </div>
        </div>
        <p className="footer__copy"><CgCopyright /> 2021 PollyanaOliveira. All rigth reserved</p>
      </footer>
    </main>
    </div>
  );
}
