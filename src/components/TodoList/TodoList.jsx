import { useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { TasksContext } from "../context/TasksContext";

const TodoList = (props) => {
  const { styles } = props;
  const { tasks = [], filteredTasks } = useContext(TasksContext);

  const hasTasks = tasks.length > 0;
  const isEmptyFiltredTask = filteredTasks?.length === 0;

  if (!hasTasks) {
    return <div className={styles.emptyMessage}>задач нет</div>;
  }
  if (hasTasks && isEmptyFiltredTask) {
    return <div className={styles.emptyMessage}>задачи не найдены</div>;
  }

  return (
    <ul className={styles.list}>
      {(filteredTasks ?? tasks).map((task) => (
        <TodoItem
          styles={styles}
          className={styles.item}
          key={task.id}
          id={task.id}
          title={task.title}
          isDone={task.isDone}
        />
      ))}
    </ul>
  );
};

export default TodoList;
