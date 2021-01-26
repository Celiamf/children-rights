import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import "./_footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/" className="iconLink iconLink--nav">
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

export default Footer;
