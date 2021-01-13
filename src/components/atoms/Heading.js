import "./_heading.scss";
import PropTypes from "prop-types";

const Heading = (props) => {
  const { tag: Tag } = props;
  return <Tag className={`heading ${props.className}`}>{props.text}</Tag>;
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  tag: PropTypes.string,
  className: PropTypes.string,
};

Heading.defaultProps = {
  tag: "h1",
};

export default Heading;
