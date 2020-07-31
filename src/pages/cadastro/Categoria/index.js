import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import useForm from "../../../hooks/useForm";

function CadastroCategoria() {
  const initialValues = {
    name: "",
    description: "",
    color: "",
  };

  const { onChangeHandler, clearForm, values } = useForm(initialValues);

  const [categories, setCategories] = useState([]);

  const createCategory = (categoryData) => {
    const isLocalhost = window.location.href.includes("localhost");
    const URL_POST = isLocalhost
      ? "http://localhost:8080/categories"
      : "https://radioflix-backend.herokuapp.com/categories";

    fetch(URL_POST, {
      method: "POST",
      body: JSON.stringify(categoryData),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }).then(async (res) => {
      const result = await res.json();
      setCategories([...categories, result]);
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const objData = {
      id: Math.floor(Math.random() * 100),
      ...values,
    };

    createCategory(objData);
    clearForm();
  };

  useEffect(() => {
    /* const URL = "https://radioflix-backend.herokuapp.com/categories"; */
    const isLocalhost = window.location.href.includes("localhost");
    const URL = isLocalhost
      ? "http://localhost:8080/categories"
      : "https://radioflix-backend.herokuapp.com/categories";
    fetch(URL).then(async (res) => {
      const result = await res.json();
      setCategories([...result]);
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
