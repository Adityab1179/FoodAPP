import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome";
import {
  faSearch,
  faPercent,
  faHandHoldingHand,
  faUser,
  faShoppingCart,
} from "../../node_modules/@fortawesome/free-solid-svg-icons";
import Applogo from "../components/Applogo";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [loginbtn, setloginbtn] = useState("login");
  const toggleLogin = () => {
    setloginbtn((prevLoginBtn) =>
      prevLoginBtn === "login" ? "logout" : "login"
    );
  };

  return (
    <nav className="nav">
      <Applogo />
      <ul className="nav-links">
      <li>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faPercent} className="icon" />
            Home
          </Link>
        </li>
        <li>
          <Link to={"/offers"}>
            <FontAwesomeIcon icon={faPercent} className="icon" />
            Offers
          </Link>
        </li>
        <li>
          <Link to={"/help"}>
            <FontAwesomeIcon icon={faHandHoldingHand} className="icon" />
          Help
          </Link>
        </li>
        <li>
          <Link to={"/cart"}>
            <FontAwesomeIcon icon={faShoppingCart} className="icon" />
            Cart
          </Link>
        </li>
        <button className="loginbtn" onClick={toggleLogin}>
          {loginbtn}
        </button>
      </ul>
    </nav>
  );
};
export default Header;
