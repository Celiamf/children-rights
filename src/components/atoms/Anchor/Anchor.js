import "./_anchor.scss";

const Anchor = (props) => {
  <a to={props.to} className="link">
    {props.text}
  </a>;
};

Anchor.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Anchor;
