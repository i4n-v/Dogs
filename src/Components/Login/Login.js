import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import { UserContext } from "../../UserContext";
import Styles from "./Login.module.css";

function Login() {
  const { login } = useContext(UserContext);

  if(login) return <Navigate to="/conta" />
  return (
    <section className={Styles.login}>
        <div className={Styles.forms}>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="criar" element={<LoginCreate />} />
            <Route path="perdeu" element={<LoginPasswordLost />} />
            <Route path="resetar" element={<LoginPasswordReset />} />
          </Routes>
        </div>
    </section>
  );
}

export default Login;
