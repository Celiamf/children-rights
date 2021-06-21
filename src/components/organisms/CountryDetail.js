import "./_countryDetail.scss";
import CloseModalBtn from "../molecules/CloseModalBtn";
import Modal from "react-modal";

const CountryDetail = (props) => {
  //NO LLEGAN LAS PROPS AQUÍ. SOLO LLEGA UNA QUE SE LLAMA COUNTRY IS ES UNDEFINED
  console.log({ props });
  return (
    <>
      {/* <Modal isOpen={true}>
        <h2>Este es el modal</h2>
        <CloseModalBtn></CloseModalBtn>
      </Modal> */}
      <article className="modalContainer">
        <CloseModalBtn></CloseModalBtn>
        <div className="countryContainer">
          <img
            src={props.country.img}
            alt="Ghana flag"
            className="countryFlag"
          />
          <h2 className="countryTitle">{props.country.name}</h2>
        </div>
        <section className="embassyContainer">
          <h2>Embajada</h2>
          <div className="embassyList">
            <h3>Dirección:</h3>
            <span>
              <a
                href={props.country.addressLink}
                target="_blank"
                title="Dirección de la embajada en Google"
                className="modalLink"
              >
                {props.country.street}
              </a>
            </span>
            <h3>Teléfono:</h3>
            <span>{props.country.phone}</span>
            <h3>E-mail: </h3>
            <span>
              <a href={`mailto:${props.country.email}`} className="modalLink">
                {props.country.email}
              </a>
            </span>
            <h3>Web:</h3>
            <span>
              <a
                href={props.country.website}
                target="_blank"
                title="Visita la web de la Embajada"
                className="modalLink"
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
                  className="modalLink"
                >
                  Formulario
                </a>
              </strong>{" "}
              online cumplimentado
            </li>
          </ul>
          <h3 className="passportSubtitle">Precio</h3>
          <span className="passportPrice">{props.country.passportPrice}</span>
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
