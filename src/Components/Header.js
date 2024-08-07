import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Header.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import { useSelector } from "react-redux";

function Header() {
  const { data } = useSelector((state) => state.user);

  return (
    <header className={Styles.header}>
      <nav className={`${Styles.nav} container`}>
        <Link to="/" className={Styles.logo} aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link to="/conta" className={Styles.login}>
            {data.nome}
          </Link>
        ) : (
          <Link to="/login" className={Styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
