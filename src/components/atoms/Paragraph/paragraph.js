import "./_paragraph.scss";
import PropTypes from "prop-types";

const Paragraph = (props) => {
  return <p className={`paragraph ${props.className}`}>{props.text}</p>;
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Paragraph;
