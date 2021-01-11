import IconCenter from "../../images/icon_center.svg";
import "../../styles/ui/_links.scss";
import { Link } from "react-router-dom";
import Image from "../atoms/Image";
import Footer from "../organisms/Footer";
import Title from "../atoms/Title";

const WhereDoYouLive = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="houseCircle">
          <Image
            src={IconCenter}
            alt="Home with a person inside"
            className="houseIcon"
          />
        </div>
      </header>
      <main className="main">
        <Title tag="h2" text="¿Dónde vives?" />
        <Link to="/CenterMenu" className="btnLink btnLink--primary">
          En un centro de menores
        </Link>
        <Link to="/NoCenterInfo" className="btnLink btnLink--secondary">
          En otro sitio
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default WhereDoYouLive;
