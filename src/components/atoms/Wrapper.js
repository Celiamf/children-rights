import PropTypes from "prop-types";
import "./_wrapper.scss";

const Wrapper = (props) => <div className="wrapper">{props.children}</div>;

Wrapper.propTypes = {
  content: PropTypes.string,
};

export default Wrapper;
