import { Link } from "react-router-dom";
import "./_whereDoYouLive.scss";
import IconCenter from "../../images/icon_center.svg";
import Image from "../atoms/Image";
import Wrapper from "../atoms/Wrapper";
import Heading from "../atoms/Heading";
import Footer from "../organisms/Footer";

const WhereDoYouLive = () => {
  return (
    <Wrapper className="whereYouLive">
      <header className="whereYouLiveHeader">
        <Image
          src={IconCenter}
          alt="Home with a person inside"
          className="whereYouLive"
        />
      </header>
      <main className="whereYouLiveMain">
        <Heading tag="h2" text="¿Dónde vives?" className="secondary" />
        <Link to="/CenterMenu" className="btnLink btnLink--primary">
          En un centro de menores
        </Link>
        <Link to="/NoCenterInfo" className="btnLink btnLink--secondary">
          En otro sitio
        </Link>
      </main>
      <Footer to="/" />
    </Wrapper>
  );
};

export default WhereDoYouLive;
