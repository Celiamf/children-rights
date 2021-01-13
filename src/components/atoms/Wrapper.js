import "./_wrapper.scss";
import PropTypes from "prop-types";

const Wrapper = (props) => (
  <div className={`wrapper wrapper--${props.className}`}>{props.children}</div>
);

Wrapper.propTypes = {
  content: PropTypes.string,
};

export default Wrapper;
