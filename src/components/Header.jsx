import "./css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
    <>
        <header>
            <nav>
                <FontAwesomeIcon icon="fa-solid fa-code" />
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <ul>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
            </nav>
        </header>
    </>
}

export default Header;