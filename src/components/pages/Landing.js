import "./_landing.scss";
import "../atoms/_anchor.scss";
import { Link } from "react-router-dom";
import ImgLanding from "../../images/img_landing.svg";
import Wrapper from "../atoms/Wrapper";
import Title from "../atoms/Title";
import Paragraph from "../atoms/Paragraph";

const Landing = () => {
  return (
    <Wrapper>
      <header className="landing landing__header">
        <button className="languageBtn">
          <i className="fas fa-language "></i>
        </button>
        <img
          src={ImgLanding}
          className="landing__img"
          alt="Little people helping each other reach
          higher"
        />
      </header>
      <main className="landing landing__main">
        <section className="landing landing__intro">
          <Title text="¡Hola!" className="primary" />
          <Paragraph text="Bienvenido/a a la app que te informa sobre tus derechos" />
        </section>
        <section className="landing landing__access">
          <Link to="/WhereYouLive" className="btnLink">
            Tengo menos de 18 años y estoy en Madrid
          </Link>
        </section>
      </main>
    </Wrapper>
  );
};

export default Landing;
