import "./_countryDetail.scss";
import CloseModalBtn from "../molecules/CloseModalBtn";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CountryDetail = (props) => {
  const passportDocuments = props.country.passportDocuments.map((document) => {
    if (document !== "") {
      return <li>{document}</li>;
    }
  });

  const passportInstructions = props.country.passportInstructions.map(
    (instruction) => {
      if (instruction !== "") {
        return <li>{instruction}</li>;
      }
    }
  );

  return (
    <Modal isOpen="true" className="modalContainer">
      <CloseModalBtn></CloseModalBtn>
      <div className="countryWrapper">
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
                rel="noopener noreferrer"
                title="Dirección de la embajada en Google"
                className="textLink"
              >
                {props.country.address}
              </a>
            </span>
            <h3>Teléfono:</h3>
            <a href={`tel:+34${props.country.phone}`}>
              <span>{props.country.phone}</span>
            </a>
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
                rel="noopener noreferrer"
                title="Visita la web de la Embajada"
                className="textLink"
              >
                Visita su web
              </a>
            </span>
          </div>
        </section>
      </div>
      <section>
        <h2 className="sectionTitle">Pasaporte</h2>
        <div className="passportSection">
          <div className="passportRequirements">
            <h3>Documentación</h3>
            <ul className="passportRequirements__list">{passportDocuments}</ul>
          </div>
          <div>
            <h3>Precio</h3>
            <span className="passportPrice">{props.country.passportPrice}</span>
          </div>
          <div className="moreInfo">
            <h3>Más información</h3>
            <div className="moreInfoWrapper">
              <div className="warningSign"></div>
              <ul className="moreInfoList">{passportInstructions}</ul>
            </div>
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default CountryDetail;
