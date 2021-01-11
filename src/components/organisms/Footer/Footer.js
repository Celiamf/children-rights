import { Link } from "react-router-dom";
import Button from "../../atoms/Button/Button";

const Footer = () => {
  return (
    <footer>
      <nav>
        <Link to="/" className="btnLink btnLink--nav">
          <i className="fas fa-chevron-circle-left"></i>
        </Link>
        <Link to="/" className="btnLink btnLink--nav">
          <i className="fas fa-home"></i>
        </Link>
        <Button content={<i className="fas fa-language"></i>} />
      </nav>
    </footer>
  );
};

export default Footer;
