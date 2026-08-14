import Button from "./Button";
import Field from "./Field";

const AddBoobForm = (props) => {
  const {
    addBoob,
    newBoobInput,
    setNewBoobInput,
    newAuthorInput,
    setNewAuthorInput,
    newYearInput,
    setNewYearInput,
  } = props;
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
      <div className="add__boob__button"><Button  type="submit">Добавить</Button></div>
    </form>
  );
};

export default AddBoobForm;
