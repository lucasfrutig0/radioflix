import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import useForm from "../../../hooks/useForm";
import Button from "../../../components/Button";
import videoRepository from "../../../repositories/videos";
import categoryRepository from "../../../repositories/categories";

function CadastroVideo() {
  const history = useHistory();

  const [categories, setCategories] = useState([]);

  const categoryTitles = categories.map(({ name }) => name);

  const { onChangeHandler, values } = useForm({
    title: "",
    url: "",
    category: "",
  });

  useEffect(() => {
    categoryRepository.getAll().then((categories) => {
      setCategories(categories);
    });
  }, []);

  console.log(categoryTitles);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const categoryId = categories.find((category) => {
      return category.name === values.category;
    });
    videoRepository
      .create({
        title: values.title,
        url: values.url,
        categoryId: categoryId.id,
      })
      .then(() => {
        history.push("/");
      });
  };

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={onSubmitHandler}>
        <FormField
          label="Título do Vídeo"
          type="text"
          name="title"
          value={values.title}
          onChange={onChangeHandler}
        />

        <FormField
          label="URL do Vídeo"
          type="text"
          name="url"
          value={values.url}
          onChange={onChangeHandler}
        />

        <FormField
          label="Categoria do Vídeo"
          type="text"
          name="category"
          value={values.category}
          onChange={onChangeHandler}
          suggestions={categoryTitles}
        />

        <Button default type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
