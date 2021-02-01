import PropTypes from "prop-types";
import "./_container.scss";

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
