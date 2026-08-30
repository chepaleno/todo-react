import Button from "./Button";
import Field from "./Field/Field";

const SmartForm = (props) => {
  const { smartSearch, smartInputButton,blya } = props;
  const onClick = (event) => {
    event.preventDefault();
    smartInputButton();
  };
  return (
    <form className="todo__form">
        <input
        className="todo-item__checkbox"
        type="checkbox"
        onChange={(event) => blya(event.target.checked)}
      />
      <Field
        className="SmartForm"
        label="SmartForm"
        id="SmartForm"
        onInput={(event) => smartSearch(event.target.value)}
      />
      <div onClick={onClick}>
        <Button type="submit" >Отправить</Button>
      </div>
    </form>
  );
};

export default SmartForm;
