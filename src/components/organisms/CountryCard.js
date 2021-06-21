import { Link } from "react-router-dom";
import "./_countryCard.scss";

const CountryCard = (props) => {
  console.log({ props }, "Props en Countrycard - Tienen que subir");
  return (
    <>
      <Link to={`/country/${props.name}`}>
        <li className="countryCard">
          <img src={props.img} alt={props.name} className="countryCard__img" />
          <h3 className=" countryCard__name">{props.name}</h3>
        </li>
      </Link>
    </>
  );
};

export default CountryCard;
