import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";

function CadastroCategoria() {
  const initialValues = {
    name: "",
    description: "",
    color: "",
  };

  const [categories, setCategories] = useState([]);

  const [values, setValues] = useState(initialValues);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    //chave: dinâmica
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setCategories([...categories, values]);
    setValues(initialValues);
  };

  useEffect(() => {
    const URL = "http://localhost:8080/categories";
    fetch(URL).then(async (res) => {
      const result = await res.json();
      setCategories([...result]);
      console.log(result);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>

      <form onSubmit={onSubmitHandler}>
        <FormField
          label="Nome Da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={onChangeHandler}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={onChangeHandler}
        />
        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={onChangeHandler}
        />

        <Button default>Cadastrar</Button>
      </form>

      <hr />
      {categories.length === 0 && <div>Loading ...</div>}
      {categories.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
