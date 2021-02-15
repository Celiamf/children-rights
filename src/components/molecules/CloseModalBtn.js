import { Link } from "react-router-dom";
import closeIcon from "../../images/icon-close.svg";
import "./_closeModalBtn.scss";

const CloseModalBtn = () => {
  return (
    <Link
      to="/Age"
      className="closeModalBtn"
      aria-label="Go back to list"
      title="Go back to list"
    >
      <img src={closeIcon} alt="Cerrar" className="closeIcon" />
    </Link>
  );
};

export default CloseModalBtn;
