import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Offers from "./components/Offers";
import ContactUs from "./components/ContactUs";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Desert from "./components/Desert";
import Chocolates from "./components/Chocaltes";
import Sandwich from "./components/Sandwich";
import Drinks from "./components/Drinks";
import PizzaMenu from "./components/PizzaMenu";
import Login from "./components/Login";
import Cart from "./components/Cart";
import AboutUs from "./components/AboutUs";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    return setCount(count + 1);
  };
  return (
    <>
      <BrowserRouter>
        <Header count={count} />
        <Routes>
          <Route path="/" element={<Home handleAdd={handleAdd} />} />
          <Route path="menu/" element={<Menu />} />
          <Route path="/pizza" element={<PizzaMenu handleAdd={handleAdd} />} />
          <Route
            path="/sandwich"
            element={<Sandwich handleAdd={handleAdd} />}
          />
          <Route
            path="/chocolates"
            element={<Chocolates handleAdd={handleAdd} />}
          />
          <Route path="/drinks" element={<Drinks handleAdd={handleAdd} />} />
          <Route path="/dessert" element={<Desert handleAdd={handleAdd} />} />
          <Route path="offers/" element={<Offers />} />
          <Route path="contactus/" element={<ContactUs />} />
          <Route path="signup/" element={<SignUp />} />
          <Route path="login/" element={<Login />} />
          <Route path="cart/" element={<Cart />} />
          <Route path="about/" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
