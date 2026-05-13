import "./css/Footer.css";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaHome } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <div className="tks">
          <p>
            i would thank you for your prefference in our store, we hope you
            found what you are searching for, if you had any suggestion for our
            team to improve your experience or suggestion for new products, fell
            welcome to send a email to our team! come back anytime!
          </p>
        </div>
        <section id="links">
          <p>
            <a href="#">
              <MdEmail />
              Contact us
            </a>
          </p>
          <p>
            <a href="https://github.com/Emmets777">
              <FaGithub />
              Created by
            </a>
          </p>
          <p>
            <a href="./home">
              <FaHome />
              Home
            </a>
          </p>
        </section>
        <p id="rights">
          All Rights Reserved © 2024 - 2026
          <a href="www.linkedin.com/in/fabio-luiz-269501225/">Fabio Luiz</a>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
