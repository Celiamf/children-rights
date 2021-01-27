import "./_centerMenu.scss";
import { Link } from "react-router-dom";
import Wrapper from "../atoms/Wrapper";
import Heading from "../atoms/Heading";
import MenuSection from "../atoms/MenuSection";
import Footer from "../organisms/Footer";

const CenterMenu = () => {
  return (
    <Wrapper className="centerMenu">
      <main className="centerMenuMain">
        <div className="centerMenuMain__intro">
          <Heading tag="h2" text="En el centro" className="primaryMenu" />
        </div>
        <ul>
          <MenuSection text="¿Qué es un centro o piso de menores?" />
          <MenuSection text="Tengo un problema con mi edad" />
          <MenuSection text="Tengo un problema con mi residencia" />
          <MenuSection text="Mis derechos como menor" />
        </ul>
      </main>
      <Footer to="/WhereDoYouLive" />
    </Wrapper>
  );
};

export default CenterMenu;
