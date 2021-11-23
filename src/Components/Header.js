import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Header.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";

function Header() {
  return (
    <header className={Styles.header}>
      <nav className={`${Styles.nav} container`}>
        <Link to="/" className={Styles.logo} aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link to="/login" className={Styles.login}>
          Login / Criar
        </Link>
      </nav>
    </header>
  );
}

export default Header;
