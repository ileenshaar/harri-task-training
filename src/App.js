import "./App.css";
import ToDoList from "./components/ToDoList/ToDoList";
import TableList from "./components/TableList/TableList";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
      <ToDoList />
      <TableList />
      <Counter />
    </div>
  );
}

export default App;
