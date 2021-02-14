// import BackToListLink from "./BackToListLink";
// import PropTypes from "prop-types";
import "./_countryDetail.scss";
import GhanaFlag from "../../images/country-flags/ghana.svg";

const CountryDetail = () => {
  return (
    <>
      {/* <BackToListLink /> */}
      <article className="modalContainer">
        <div className="countryContainer">
          <img src={GhanaFlag} alt="Ghana flag" className="countryFlag" />
          <h2 className="countryTitle">Ghana</h2>
        </div>
        <section className="embassyContainer">
          <h2>Embajada</h2>
          <div className="embassyList">
            <h3>Dirección:</h3>
            <span>
              <a
                href="https://goo.gl/maps/FFXMU9uj7zr8UVpPA"
                target="_blank"
                title="See Embassy's address on Google"
              >
                C/ Hernández de Tejada, 10
              </a>
            </span>
            <h3>Teléfono:</h3>
            <span>915 670 440</span>
            <h3>E-mail: </h3>
            <span>
              <a href="mailto:consular@ghanaembassy.es">
                consular@ghanaembassy.es
              </a>
            </span>
            <h3>Web:</h3>
            <span>
              <a
                href="https://ghanaembassy.es/passport-application/"
                target="_blank"
                title="Visita la web de la Embajada"
              >
                Visita su web
              </a>
            </span>
          </div>
        </section>
        <section className="passportSection">
          <h2>Pasaporte</h2>
          <h3 className="passportSubtitle">Documentación</h3>
          <ul className="passportRequirements">
            <li>
              <strong>Partida de nacimiento</strong> (original y 1 copia)
            </li>
            <li>
              4 <strong>fotos</strong> tamaño carnet
            </li>
            <li>
              <strong>
                <a
                  href="https://online.ghanaembassy.es/pnew.php#step-1"
                  target="_blank"
                  title="Rellena el formulario on-line"
                >
                  Formulario
                </a>
              </strong>{" "}
              online cumplimentado
            </li>
          </ul>
          <h3 className="passportSubtitle">Precio</h3>
          <span className="passportPrice">120€</span>
          <h3 className="passportSubtitle">Más información</h3>
          <div className="moreInfoContainer">
            <div className="warningSign"></div>
            <ul className="moreInfoList">
              <li>Pide cita previa en la página web</li>
              <li>Acude a tu cita con la documentación</li>
            </ul>
          </div>
        </section>
      </article>
    </>
  );
};

export default CountryDetail;
