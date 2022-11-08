import { useState } from "react";

const AddMovie = (props) => {
  const defaultFormValues = {
    title: "",
    opening: "",
    release: "",
  };
  const [formValues, setFormValues] = useState(defaultFormValues);
  const formValueChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => {
      return {
        ...prevFormValues,
        [name]: value,
      };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit(formValues);
    setFormValues(defaultFormValues);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="title-input">Title</label>
      <input
        type="text"
        name="title"
        id="title-input"
        value={formValues.title}
        onChange={formValueChangeHandler}
      />
      <label htmlFor="opening-input">Opening Text</label>
      <input
        type="textarea"
        name="opening"
        id="opening-input"
        value={formValues.opening}
        onChange={formValueChangeHandler}
      />
      <label htmlFor="release-input">Release Date</label>
      <input
        type="text"
        name="release"
        id="release-input"
        value={formValues.release}
        onChange={formValueChangeHandler}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
