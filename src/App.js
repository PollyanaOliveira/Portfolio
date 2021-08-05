import './App.css';

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
              <li class="nav__item"><a href="#work" class="nav__link">Projects</a></li>
              <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
            </ul>
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
    </main>
    </div>
  );
}
