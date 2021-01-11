import "./_title.scss";
import PropTypes from "prop-types";

const Title = (props) => {
  const { tag: Tag } = props;
  return <Tag className={`title ${props.className}`}>{props.text}</Tag>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

Title.defaultProps = {
  tag: "h1",
};

export default Title;
