import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import "./_footer.scss";

const Footer = (props) => {
  return (
    <footer className="footer">
      <Link to={props.to} className="iconLink">
        <i className="fas fa-chevron-circle-left"></i>
      </Link>
      <Link to="/" className="iconLink">
        <i className="fas fa-home"></i>
      </Link>
      <Button content={<i className="fas fa-language"></i>} />
      <small className="copy">@TusDerechos 2021</small>
    </footer>
  );
};

export default Footer;
