import { BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <Router>
      <div>
        <header>
          <Navbar />
        </header>
      </div>
    </Router>
  );
}

export default App;
