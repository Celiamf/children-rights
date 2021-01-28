// import { Link } from "react-router-dom";
import "./_age.scss";
import Wrapper from "../atoms/Wrapper";
import Footer from "../organisms/Footer";

const Age = () => {
  return (
    <Wrapper className="age">
      <main></main>
      <Footer to="/AtCenterMenu" />
    </Wrapper>
  );
};

export default Age;
