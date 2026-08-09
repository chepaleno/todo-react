import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const {
    tasks = [],
    OnDeleteTasksButtonClick,
    OnSuccesTasksButtonActivate,
    filteredTasks,
  } = props;

  const hasTasks = tasks.length > 0;
  const isEmptyFiltredTask = filteredTasks?.length === 0;

  if (!hasTasks) {
    return <div className="todo__empty-message">задач нет</div>;
  }
  if (hasTasks && isEmptyFiltredTask) {
    return <div className="todo__empty-message">задачи не найдены</div>;
  }

  return (
    <ul className="todo__list">
      {(filteredTasks ?? tasks).map((task) => (
        <TodoItem
          className="todo__item"
          key={task.id}
          id={task.id}
          title={task.title}
          isDone={task.isDone}
          OnDeleteTasksButtonClick={OnDeleteTasksButtonClick}
          OnSuccesTasksButtonActivate={OnSuccesTasksButtonActivate}
        />
      ))}
    </ul>
  );
};

export default TodoList;
