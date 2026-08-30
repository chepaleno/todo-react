import { useState, useEffect, useRef, useCallback, useContext } from "react";
import AddTaskForm from "../AddTaskForm";
import SearchTaskForm from "../SearchTaskForm/SearchTaskForm";
import TodoInfo from "../TodoInfo/TodoInfo";
import TodoList from "../TodoList/TodoList";
import Button from "../Button/Button";
import { TasksContext } from "../context/TasksContext";
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
