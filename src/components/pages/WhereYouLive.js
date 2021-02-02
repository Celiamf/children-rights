import { Link } from "react-router-dom";
import Wrapper from "../atoms/Wrapper";
import Heading from "../atoms/Heading";
import IconCenter from "../../images/icon_center.svg";
import Image from "../atoms/Image";
import Footer from "../organisms/Footer";
import "./_whereYouLive.scss";

const WhereYouLive = () => {
  return (
    <Wrapper className="threeRowGrid">
      <header className="whereYouLiveHeader">
        <Image
          src={IconCenter}
          alt="Home with a person inside"
          className="whereYouLive"
        />
      </header>
      <main className="whereYouLiveMain">
        <Heading tag="h2" text="¿Dónde vives?" className="secondary" />
        <Link to="/AtCenterMenu" className="btnLink btnLink--primary">
          En un centro de menores
        </Link>
        <Link to="/UnderConstruction" className="btnLink btnLink--secondary">
          En otro sitio
        </Link>
      </main>
      <Footer to="/" />
    </Wrapper>
  );
};

export default WhereYouLive;
