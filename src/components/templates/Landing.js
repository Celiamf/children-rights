import { Link } from "react-router-dom";
import "./_landing.scss";
import "../../styles/elements/_links.scss";
import ImgLanding from "../../images/img_landing.svg";
import Image from "../atoms/Image";
import Wrapper from "../atoms/Wrapper";
import Header from "../atoms/Header";
import Container from "../atoms/Container";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";

const Landing = () => {
  return (
    <Wrapper className="landing">
      <Header className="landing">
        <button className="languageBtn">
          <i className="fas fa-language "></i>
        </button>
        <Image
          src={ImgLanding}
          alt="Little people helping each other reach higher"
        />
      </Header>
      <main className="landingMain">
        <Container>
          <Heading text="¡Hola!" className="primary" />
          <Paragraph
            className="landingIntro__Subheading"
            text="Bienvenido/a a la app que te informa sobre tus derechos"
          />
        </Container>
        <section className="landingAccess">
          <Link to="/WhereDoYouLive" className="btnLink">
            Tengo menos de 18 años y estoy en Madrid
          </Link>
        </section>
      </main>
    </Wrapper>
  );
};

export default Landing;
