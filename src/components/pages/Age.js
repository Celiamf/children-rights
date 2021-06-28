import "./_age.scss";
import "../../styles/components/_collapsible.scss";
import Wrapper from "../atoms/Wrapper";
import Image from "../atoms/Image";
import ImgFiscal from "../../images/imgFiscal.svg";
import Collapsible from "react-collapsible";
import CountryCard from "../organisms/CountryCard";
import Footer from "../organisms/Footer";

const Age = (props) => {
  const countryItems = props.countries.map((country) => {
    return (
      <CountryCard
        key={country.id}
        id={country.id}
        name={country.name}
        img={country.img}
      />
    );
  });
  return (
    <Wrapper className="wrapper">
      <header className="ageHeader">
        <p className="ageHeader__text">
          Si tienes <strong className="breakLine">menos de 18 años,</strong>{" "}
          estás <strong>solo/a en España</strong> y{" "}
          <strong className="breakLine">no tienes pasaporte,</strong> la
          Fiscalía estudiará tu edad para confirmar que eres menor y{" "}
          <strong>protegerte</strong>.
        </p>
        <Image src={ImgFiscal} alt="Drawing of a judge" className="age"></Image>
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
          <ul className="ageSection ageSection__passport">{countryItems}</ul>
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
          <section className="ageSection ageSection__attorney">
            <section className="section">
              <h3>Antes de ir</h3>
              <ul>
                <li>
                  Pide que te acompañe una/un <strong>abogada/o</strong> alguien
                  de confianza además de tu educador/a. ¡Es tu derecho!
                </li>
                <li>
                  Pide un/a <strong>intérprete</strong> que hable tu idioma
                  materno
                </li>
                <li>
                  Revisa bien tus <strong>documentos</strong>. Es importante que
                  conozcas bien cada uno de ellos, cómo los has conseguido y qué
                  información contienen
                </li>
              </ul>
            </section>
            <section className="section">
              <h3>Cuando estés allí</h3>
              <ul>
                <li>
                  Todo lo que digas allí se recogerá en un acta y servirá para
                  que la Fiscalía decida si eres menor de edad o no.
                </li>
                <li>
                  Por eso, si no entiendes algo de lo que dice la Fiscal o tu
                  intérprete, <span>¡dilo!</span>
                </li>
                <li>
                  Te preguntarán sobre:
                  <ul>
                    <li>
                      tu nombre y apellido, fecha de nacimiento y el nombre de
                      tus padres
                    </li>
                    <li>tus documentos</li>
                    <li>el viaje desde tu país a España</li>
                    <li>tu estancia en España</li>
                  </ul>
                </li>
                <li>
                  Pueden preguntarte si aceptas hacerte pruebas médicas. Tienes
                  derecho a decir que NO. Porque ninguna prueba médica puede
                  decir con exactitud cuál es tu fecha de nacimiento. Tu
                  documentación es suficiente para demostrar que eres menor de
                  edad.
                </li>
              </ul>
            </section>
            <section className="section">
              <h3>Importante</h3>
              <ul>
                <li>
                  Si la Policía puso mal tu fecha de nacimiento o tu nombre
                  cuando entraste en España, <span>¡dilo!</span>
                </li>
                <li>
                  Si al entrar en España tenías miedo y dijiste que eras mayor,
                  <span>¡dilo!</span>
                </li>
                <li>
                  Si alguna vez has vivido en un Centro de Menores,{" "}
                  <span>¡dilo!</span>
                </li>
                <li>
                  Si tienes documentos en tu país y no has podido traerlos,
                  <span>¡explícalo!</span>
                </li>
              </ul>
            </section>
          </section>
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
