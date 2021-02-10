import "./_age.scss";
import "../../styles/components/_collapsible.scss";
import Wrapper from "../atoms/Wrapper";
import Image from "../atoms/Image";
import ImgFiscal from "../../images/imgFiscal.svg";
import Collapsible from "react-collapsible";
import Footer from "../organisms/Footer";

const Age = () => {
  return (
    <Wrapper className="threeRowGrid">
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
        <Collapsible trigger="¿Qué derechos tengo durante el proceso?">
          <ul>
            <li>
              Debes ser considerado y tratado como menor hasta que la Fiscalía
              diga lo contrario
            </li>
            <li>Tienes derecho a vivir en un centro o piso de menores</li>
            <li>
              las personas que trabajan en el centro deben ayudarte y
              acompañarte en lo que necesites
            </li>
            <li>Tienes derecho a la atención sanitaria</li>
          </ul>
        </Collapsible>
        <Collapsible trigger="¿Qué va a pasar en la Fiscalía?">
          <ul>
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
          <ul>
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
      </main>
      <Footer to="/AtCenterMenu" />
    </Wrapper>
  );
};

export default Age;
