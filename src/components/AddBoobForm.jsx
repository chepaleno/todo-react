import { useContext } from "react";
import Button from "./Button";
import Field from "./Field/Field";
import { BoobContext } from "./context/BoobContext";

const AddBoobForm = (props) => {
  const {
    // addBoob,
    // newBoobInput,
    // setNewBoobInput,
    // newAuthorInput,
    // setNewAuthorInput,
    // newYearInput,
    // setNewYearInput,
    // navodchickRef,
  } = props;

  const {
    addBoob,
    newBoobInput,
    setNewBoobInput,
    newAuthorInput,
    setNewAuthorInput,
    newYearInput,
    setNewYearInput,
    navodchickRef,
  } = useContext(BoobContext);

  const onSubmit = (event) => {
    event.preventDefault();
    addBoob();
  };
  return (
    <form action="" onSubmit={onSubmit}>
      <Field
        className="AddBoobInput"
        label="книга"
        value={newBoobInput}
        onInput={(event) => setNewBoobInput(event.target.value)}
        inputref={navodchickRef}
      ></Field>
      <Field
        className="AddBoobInput"
        label="автор"
        value={newAuthorInput}
        onInput={(event) => setNewAuthorInput(event.target.value)}
      ></Field>
      <Field
        className="AddBoobInput"
        label="год"
        value={newYearInput}
        onInput={(event) => setNewYearInput(event.target.value)}
      ></Field>
      <div className="add__boob__button">
        <Button type="submit">Добавить</Button>
      </div>
    </form>
  );
};

export default AddBoobForm;
