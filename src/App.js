import "./App.css";
import Price from "./components/Price/Price";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Table from "./components/Table/Table";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path="/price" element={<Price />} />
            <Route path="/table" element={<Table />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
