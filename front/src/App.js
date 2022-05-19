import "./App.css";
import { Route, Routes } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
import Main from "./views/Main";
import Blog from "./views/Blog";
import Elements from "./views/Elements";
import Login from "./views/Login";
import Product from "./views/Product";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Event from "./views/Event";
function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/elements" element={<Elements />} />
          {/* <Route path="/chart" element={<Cart />} /> */}
          <Route path="/event" element={<Event />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
