import { TasksContext } from "@/components/context/TasksContext";
import { useContext } from "react";
import RouterLink from "@/components/RouterLink/RouterLink";
import styles from "./todo-item.module.css";

const TodoItem = (props) => {
  const { className = "", id, title, isDone } = props;

  const {
    OnDeleteTasksButtonClick,
    OnSuccesTasksButtonActivate,
    firstIncomleteTaskRef,
    firstIncompliteTaskId,
    disappearingTaskId,
    appearingTaskId,
  } = useContext(TasksContext);

  return (
    <li
      className={`${styles.item} ${className} 
      ${disappearingTaskId === id ? styles.isDisappearing : ""}
      ${appearingTaskId === id ? styles.isAppearing : ""}
      `}
      ref={id === firstIncompliteTaskId ? firstIncomleteTaskRef : null}
    >
      <input
        className={styles.checkbox}
        id={id}
        type="checkbox"
        checked={isDone}
        onChange={(event) =>
          OnSuccesTasksButtonActivate(event.target.checked, id)
        }
      />
      <label className={`${styles.label} visually-hidden`} htmlFor={id}>
        {title}
      </label>
      <RouterLink to={`/tasks/${id}`} aria-label="Task detail page">
        {title}
      </RouterLink>
      <button
        className={styles.deleteButton}
        aria-label="Delete"
        title="Delete"
        onClick={() => OnDeleteTasksButtonClick(id)}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5L5 15M5 5L15 15"
            stroke="#757575"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </li>
  );
};

export default TodoItem;
