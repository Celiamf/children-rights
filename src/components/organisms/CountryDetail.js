// import BackToListLink from "./BackToListLink";
// import PropTypes from "prop-types";
import "./_countryDetail.scss";
import GhanaFlag from "../../images/country-flags/ghana.svg";

const CountryDetail = () => {
  return (
    <>
      {/* <BackToListLink /> */}
      <article className="detail">
        <div>
          <h2>Ghana</h2>
          <img src={GhanaFlag} alt="Ghana" className="detail__img" />
        </div>
        <div>
          <h2>Embajada en Madrid</h2>
          <ul className="detail__EmbassyInfo">
            <li></li>
            <li className="detail__EmbassyInfo detail__EmbassyInfo--address">
              <a
                href="https://goo.gl/maps/FFXMU9uj7zr8UVpPA"
                target="_blank"
                title="See Embassy's address on Google"
              ></a>
            </li>
            <li className="detail__EmbassyInfo detail__EmbassyInfo--phone">
              915 670 440
            </li>
            <li className="detail__EmbassyInfo detail__EmbassyInfo--email">
              consular@ghanaembassy.es
            </li>
            <li className="detail__EmbassyInfo detail__EmbassyInfo--web">
              https://ghanaembassy.es/passport-application/
            </li>
          </ul>
        </div>
        <div>
          <h2>Pasaporte</h2>
          <h3>Documentación</h3>
          <ul>
            <li> Certificado de nacimiento (original y 1 copia)</li>
            <li>3 fotografías tamaño carnet</li>
            <li>Rellenar el formulario online</li>
          </ul>
          <h3>Precio</h3>
          <p>120€</p>
          <h3>Más información</h3>
          <ul>
            <li>Pide cita previa en la página web</li>
            <li>Acude a tu cita con la documentación</li>
          </ul>
        </div>
      </article>
    </>
  );
};

export default CountryDetail;
