import { Link } from "react-router-dom";
import GhanaFlag from "../../images/country-flags/ghana.svg";
import "./_countryCard.scss";

const CountryCard = () => {
  return (
    <>
      <Link to={`/country/ghana`}>
        <li className="countryCard">
          <img src={GhanaFlag} alt="Ghana" className="countryCard__img" />
          <h3 className=" countryCard__name">Ghana</h3>
        </li>
      </Link>
    </>
  );
};

export default CountryCard;
