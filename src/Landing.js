// import Footer from "./Footer";
import "./stylesheets/layout/_landing.scss";
import { Link } from "react-router-dom";
import ImgLanding from "./images/img_landing.svg";
// import IconLanguage from "./images/icon_language.svg";

const Landing = () => {
  return (
    <>
      <header className="landingHeader">
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
          className="landingImg"
        />
      </header>
      <main className="landingMain">
        <section className="landingIntro">
          <h1 className="landingIntro__Heading">¡Hola!</h1>
          <h3 className="landingIntro__Subheading">
            Bienvenido/a a la app que te informa sobre tus derechos
          </h3>
        </section>
        <section className="landingAccess">
          <Link to="/WhereDoYouLive" className="landingAccess__button">
            Tengo menos de 18 años y estoy en Madrid
          </Link>
        </section>
      </main>
    </>
  );
};

export default Landing;
