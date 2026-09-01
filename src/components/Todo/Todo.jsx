import { useContext } from "react";
import AddTaskForm from "@/components/AddTaskForm";
import SearchTaskForm from "@/components/SearchTaskForm/SearchTaskForm";
import TodoInfo from "@/components/TodoInfo/TodoInfo";
import TodoList from "@/components/TodoList/TodoList";
import Button from "@/components/Button/Button";
import { TasksContext } from "@/components/context/TasksContext";
import styles from './todo.module.css'

const Todo = () => {
  const { firstIncomleteTaskRef } = useContext(TasksContext);
  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>To Do List</h1>
      <AddTaskForm styles={styles} />
      <SearchTaskForm styles={styles} />
      <Button
        onClick={() =>
          firstIncomleteTaskRef.current?.scrollIntoView({
            behaivor: "smooth",
          })
        }
      >
        Показать первую незавершенную задачу
      </Button>
      <TodoInfo styles={styles} />
      <TodoList styles={styles} />
    </div>
  );
};

export default Todo;
