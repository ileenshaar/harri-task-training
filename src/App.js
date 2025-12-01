import "./App.css";
import ToDoList from "./components/ToDoList/ToDoList";
import TableList from "./components/TableList/TableList";
import Counter from "./components/Counter/Counter";
import CardsGrid from "./components/CardsGrid/CardsGrid";
import HorizontalScroll from "./components/HorizontalScroll/HorizontalScroll";
import Modal from "./components/Modal/Modal";
import ApiFetch from "./components/ApiFetch/ApiFetch";
import FetchUsers from "./components/FetchUsers/FetchUsers";
import FormValidation from "./components/FormValidation/FormValidation";
import ShoppingCard from "./components/ShoppingCard/ShoppingCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/FormValidation/Card";
import { CartProvider } from "./components/context";

function App() {
  return (
    <CartProvider>
      <Router>
        {/* ToDoList ALWAYS visible */}
        <ToDoList />
        <Routes>
          <Route path="/" element={<ShoppingCard />} />
          <Route path="/cart" element={<Card />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
