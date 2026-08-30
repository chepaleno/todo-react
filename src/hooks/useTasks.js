import { useState, useEffect, useRef, useCallback } from "react";
import tasksAPI from "../api/tasksAPI";

const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    const [newInput, setNewInput] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const newTaskInputRef = useRef(null);

    const OnDeleteAllTasksButtonClick = useCallback(() => {
        const isConfirmed = confirm(
            "ты уверен что хочешь удалить все свои особо важные задания???",
        );

        if (isConfirmed) {
            tasksAPI.deleteAll(tasks, setTasks)
        }
    }, [tasks]);

    const OnDeleteTasksButtonClick = (taskID) => {
        tasksAPI.deleteOne(taskID)
            .then(() => {
                setTasks(tasks.filter((task) => task.id !== taskID))
            })
    };

    const OnSuccesTasksButtonActivate = (isDone, taskID) => {
        {
            tasksAPI.isDone(isDone, taskID,)
                .then(() => {
                    setTasks(
                        tasks.map((task) => {
                            if (task.id === taskID) {
                                return { ...task, isDone };
                            }
                            return task;
                        }),
                    );
                })

        }
    };

    const addTask = (checkedTaskForm) => {
        if (checkedTaskForm) {

        } else {
            const newTask = {
                title: newInput,
                isDone: false,
            };
            tasksAPI.add(newTask)
                .then((addedTask) => {
                    setTasks([...tasks, addedTask]);
                    setNewInput("");
                    setSearchQuery("");
                    newTaskInputRef.current.focus();
                })
        }
    };

    useEffect(() => {
        newTaskInputRef.current.focus();

        tasksAPI.getAll(setTasks)
    }, []);

    const clearSearchQuery = searchQuery.trim().toLocaleLowerCase();
    const filteredTasks =
        clearSearchQuery.length > 0
            ? tasks.filter(({ title }) =>
                title.toLocaleLowerCase().includes(clearSearchQuery),
            )
            : null;

    return {
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
        setSearchQuery
    }
}

export default useTasks