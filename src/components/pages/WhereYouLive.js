import "./_whereYouLive.scss";
import { Link } from "react-router-dom";
import Wrapper from "../atoms/Wrapper";
import Title from "../atoms/Title";
import IconCenter from "../../images/icon_center.svg";
import Image from "../atoms/Image";
import Footer from "../organisms/Footer";

const WhereYouLive = () => {
  return (
    <Wrapper>
      <div className="content">
        <header className="whereYouLiveHeader">
          <Image
            src={IconCenter}
            alt="Home with a person inside"
            className="whereYouLive"
          />
        </header>
        <main className="whereYouLiveMain">
          <Title tag="h2" text="¿Dónde vives?" className="secondary" />
          <div>
            <Link to="/AtCenterMenu" className="btnLink btnLink--primary">
              En un centro de menores
            </Link>
            <Link
              to="/UnderConstruction"
              className="btnLink btnLink--secondary"
            >
              En otro sitio
            </Link>
          </div>
        </main>
      </div>
      <Footer to="/" />
    </Wrapper>
  );
};

export default WhereYouLive;
