import PropTypes from "prop-types";
import "./_button.scss";

const Button = (props) => <button className="btn">{props.content}</button>;

Button.propTypes = {
  content: PropTypes.any.isRequired,
};

export default Button;
