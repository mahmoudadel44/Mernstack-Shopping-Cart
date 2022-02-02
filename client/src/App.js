import { BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
function App() {
  return (
    <Router>
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          <Products />
        </main>
      </div>
    </Router>
  );
}

export default App;
