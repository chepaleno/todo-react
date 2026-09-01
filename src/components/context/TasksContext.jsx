import { createContext } from "react";
import useTasks from "@/hooks/useTasks";
import useIncompleteTask from "@/hooks/useIncompleteTask";

export const TasksContext = createContext({});

export const TasksProvider = (props) => {
  const { children } = props;
  const {
    tasks,
    filteredTasks,
    OnDeleteTasksButtonClick,
    OnDeleteAllTasksButtonClick,
    OnSuccesTasksButtonActivate,
    addTask,
    newInput,
    setNewInput,
    newTaskInputRef,
    searchQuery,
    setSearchQuery,
    disappearingTaskId,
    appearingTaskId,
  } = useTasks();

  const { firstIncomleteTaskRef, firstIncompliteTaskId } = useIncompleteTask(tasks)

  return (
    <TasksContext.Provider
      value={{
        tasks,
        filteredTasks,
        firstIncomleteTaskRef,
        firstIncompliteTaskId,
        OnDeleteTasksButtonClick,
        OnDeleteAllTasksButtonClick,
        OnSuccesTasksButtonActivate,
        addTask,
        newInput,
        setNewInput,
        newTaskInputRef,
        searchQuery,
        setSearchQuery,
        disappearingTaskId,
        appearingTaskId,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
