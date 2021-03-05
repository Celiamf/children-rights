import "./_age.scss";
import "../../styles/components/_collapsible.scss";
import Wrapper from "../atoms/Wrapper";
import Image from "../atoms/Image";
import ImgFiscal from "../../images/imgFiscal.svg";
import Collapsible from "react-collapsible";
import CountryCard from "../organisms/CountryCard";
import Footer from "../organisms/Footer";

const Age = () => {
  return (
    <Wrapper className="threeRowGrid--age wrapper__threeRowGrid">
      <header className="ageHeader">
        <p className="ageHeader__text">
          Si tienes <strong className="breakLine">menos de 18 años,</strong>{" "}
          estás <strong>solo/a en España</strong> y{" "}
          <strong className="breakLine">no tienes pasaporte,</strong> la
          Fiscalía estudiará tu edad para confirmar que eres menor y{" "}
          <strong>protegerte</strong>.
        </p>
        <Image
          src={ImgFiscal}
          alt="Drawing of a woman judge"
          className="age"
        ></Image>
      </header>
      <main className="ageMain">
        <Collapsible trigger="¿Cómo demuestro que soy menor?">
          <ol className="ageSection ageSection__numbered">
            <li>
              Averigua cómo conseguir tu <strong>pasaporte</strong> (mira más
              abajo)
            </li>
            <li>
              Pide a tu familia que te mande{" "}
              <strong>fotos de los documentos</strong> que tengas en tu país
            </li>
            <li>
              Pide a tu familia que te envíe los{" "}
              <strong>documentos originales por correo</strong> o a través de
              personas de confianza
            </li>
          </ol>
        </Collapsible>
        <Collapsible trigger="¿Cómo consigo mi pasaporte?">
          <ul className="ageSection">
            <CountryCard></CountryCard>
          </ul>
        </Collapsible>
        <Collapsible trigger="¿Qué derechos tengo durante el proceso?">
          <ul className="ageSection">
            <li className="listIcon listIcon__rightTreatedAsMinor">
              Tienes derecho a ser <strong>tratado como menor</strong> hasta que
              la Fiscalía diga lo contrario
            </li>
            <li className="listIcon listIcon__rightLiveInCenter">
              Tienes derecho a{" "}
              <strong>vivir en un centro o piso de menores</strong>
            </li>
            <li className="listIcon listIcon__rightAssistance">
              Las personas que trabajan en el centro deben{" "}
              <strong>ayudarte y acompañarte</strong> en lo que necesites
            </li>
            <li className="listIcon listIcon__rightHealthCare">
              Tienes derecho a la <strong>atención sanitaria</strong>
            </li>
          </ul>
        </Collapsible>
        <Collapsible trigger="¿Qué va a pasar en la Fiscalía?">
          <ul className="ageSection">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              perspiciatis aliquam reiciendis ut officiis deserunt minima
              quibusdam fuga quam fugiat commodi numquam iure, cumque esse
              obcaecati ea, perferendis tempore! Nulla!
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              libero provident, placeat laboriosam fuga dignissimos quos autem!
              Sed beatae autem magni, facere voluptate iure harum est
              accusantium adipisci officia quia.
            </li>
          </ul>
        </Collapsible>
        <Collapsible trigger="La decisión de la Fiscalía">
          <ul className="ageSection">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              perspiciatis aliquam reiciendis ut officiis deserunt minima
              quibusdam fuga quam fugiat commodi numquam iure, cumque esse
              obcaecati ea, perferendis tempore! Nulla!
            </li>
          </ul>
        </Collapsible>
      </main>
      <Footer to="/AtCenterMenu" />
    </Wrapper>
  );
};

export default Age;
