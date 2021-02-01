import Wrapper from "../atoms/Wrapper";
import Footer from "../organisms/Footer";
import "./_residence.scss";

const Residence = () => {
  return (
    <Wrapper className="residence">
      <main></main>
      <Footer to="/AtCenterMenu" />
    </Wrapper>
  );
};

export default Residence;
