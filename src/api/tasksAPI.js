const URL = 'http://localhost:3001/tasks'

const headers = {
    'Content-Type': 'application/json',
}

const tasksAPI = {
    getAll: (setTasks) => {
        return fetch(URL)
            .then((response) => response.json())
            .then(setTasks)
    },

    getById: (taskId) => {
        return fetch(`http://localhost:3001/tasks/${taskId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Task not found');
                }
                return response.json();
            });
    },

    deleteOne: (taskID) => {
        return fetch(`${URL}/${taskID}`,
            { method: 'DELETE' }
        )
    },

    deleteAll: (tasks, setTasks) => {
        return Promise.all(tasks.map(({ id }) => fetch(`${URL}/${id}`,
            { method: 'DELETE' })
        ).then(setTasks([])))
    },

    isDone: (isDone, taskID,) => {
        {
            return fetch(`${URL}/${taskID}`,
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ isDone })
                }
            )


        }
    },

    add: (newTask) => {
        return fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask),
        })
            .then((response) => response.json())
    },
}

export default tasksAPI