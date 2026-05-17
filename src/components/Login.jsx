import { useState, useEffect } from "react";
import {
  FaGooglePlusG,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaUser,
  FaEnvelope,
  FaLock,
  FaUnlock,
} from "react-icons/fa";
import "./css/Login.css";

// Importando sua lógica (ajustadas para receber parâmetros)
import { initUsers } from "./logics/authLogic";

const Login = ({ onNavigate }) => {
  // Estados para UI
  const [isActive, setIsActive] = useState(false);
  const [showPassSignIn, setShowPassSignIn] = useState(false);
  const [showPassSignUp, setShowPassSignUp] = useState(false);

  // Estados para os Inputs (Substitui o document.getElementById().value)
  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    initUsers(); // Inicializa o fakeData no localStorage
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.email === signInData.email && u.password === signInData.password,
    );

    if (!user) {
      alert("Usuário ou senha inválidos");
      return;
    }
    localStorage.setItem("CurrentUser", JSON.stringify(user));
    alert("Login realizado");
    onNavigate("home");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.find((u) => u.email === signUpData.email)) {
      alert("Email já cadastrado");
      return;
    }

    const newUser = {
      id: users.length + 1,
      ...signUpData,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Cadastro realizado");
  };

  return (
    <div className="login-wrapper">
      <div className={`container ${isActive ? "active" : ""}`} id="container">
        {/* FORMULÁRIO DE CADASTRO */}
        <div className="form-container sign-up">
          <form onSubmit={handleSignUp}>
            <h1>Crie sua conta</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <FaGooglePlusG className="icons" />
              </a>
              <a href="#" className="icon">
                <FaFacebookF className="icons" />
              </a>
              <a href="#" className="icon">
                <FaGithub className="icons" />
              </a>
              <a href="#" className="icon">
                <FaLinkedinIn className="icons" />
              </a>
            </div>
            <span>ou use seu email para se registrar</span>

            <div className="input-flex">
              <input
                type="text"
                placeholder="Nome"
                onChange={(e) =>
                  setSignUpData({ ...signUpData, name: e.target.value })
                }
              />
              <FaUser />
            </div>

            <div className="input-flex">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  setSignUpData({ ...signUpData, email: e.target.value })
                }
              />
              <FaEnvelope />
            </div>

            <div className="input-flex">
              <input
                type={showPassSignUp ? "text" : "password"}
                placeholder="Senha"
                onChange={(e) =>
                  setSignUpData({ ...signUpData, password: e.target.value })
                }
              />
              {showPassSignUp ? (
                <FaUnlock
                  onClick={() => setShowPassSignUp(false)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <FaLock
                  onClick={() => setShowPassSignUp(true)}
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>

            <button type="submit">Cadastrar</button>
          </form>
        </div>

        {/* FORMULÁRIO DE LOGIN */}
        <div className="form-container sign-in">
          <form onSubmit={handleSignIn}>
            <h1>Entre na sua conta</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <FaGooglePlusG className="icons" />
              </a>
              <a href="#" className="icon">
                <FaFacebookF className="icons" />
              </a>
              <a href="#" className="icon">
                <FaGithub className="icons" />
              </a>
              <a href="#" className="icon">
                <FaLinkedinIn className="icons" />
              </a>
            </div>
            <span>ou use suas informações para entrar</span>

            <div className="input-flex">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  setSignInData({ ...signInData, email: e.target.value })
                }
              />
              <FaEnvelope />
            </div>

            <div className="input-flex">
              <input
                type={showPassSignIn ? "text" : "password"}
                placeholder="Senha"
                onChange={(e) =>
                  setSignInData({ ...signInData, password: e.target.value })
                }
              />
              {showPassSignIn ? (
                <FaUnlock
                  onClick={() => setShowPassSignIn(false)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <FaLock
                  onClick={() => setShowPassSignIn(true)}
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>

            <button type="submit">Entrar</button>
            <span id="span-login"></span>
          </form>
        </div>

        {/* PAINÉIS DE TRANSIÇÃO */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Bem vindo de volta!</h1>
              <p>Entre com suas informações para utilizar tudo do site</p>
              <button className="hidden" onClick={() => setIsActive(false)}>
                Logar
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Olá, Amigo!</h1>
              <p>Coloque sua informações para utilizar tudo do site</p>
              <button className="hidden" onClick={() => setIsActive(true)}>
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
