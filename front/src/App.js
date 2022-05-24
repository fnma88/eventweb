import "./index.css";
import "./style.css.map";
import { Route, Routes } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
import Main from "./views/Main";
import Blog from "./views/Blog";
import Elements from "./views/Elements";
import Login from "./views/Login";
import Product from "./views/Product";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Event from "./views/Event";
import AboutUs from "./views/AboutUs";
import Contact from "./views/Contact";

function App() {
  return (
    <div>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/elements" element={<Elements />} />
          {/* <Route path="/chart" element={<Cart />} /> */}
          <Route path="/event" element={<Event />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
