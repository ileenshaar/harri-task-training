import "./App.css";
import ToDoList from "./components/ToDoList/ToDoList";
import TableList from "./components/TableList/TableList";
import Counter from "./components/Counter/Counter";
import CardsGrid from "./components/CardsGrid/CardsGrid";
import HorizontalScroll from "./components/HorizontalScroll/HorizontalScroll";

function App() {
  return (
    <div className="App">
      <ToDoList />
      <TableList />
      <Counter />
      <CardsGrid />
      <HorizontalScroll />
    </div>
  );
}

export default App;
