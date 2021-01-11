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
      <Button content={<i className="fas fa-language"></i>} />
    </footer>
  );
};

export default Footer;
