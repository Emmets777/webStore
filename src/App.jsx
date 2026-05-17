import "./App.css";
import { useState } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Login from "./components/Login";
import "./Responsive.css"

function App() {
  const [page, setPage] = useState("Home");

  const pages = {
    Home: <Main />,
    Login: <Login onNavigate={setPage} />,
  };
  return (
    <>
      <Header setPage={setPage} currentPage={page} />
      {pages[page] ?? <Main />}
      <Footer />
    </>
  );
}

export default App;
