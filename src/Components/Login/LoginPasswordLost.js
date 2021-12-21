import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFecth from "../../Hooks/useFetch";
import { PASSSWORD_LOST } from "../../Api";
import Error from "../Helper/Error";
import Head from "../Helper/Head";

function LoginPasswordLost() {
  const login = useForm();
  const { data, error, loading, request } = useFecth();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const urlReset = window.location.href.replace("perdeu", "resetar");
      const { url, options } = PASSSWORD_LOST({
        login: login.value,
        url: urlReset,
      });
      request(url, options);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Perdeu a senha" description="Recuperar senha do usuário"/>
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
}

export default LoginPasswordLost;
