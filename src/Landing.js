// import Footer from "./Footer";
import "./stylesheets/layout/_landing.scss";
import { Link } from "react-router-dom";
import ImgLanding from "./images/img_landing.svg";
// import IconLanguage from "./images/icon_language.svg";

const Landing = () => {
  return (
    <div className="landingBg">
      <header>
        {/* <div className="language-picker js-language-picker">
          <form action="" className="language-picker__form">
            <label for="language-picker-select">Elige tu idioma </label>

            <select name="language-picker-select" id="language-picker-select">
              <option lang="es" value="spanish" selected>
                Español
              </option>
              <option lang="en" value="english">
                English
              </option>
              <option lang="fr" value="francais">
                Français
              </option>
              <option lang="ar" value="arabic">
                عرب
              </option>
            </select>
          </form>
        </div> */}
        <img
          src={ImgLanding}
          alt="Little people helping each other reach higher"
          className="langingImg"
        />
      </header>
      <main>
        <section>
          <h1 className="landingHeading">¡Hola!</h1>
          <p>Bienvenido/a a la app que te informa sobre tus derechos</p>
        </section>
        <section>
          <Link to="/WhereDoYouLive" className="landing__button">
            Tengo menos de 18 años y estoy en Madrid
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Landing;
