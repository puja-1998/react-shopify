import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/JS/Login";
import Home from "./components/JS/Home";
import Products from "./components/JS/Products";
import ProductCard from "./components/JS/ProductCard";
import Users from "./components/JS/Users";
import Contact from "./components/JS/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Login/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/Products/:id" element={<ProductCard/>} />
          <Route path="/Users" element={<Users/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
