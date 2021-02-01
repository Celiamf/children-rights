import Wrapper from "../atoms/Wrapper";
import Footer from "../organisms/Footer";
import "./_age.scss";

const Age = () => {
  return (
    <Wrapper className="age">
      <main></main>
      <Footer to="/AtCenterMenu" />
    </Wrapper>
  );
};

export default Age;
