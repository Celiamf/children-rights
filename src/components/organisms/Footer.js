import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../atoms/Button";
import "./_footer.scss";

const Footer = (props) => {
  return (
    <footer className="footer">
      <Link to={props.to} className="iconLink iconLink--nav">
        <i className="fas fa-chevron-circle-left"></i>
      </Link>
      <Link to="/" className="iconLink iconLink--nav">
        <i className="fas fa-home"></i>
      </Link>
      <Button className="nav" content={<i className="fas fa-language"></i>} />
      <small className="copy">@TusDerechos 2021</small>
    </footer>
  );
};

Footer.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Footer;
