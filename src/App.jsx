import Router from "./Router";
import TaskPage from "./pages/TaskPage";
import TasksPage from "./pages/TasksPage";

// // import Todo from "./components/Todo";
// import BookShelf from "./components/BookShelf";
// // import { TasksProvider } from "./components/context/TasksContext";
// import { BoobProvider } from "./components/context/BoobContext";

const App = () => {
const routes =  {
  '/': TasksPage,
  '/tasks/:id': TaskPage,
  '*': () => <div>404 Page not found</div>

}

  return (
    <Router routes={routes}/>


    // <BoobProvider>
    // <BookShelf/>
    // </BoobProvider>
  );
};

export default App;
