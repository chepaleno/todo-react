import { useState, useEffect, useRef, useCallback, useReducer } from "react";
import tasksAPI from "@/api";

const tasksReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ALL': {
            return Array.isArray(action.tasks) ? action.tasks : state
        }
        case 'ADD': {
            return [...state, action.task]
        }
        
        case 'TOGGLE_COMPLETE': {
            const { id, isDone } = action.payload;   // берём из payload
            return state.map((task) =>
                task.id === id ? { ...task, isDone } : task
            );
        }

        case 'DELETE': {
            return state.filter((task) => task.id !== action.id)
        }
        case 'DELETE_ALL': {
            return []
        }
        default: {
            return state
        }
    }
}

const useTasks = () => {
    const [tasks, dispatch] = useReducer(tasksReducer, []);

    const [newInput, setNewInput] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [disappearingTaskId, setDisappearingTaskId] = useState(null);
    const [appearingTaskId, setAppearingTaskId] = useState(null);

    const newTaskInputRef = useRef(null);

    const OnDeleteAllTasksButtonClick = useCallback(() => {
        const isConfirmed = confirm(
            "ты уверен что хочешь удалить все свои особо важные задания???",
        );

        if (isConfirmed) {
            tasksAPI.deleteAll(tasks)
                .then(() => dispatch({ type: 'DELETE_ALL' }))
        }
    }, [tasks]);

    const OnDeleteTasksButtonClick = (taskID) => {
        tasksAPI.deleteOne(taskID)
            .then(() => {
                setDisappearingTaskId(taskID)
                setTimeout(() => {
                    dispatch({ type: 'DELETE', id: taskID });
                    setDisappearingTaskId(null)
                }, 0)
            })
    };

    const OnSuccesTasksButtonActivate = (isDone, taskID) => {
        tasksAPI.toggleComplete(taskID, isDone)
            .then(() => {
                dispatch({ type: 'TOGGLE_COMPLETE', payload: { id: taskID, isDone } });
            })
            .catch(console.error);
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
                    dispatch({ type: 'ADD', task: addedTask })
                    setNewInput("");
                    setSearchQuery("");
                    newTaskInputRef.current.focus();
                    setAppearingTaskId(addedTask.id)
                    setTimeout(() => {
                        setAppearingTaskId(null)
                    }, 400)
                })
        }
    };


    useEffect(() => {
        newTaskInputRef.current.focus();

        tasksAPI.getAll()
            .then((serverTasks) => dispatch({ type: 'SET_ALL', tasks: serverTasks }))
    }, []);

    const clearSearchQuery = searchQuery.trim().toLocaleLowerCase();
    const filteredTasks =
        clearSearchQuery.length > 0
            ? tasks.filter(({ title }) =>
                title.toLocaleLowerCase().includes(clearSearchQuery),
            )
            : tasks;

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
        setSearchQuery,
        disappearingTaskId,
        appearingTaskId,
    }
}

export default useTasks