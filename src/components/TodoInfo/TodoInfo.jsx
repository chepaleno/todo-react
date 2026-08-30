import { memo, use, useContext, useMemo } from "react";
import { TasksContext } from "../context/TasksContext";

const TodoInfo = (props) => {
  const { styles } = props;
  const { tasks, OnDeleteAllTasksButtonClick } = useContext(TasksContext);

  const Total = tasks.length;
  const isHasTasks = Total > 0;
  const done = useMemo(() => {
    return tasks.filter(({ isDone }) => isDone).length;
  }, [tasks]);
  return (
    <div className={styles.info}>
      <div className="todo__total-tasks">
        Из {Total} сделано {done}
      </div>
      {isHasTasks && (
        <button
          className={styles.deleteAllButton}
          type="button"
          onClick={OnDeleteAllTasksButtonClick}
        >
          Delete all
        </button>
      )}
    </div>
  );
};

export default memo(TodoInfo);
// export default TodoInfo;
