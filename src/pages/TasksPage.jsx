import { TasksProvider } from '../components/context/TasksContext';
import Todo from "../components/Todo/Todo";

const TasksPage = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  );
};

export default TasksPage;