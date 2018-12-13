import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from '../components/Dashboard';
import HomePage from '../components/HomePage';

const AppRouter = () => (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
  
        <Route path="" exact component={HomePage} />
        <Route path="/dashboard" component={Dashboard} />
        <footer>
          <p>Hello from selfie booth</p>
        </footer>
      </div>
    </Router>
  );
  
  export default AppRouter;