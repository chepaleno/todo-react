import Button from "./Button/Button";
import Field from "./Field/Field";
import { TasksContext } from "./context/TasksContext";
import { useContext, useState } from "react";

const AddTaskForm = (props) => {
  const { styles } = props;
  const { addTask, newInput, setNewInput, newTaskInputRef } =
    useContext(TasksContext);
  const onSubmit = (event) => {
    event.preventDefault();
    addTask();
  };

  const [error, setError] = useState("");

  const clearTaskForm = newInput.trim();
  const checkedTaskForm = clearTaskForm.length === 0;

  const onInpit = (e) => {
    const { value } = e.target;
    const clearValue = value.trim();
    const hasOnlySpaces = clearValue.length === 0 && value.length > 0;

    setNewInput(value);
    setError(hasOnlySpaces ? "The task can not be empty" : "");
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Field
        className={styles.field}
        label="New task title"
        id="new-task"
        error={error}
        value={newInput}
        onInput={onInpit}
        inputref={newTaskInputRef}
      />
      <Button type="submit" isDisabled={checkedTaskForm}>
        Add
      </Button>
    </form>
  );
};

export default AddTaskForm;
