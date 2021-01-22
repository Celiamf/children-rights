import { Link } from "react-router-dom";
import "./_whereDoYouLive.scss";
import IconCenter from "../../images/icon_center.svg";
import Image from "../atoms/Image";
import Wrapper from "../atoms/Wrapper";
import Header from "../atoms/Header";
import Heading from "../atoms/Heading";
import Footer from "../organisms/Footer";

const WhereDoYouLive = () => {
  return (
    <Wrapper>
      <Header>
        <Image
          src={IconCenter}
          alt="Home with a person inside"
          className="whereYouLive"
        />
      </Header>
      <main className="main">
        <Heading tag="h2" text="¿Dónde vives?" className="secondary" />
        <Link to="/CenterMenu" className="btnLink btnLink--primary">
          En un centro de menores
        </Link>
        <Link to="/NoCenterInfo" className="btnLink btnLink--secondary">
          En otro sitio
        </Link>
      </main>
      <Footer />
    </Wrapper>
  );
};

export default WhereDoYouLive;
