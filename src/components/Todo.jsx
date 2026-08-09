import { useState, useEffect } from "react";
import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";

const Todo = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return [
      { id: "task-1", title: "регнуть дотку", isDone: false },
      { id: "task-2", title: "регнуть дотку 2", isDone: true },
    ];
  });

  const [newInput, setNewInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const OnDeleteAllTasksButtonClick = () => {
    const isConfirmed = confirm(
      "ты уверен что хочешь удалить все свои особо важные задания???",
    );

    if (isConfirmed) {
      setTasks([]);
    }
  };

  const OnDeleteTasksButtonClick = (taskID) => {
    setTasks(tasks.filter((task) => task.id !== taskID));
  };

  const OnSuccesTasksButtonActivate = (isDone, taskID) => {
    {
      setTasks(
        tasks.map((task) => {
          if (task.id === taskID) {
            return { ...task, isDone };
          }
          return task;
        }),
      );
    }
  };

  const addTask = () => {
    const newTask = {
      id: Date.now().toString(),
      title: newInput,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
    setNewInput("");
    setSearchQuery("")
  };

  const smartSearch = (query) => {
    console.log(`он вписал:${query}`);
  };

  const smartInputButton = () => {
    console.log("Форма отправлена");
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const clearSearchQuery = searchQuery.trim().toLocaleLowerCase()
  const filteredTasks = clearSearchQuery.length > 0
  ? tasks.filter(({title}) => title.toLocaleLowerCase().includes(clearSearchQuery)) 
  : null



  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
        addTask={addTask}
        newInput={newInput}
        setNewInput={setNewInput}
      />
      <SearchTaskForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <TodoInfo
        Total={tasks.length}
        Done={tasks.filter((task) => task.isDone === true).length}
        OnDeleteAllTasksButtonClick={OnDeleteAllTasksButtonClick}
      />
      <TodoList
        tasks={tasks}
        filteredTasks={filteredTasks}
        OnDeleteTasksButtonClick={OnDeleteTasksButtonClick}
        OnSuccesTasksButtonActivate={OnSuccesTasksButtonActivate}
      />
    </div>
  );
};

export default Todo;
