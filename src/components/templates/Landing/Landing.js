// import Footer from "./Footer";
import "./_landing.scss";
import "../../../styles/ui/_links.scss";
import { Link } from "react-router-dom";
import Image from "../../atoms/Image/Image";
import Title from "../../atoms/Title/Title";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Footer from "../../organisms/Footer/Footer";
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
        />
      </header>
      <main className="landingMain">
        <section className="landingIntro">
          <Title tag="h1" className="landingIntro__Heading" text="¡Hola!" />
          <Paragraph
            className="landingIntro__Subheading"
            text="Bienvenido/a a la app que te informa sobre tus derechos"
          />
        </section>
        <section className="landingAccess">
          <Link to="/WhereDoYouLive" className="btnLink">
            Tengo menos de 18 años y estoy en Madrid
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
