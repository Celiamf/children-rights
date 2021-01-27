import "./_menuSection.scss";
import PropTypes from "prop-types";

const MenuSection = (props) => {
  return (
    <li className="menuSection">
      <p>{props.text}</p>
    </li>
  );
};

MenuSection.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MenuSection;
