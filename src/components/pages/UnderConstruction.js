import "./_underConstruction.scss";
import ImgConstructing from "../../images/constructing.svg";
import Image from "../atoms/Image";
import Wrapper from "../atoms/Wrapper";
import Paragraph from "../atoms/Paragraph";
import Footer from "../organisms/Footer";

const UnderConstruction = () => {
  return (
    <Wrapper className="twoRowGrid">
      <main className="underConstructionMain">
        <Image
          src={ImgConstructing}
          alt="Woman coding"
          className="underConstruction"
        />
        <Paragraph
          className="underConstructionIntro__Subheading"
          text="Aún estamos trabajando en esta página"
        />
      </main>
      <Footer to="/AtCenterMenu" />
    </Wrapper>
  );
};

export default UnderConstruction;
