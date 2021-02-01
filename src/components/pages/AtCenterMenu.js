import Wrapper from "../atoms/Wrapper";
import Heading from "../atoms/Heading";
import MenuSection from "../atoms/MenuSection";
import Footer from "../organisms/Footer";
import "./_atCenterMenu.scss";

const AtCenterMenu = () => {
  return (
    <Wrapper className="atCenterMenu">
      <main className="atCenterMenuMain">
        <div className="atCenterMenuMain__intro">
          <Heading tag="h2" text="En el centro" className="primaryMenu" />
        </div>
        <ul className="atCenterMenuMain__menu">
          <MenuSection
            text="¿Qué es un centro o piso de menores?"
            to="/UnderConstruction"
          />
          <MenuSection
            text="Tengo un problema con mi edad"
            to="/UnderConstruction"
          />
          <MenuSection
            text="Tengo un problema con mi residencia"
            to="/UnderConstruction"
          />
          <MenuSection text="Mis derechos como menor" to="/UnderConstruction" />
        </ul>
      </main>
      <Footer to="/WhereYouLive" />
    </Wrapper>
  );
};

export default AtCenterMenu;
