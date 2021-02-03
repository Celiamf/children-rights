import "./_centerDef.scss";
import Wrapper from "../atoms/Wrapper";
import Footer from "../organisms/Footer";

const CenterDef = () => {
  return (
    <Wrapper className="centerDef">
      <main></main>
      <Footer to="/AtCenterMenu" />
    </Wrapper>
  );
};

export default CenterDef;
