import Wrapper from "../atoms/Wrapper";
import Image from "../atoms/Image";
import ImgFiscal from "../../images/imgFiscal.svg";
import Paragraph from "../atoms/Paragraph";
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import Footer from "../organisms/Footer";
import "./_age.scss";

const Age = () => {
  return (
    <Wrapper className="twoRowGrid">
      <header className="ageHeader">
        <Paragraph text="Si tienes menos de 18 años, estás en España solo/a y no tienes documentación de tu país, la Fiscalía estudiará tu edad para confirmar que eres menor y protegerte."></Paragraph>
        <Image
          src={ImgFiscal}
          alt="Dibujo de una jueza"
          className="age"
        ></Image>
      </header>
      <main>
        <Container>
          <Paragraph text="¿Cómo demuestro que soy menor?" />
          <Button
            className="nav"
            content={<i className="fas fa-chevron-circle-down"></i>}
          />
        </Container>
        <Container>
          <ul>
            <li>Averigua cómo conseguir tu pasaporte (mira más abajo)</li>
            <li>
              Pide a tu familia que busque toda la documentación que puedas
              tener en tu país
            </li>
            <li>Pide a tu familia que te envíe fotos de la documentación</li>
            <li>
              Pide a tu familia que te envíe los documentos originales por
              correo o a través de personas de confianza
            </li>
          </ul>
        </Container>
      </main>
      <Footer to="/AtCenterMenu" />
    </Wrapper>
  );
};

export default Age;
