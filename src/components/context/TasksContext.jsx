import { createContext, useMemo } from "react";
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

  const { firstIncomleteTaskRef, firstIncompliteTaskId } =
    useIncompleteTask(tasks);

  const value = useMemo(
    () => ({
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
      firstIncomleteTaskRef,
      firstIncompliteTaskId,
    }),
    [
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
      firstIncomleteTaskRef,
      firstIncompliteTaskId,
    ],
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
