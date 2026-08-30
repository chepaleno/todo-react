import { useRef } from 'react'

const useIncompleteTask = (tasks) => {
    const firstIncomleteTaskRef = useRef(null);
    const firstIncompliteTaskId = tasks.find(({ isDone }) => !isDone)?.id;

    return {
        firstIncomleteTaskRef,
        firstIncompliteTaskId
    }
}

export default useIncompleteTask