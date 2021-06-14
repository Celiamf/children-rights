import { Link } from "react-router-dom";
import GhanaFlag from "../../images/country-flags/ghana.svg";
import "./_countryCard.scss";

const CountryCard = (props) => {
  debugger;
  return (
    <>
      <Link to={`/char/${props.name}`}>
        <li className="countryCard">
          <img
            src={props.img}
            alt={props.country}
            className="countryCard__img"
          />
          <h3 className=" countryCard__name">{props.country}</h3>
        </li>
      </Link>
    </>
  );
};

export default CountryCard;
