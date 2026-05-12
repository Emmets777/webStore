import "./css/Header.css";
import { FaCode, FaUserCircle, FaCog } from "react-icons/fa";

function Header() {
  return (
    <header>
      <nav>
        <FaCode className="logo" />
        <ul className="nav-links">
          <li>
            <a href="#">
              Home
            </a>
          </li>
          <li>
            <a href="/about">
              About
            </a>
          </li>
          <li>
            <a href="/contact">
              Contact
            </a>
          </li>
        </ul>
        <ul className="utils">
          <li>
            <a href="/login">
              <FaUserCircle className="utils-icon" />
            </a>
          </li>
          <li>
            <a href="/settings">
              <FaCog className="utils-icon" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
