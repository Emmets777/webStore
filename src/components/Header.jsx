import "./css/Header.css";
import { FaCode, FaUserCircle, FaCog } from "react-icons/fa";
function Header({ setPage }) {
  return (
    <header>
      <nav>
        <FaCode className="logo" />
        <ul className="nav-links">
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPage("Home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPage("About");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPage("Contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
        <ul className="utils">
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPage("Login");
              }}
            >
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
