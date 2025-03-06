import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {

  return (
    <>
      <h1 className="mb-3">Welcome to Redux Toolkit</h1>
      <p className="my-3">You are learning about Redux Toolkit</p>
      <AddTodo />
      <Todo />
    </>
  );
}

export default App;
