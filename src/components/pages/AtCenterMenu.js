import "./_atCenterMenu.scss";
import Wrapper from "../atoms/Wrapper";
import Title from "../atoms/Title";
import MenuSection from "../atoms/MenuSection";
import Footer from "../organisms/Footer";

const AtCenterMenu = () => {
  return (
    <Wrapper>
      <main className="atCenterMenuMain">
        <div className="atCenterMenuMain__intro">
          <Title tag="h2" text="En el centro" className="primaryMenu" />
        </div>
        <ul className="atCenterMenuMain__menu">
          <MenuSection
            text="¿Qué es un centro o piso de menores?"
            to="/UnderConstruction"
          />
          <MenuSection text="Tengo un problema con mi edad" to="/Age" />
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
