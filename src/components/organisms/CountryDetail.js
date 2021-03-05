// import PropTypes from "prop-types";
import "./_countryDetail.scss";
import CloseModalBtn from "../molecules/CloseModalBtn";

const CountryDetail = () => {
  return (
    <>
      <article className="modalContainer">
        <CloseModalBtn></CloseModalBtn>
        <div className="countryContainer">
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkRBNDQ7IiBkPSJNMCwyNTZjMCwzMS4zMTQsNS42MzMsNjEuMzEsMTUuOTIzLDg5LjA0M0wyNTYsMzU2LjE3NGwyNDAuMDc3LTExLjEzDQoJQzUwNi4zNjgsMzE3LjMxLDUxMiwyODcuMzE0LDUxMiwyNTZzLTUuNjMyLTYxLjMxLTE1LjkyMy04OS4wNDNMMjU2LDE1NS44MjZsLTI0MC4wNzcsMTEuMTNDNS42MzMsMTk0LjY5LDAsMjI0LjY4NiwwLDI1NnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNEODAwMjc7IiBkPSJNMjU2LDBDMTQ1LjkyOSwwLDUyLjA5NCw2OS40NzIsMTUuOTIzLDE2Ni45NTdoNDgwLjE1NUM0NTkuOTA2LDY5LjQ3MiwzNjYuMDcxLDAsMjU2LDB6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNDk2RTJEOyIgZD0iTTQ5Ni4wNzcsMzQ1LjA0M0gxNS45MjNDNTIuMDk0LDQ0Mi41MjcsMTQ1LjkyOSw1MTIsMjU2LDUxMlM0NTkuOTA2LDQ0Mi41MjcsNDk2LjA3NywzNDUuMDQzeiIvPg0KPHBvbHlnb24gcG9pbnRzPSIyNTUuOTk4LDE2Ni45NTcgMjc4LjA5OCwyMzQuOTc3IDM0OS42MjYsMjM0Ljk3NyAyOTEuNzYzLDI3Ny4wMiAzMTMuODYzLDM0NS4wNDMgMjU1Ljk5OCwzMDMuMDAzIDE5OC4xMzMsMzQ1LjA0MyANCgkyMjAuMjM3LDI3Ny4wMiAxNjIuMzc0LDIzNC45NzcgMjMzLjg5OCwyMzQuOTc3ICIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
            alt="Ghana flag"
            className="countryFlag"
          />
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
                title="Dirección de la embajada en Google"
                className="modalLink"
              >
                C/ Hernández de Tejada, 10
              </a>
            </span>
            <h3>Teléfono:</h3>
            <span>915 670 440</span>
            <h3>E-mail: </h3>
            <span>
              <a href="mailto:consular@ghanaembassy.es" className="modalLink">
                consular@ghanaembassy.es
              </a>
            </span>
            <h3>Web:</h3>
            <span>
              <a
                href="https://ghanaembassy.es/passport-application/"
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
