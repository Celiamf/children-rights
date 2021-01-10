// import Footer from "./Footer";
import "./_landing.scss";
import { Link } from "react-router-dom";
import Image from "../../atoms/Image/Image";
import ImgLanding from "../../../images/img_landing.svg";
// import LanguageSelect from "../../molecules/LanguageSelect/LanguageSelect";

const Landing = () => {
  return (
    <div className="wrapper">
      <header className="landingHeader">
        {/* <LanguageSelect/> */}
        <Image
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
    </div>
  );
};

export default Landing;
