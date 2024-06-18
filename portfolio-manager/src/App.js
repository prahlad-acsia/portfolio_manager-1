import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import NavbarContainer from './navbar/navbar.container';
import DashboardContainer from './dashboard/dashboard.container';
import ExpensesContainer from './expenseTracker/expense.container';

function App() {
  return (
    <div className="App">
      <NavbarContainer/>
      <header className="App-header">
      <Routes>
          <Route path="/" element={<DashboardContainer/>}/>
          <Route path="Expense" element={<ExpensesContainer />} />
          <Route path="Dashboard" element={<DashboardContainer />} />
      </Routes>

      </header>
    </div>
  );
}

export default App;
