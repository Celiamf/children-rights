import "./_label.scss";

const Label = (props) => {
  return (
    <label for={props.for} className={props.className}>
      {props.text}
    </label>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Label;
