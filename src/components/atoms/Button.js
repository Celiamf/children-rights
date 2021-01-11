import "./_button.scss";
import PropTypes from "prop-types";

const Button = (props) => (
  <button className={`btn btn--${props.className}`}>{props.content}</button>
);

Button.propTypes = {
  content: PropTypes.any.isRequired,
};

export default Button;
