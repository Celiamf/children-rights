import { Link } from "react-router-dom";
import "./_countryCard.scss";

const CountryCard = (props) => {
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
