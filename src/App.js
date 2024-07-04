import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth/index";
import { ExpenseTracker } from "./pages/tracker/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/expense-tracker" element={<ExpenseTracker />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;