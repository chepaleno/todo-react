const useTasksLocalStorage = () => {
    const savedTasks = localStorage.getItem("tasks");

    const saveTasks = (tasks) => { localStorage.setItem("tasks", JSON.stringify(tasks)) };

    return {
        savedTasks,
        saveTasks,
    }
}

export default useTasksLocalStorage