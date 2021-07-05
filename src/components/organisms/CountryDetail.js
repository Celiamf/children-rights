import "./_countryDetail.scss";
import CloseModalBtn from "../molecules/CloseModalBtn";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CountryDetail = (props) => {
  return (
    <Modal isOpen="true" className="modalContainer">
      <CloseModalBtn></CloseModalBtn>
      <div className="header">
        <section className="countrySection">
          <img
            src={props.country.img}
            alt={`${props.country.name} flag`}
            className="countryFlag"
          />
          <h2>{props.country.name}</h2>
        </section>
        <section className="embassySection">
          <h2 className="sectionTitle">Embajada</h2>
          <div className="embassyList">
            <h3>Dirección:</h3>
            <span>
              <a
                href={props.country.addressLink}
                target="_blank"
                title="Dirección de la embajada en Google"
                className="textLink"
              >
                {props.country.street}
              </a>
            </span>
            <h3>Teléfono:</h3>
            <span>{props.country.phone}</span>
            <h3>E-mail: </h3>
            <span>
              <a href={`mailto:${props.country.email}`} className="textLink">
                {props.country.email}
              </a>
            </span>
            <h3>Web:</h3>
            <span>
              <a
                href={props.country.website}
                target="_blank"
                title="Visita la web de la Embajada"
                className="textLink"
              >
                Visita su web
              </a>
            </span>
          </div>
        </section>
      </div>
      <section className="passportSection">
        <h2 className="sectionTitle">Pasaporte</h2>
        <h3>Documentación</h3>
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
                className="textLink"
              >
                Formulario
              </a>
            </strong>{" "}
            online cumplimentado
          </li>
        </ul>
        <h3>Precio</h3>
        <span className="passportPrice">{props.country.passportPrice}</span>
        <h3>Más información</h3>
        <div>
          <div className="warningSign"></div>
          <ul className="moreInfoList">
            <li>Pide cita previa en la página web</li>
            <li>Acude a tu cita con la documentación</li>
          </ul>
        </div>
      </section>
    </Modal>
  );
};

export default CountryDetail;
