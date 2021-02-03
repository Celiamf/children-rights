import PropTypes from "prop-types";
import "./_title.scss";

const Title = (props) => {
  const { tag: Tag } = props;
  return <Tag className={`title title--${props.className}`}>{props.text}</Tag>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  tag: PropTypes.string,
  className: PropTypes.string,
};

Title.defaultProps = {
  tag: "h1",
};

export default Title;
