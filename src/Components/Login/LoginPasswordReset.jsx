import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Error from "../Helper/Error";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../Api";
import Head from "../Helper/Head";

const LoginPasswordReset = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("lost", "reset"),
      });
      await request(url, options);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Resete a senha" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Sending...</Button>
          ) : (
            <Button>Send email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordReset;
