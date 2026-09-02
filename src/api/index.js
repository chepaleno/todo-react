import localAPI from "./local";
import serverAPI from "./server";

const isLocal = import.meta.env.VITE_STATIC_BACKEND === 'true'
console.log('VITE_STATIC_BACKEND:', import.meta.env.VITE_STATIC_BACKEND)
console.log('isLocal:', isLocal)

const tasksAPI = isLocal ? localAPI : serverAPI

export default tasksAPI