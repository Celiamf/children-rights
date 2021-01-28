import "./_atCenterMenu.scss";

import Wrapper from "../atoms/Wrapper";
import Heading from "../atoms/Heading";
import MenuSection from "../atoms/MenuSection";
import Footer from "../organisms/Footer";

const AtCenterMenu = () => {
  return (
    <Wrapper className="atCenterMenu">
      <main className="atCenterMenuMain">
        <div className="atCenterMenuMain__intro">
          <Heading tag="h2" text="En el centro" className="primaryMenu" />
        </div>
        <ul>
          <MenuSection
            text="¿Qué es un centro o piso de menores?"
            to="/CenterDef"
          />
          <MenuSection text="Tengo un problema con mi edad" to="/Age" />
          <MenuSection
            text="Tengo un problema con mi residencia"
            to="/Residence"
          />
          <MenuSection text="Mis derechos como menor" to="/" />
        </ul>
      </main>
      <Footer to="/WhereYouLive" />
    </Wrapper>
  );
};

export default AtCenterMenu;
