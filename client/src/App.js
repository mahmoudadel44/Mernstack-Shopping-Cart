import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import CartScreen from "./pages/CartScreen";
function App() {
  return (
    <>
      <Router>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Products />} />
          {/* <Route path="/Cart" element={<CartScreen />} /> */}
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
