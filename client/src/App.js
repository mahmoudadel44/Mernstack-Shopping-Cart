import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import CartScreen from "./pages/CartScreen";
function App() {
  return (
    <Router>
      <header>
          <Navbar />
        </header>
      {/* <div>
        <Routes>
          <Route exact path="/" element={Products} />
          <Route exact path="/Cart" element={CartScreen} />
        </Routes>
      </div> */}
      <Products/>
    </Router>
  );
}

export default App;
