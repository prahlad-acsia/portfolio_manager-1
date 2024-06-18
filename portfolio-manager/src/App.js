import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarContainer from './navbar/navbar.container';
import DashboardContainer from './dashboard/dashboard.container';
import ExpensesContainer from './expenseTracker/expense.container';

function App() {
  return (
    <div className="App">
      <NavbarContainer/>
      <header className="App-header">
        
        {/* <h1>portfoli</h1> */}
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardContainer/>}>
          <Route path="dashboard" element={<DashboardContainer />} />
          <Route path="expense-tracker" element={<ExpensesContainer />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
