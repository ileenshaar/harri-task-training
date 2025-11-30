import "./App.css";
import ToDoList from "./components/ToDoList/ToDoList";
import TableList from "./components/TableList/TableList";
import Counter from "./components/Counter/Counter";
import CardsGrid from "./components/CardsGrid/CardsGrid";
import HorizontalScroll from "./components/HorizontalScroll/HorizontalScroll";
import Modal from "./components/Modal/Modal";
import ApiFetch from "./components/ApiFetch/ApiFetch";
import FetchUsers from "./components/FetchUsers/FetchUsers";

function App() {
  return (
    <div className="App">
      <ToDoList />
      <TableList />
      <Counter />
      <CardsGrid />
      <HorizontalScroll />
      <Modal />
      <FetchUsers />
    </div>
  );
}

export default App;
