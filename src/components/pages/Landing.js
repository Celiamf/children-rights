import { Link } from "react-router-dom";
import "./_landing.scss";
import "../atoms/_anchor.scss";
import ImgLanding from "../../images/img_landing.svg";
import Image from "../atoms/Image";
import Wrapper from "../atoms/Wrapper";
import Container from "../atoms/Container";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";

const Landing = () => {
  return (
    <Wrapper className="landing">
      <header className="landingHeader">
        <button className="languageBtn">
          <i className="fas fa-language "></i>
        </button>
        <Image
          src={ImgLanding}
          alt="Little people helping each other reach higher"
        />
      </header>
      <main className="landingMain">
        <Container>
          <Heading text="¡Hola!" className="primary" />
          <Paragraph
            className="landingIntro__Subheading"
            text="Bienvenido/a a la app que te informa sobre tus derechos"
          />
        </Container>
        <section className="landingAccess">
          <Link to="/WhereYouLive" className="btnLink">
            Tengo menos de 18 años y estoy en Madrid
          </Link>
        </section>
      </main>
    </Wrapper>
  );
};

export default Landing;