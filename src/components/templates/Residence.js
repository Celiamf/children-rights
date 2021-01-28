// import { Link } from "react-router-dom";
import "./_residence.scss";
import Wrapper from "../atoms/Wrapper";
import Footer from "../organisms/Footer";

const Residence = () => {
  return (
    <Wrapper className="residence">
      <main></main>
      <Footer to="/AtCenterMenu" />
    </Wrapper>
  );
};

export default Residence;
