import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPercent,
  faHandHoldingHand,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import Applogo from "./Applogo";
import { Link } from "react-router-dom";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [loginbtn, setloginbtn] = useState("login");
  const toggleLogin = () => {
    setloginbtn((prevLoginBtn) =>
      prevLoginBtn === "login" ? "logout" : "login"
    );
  };

  const online=useOnlineStatus();
  return (
    <nav className="h-24 flex justify-between items-center px-6 shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
      <Applogo />
      <ul className="flex gap-4 items-center text-xl">
        <li>
          Online status:{online? "✔":"❌"}
        </li>
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
