import Wrapper from "../atoms/Wrapper";
import Image from "../atoms/Image";
import ImgFiscal from "../../images/imgFiscal.svg";
import Container from "../atoms/Container";
import Collapsible from "react-collapsible";
import Button from "../atoms/Button";
import Footer from "../organisms/Footer";
import "./_age.scss";

const Age = () => {
  return (
    <Wrapper className="twoRowGrid">
      <header className="ageHeader">
        <p className="ageHeader__text">
          Si tienes menos de 18 años, estás solo/a en España y no tienes
          documentación de tu país, la Fiscalía estudiará tu edad para confirmar
          que eres menor y protegerte.
        </p>
        <Image
          src={ImgFiscal}
          alt="Dibujo de una jueza"
          className="age"
        ></Image>
      </header>
      <main className="ageMain">
        <Collapsible trigger="¿Cómo demuestro que soy menor?">
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
        </Collapsible>
      </main>
      <Footer to="/AtCenterMenu" />
    </Wrapper>
  );
};

export default Age;
