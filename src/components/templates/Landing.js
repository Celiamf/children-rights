// import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./_landing.scss";
import "../../styles/elements/_links.scss";
import ImgLanding from "../../images/img_landing.svg";
import Image from "../atoms/Image";
import Wrapper from "../atoms/Wrapper";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import Footer from "../organisms/Footer";

const Landing = () => {
  return (
    <Wrapper>
      <header className="landingHeader">
        <Image
          src={ImgLanding}
          alt="Little people helping each other reach higher"
        />
      </header>
      <main className="landingMain">
        <section className="landingIntro">
          <Heading tag="h1" className="landingIntro__Heading" text="¡Hola!" />
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
    </Wrapper>
  );
};

export default Landing;
