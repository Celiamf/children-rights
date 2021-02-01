import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./_menuSection.scss";

const MenuSection = (props) => {
  return (
    <li className="menuSection">
      <Link to={props.to} className="">
        {props.text}
      </Link>
    </li>
  );
};

MenuSection.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default MenuSection;
