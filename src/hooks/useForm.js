import { useState } from "react";

export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    //chave: dinâmica
    setValues({
      ...values,
      [name]: value,
    });
  };

  const clearForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    onChangeHandler,
    clearForm,
  };
}
