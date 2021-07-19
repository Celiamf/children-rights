import "./_underConstruction.scss";
import ImgConstructing from "../../images/constructing.svg";
import Wrapper from "../atoms/Wrapper";
import Paragraph from "../atoms/Paragraph";
import Footer from "../organisms/Footer";

const UnderConstruction = () => {
  return (
    <Wrapper className="twoRowGrid">
      <main className="underConstructionMain">
        <img
          src={ImgConstructing}
          alt="Woman coding"
          className="underConstructionMain__img"
        />
        <Paragraph
          className="underConstructionIntro__subtitle"
          text="Aún estamos trabajando en esta página"
        />
      </main>
      <Footer to="/AtCenterMenu" />
    </Wrapper>
  );
};

export default UnderConstruction;
