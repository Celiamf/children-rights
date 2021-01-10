import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <nav>
        <Link to="/" className="landing__button">
          <i className="fas fa-chevron-circle-left"></i>
        </Link>
        <Link to="/" className="landing__button">
          <i className="fas fa-home"></i>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
