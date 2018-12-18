import React from "react";
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Dashboard from '../components/Dashboard';
import HomePage from '../components/HomePage';


const AppRouter = () => (
    <Router>
        <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/dashboard" component={Dashboard} />
        </div>
    </Router>
  );
  
  export default AppRouter;