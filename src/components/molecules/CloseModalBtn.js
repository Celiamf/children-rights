import { Link } from "react-router-dom";
import closeIcon from "../../images/icon-close.svg";
import "./_closeModalLink.scss";

const CloseModalLink = () => {
  return (
    <Link
      to="/Age"
      className="closeModalLink"
      aria-label="Go back to list"
      title="Go back to list"
    >
      <img src={closeIcon} alt="Cerrar" className="closeIcon" />
    </Link>
  );
};

export default CloseModalLink;
