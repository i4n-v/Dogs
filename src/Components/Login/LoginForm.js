import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import Error from "../../Components/Helper/Error";
import styles from "./LoginForm.module.css";
import stylesBtn from "../Forms/Button.module.css";
import Head from "../Helper/Head";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/user";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state);
  const loading = token.loading || user.loading;
  const error = token.error || user.error;

  const username = useForm();
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      dispatch(
        userLogin({ username: username.value, password: password.value })
      );
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" description="Login do usuário." />
      <h1 className="title">Login</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && "Dados incorretos."} />
      </form>
      <Link to="/login/perdeu" className={styles.perdeu}>
        Perdeu a Senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subTitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link
          to="/login/criar"
          className={styles.buttonCriar + " " + stylesBtn.button}
        >
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
