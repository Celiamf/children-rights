import "./_container.scss";
import PropTypes from "prop-types";

const Container = (props) => {
  return (
    <section className={`container container--${props.className}`}>
      {props.children}
    </section>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
