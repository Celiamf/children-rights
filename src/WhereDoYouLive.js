import IconCenter from "./images/icon_center.svg";
import { Link } from "react-router-dom";

const WhereDoYouLive = () => {
  return (
    <>
      <header>
        <div>
          <img src={IconCenter} alt="Home with a person inside" />
        </div>
      </header>
      <main>
        <h2>¿Dónde vives?</h2>
        <Link to="/CenterMenu" className="landing__button">
          Tengo menos de 18 años y estoy en Madrid
        </Link>
        <Link to="/NoCenterInfo" className="landing__button">
          Tengo menos de 18 años y estoy en Madrid
        </Link>
        <nav>
          <Link to="/" className="landing__button">
            <i class="fas fa-chevron-circle-left"></i>
          </Link>
          <Link to="/" className="landing__button">
            <i class="fas fa-home"></i>
          </Link>
        </nav>
      </main>
    </>
  );
};

export default WhereDoYouLive;
