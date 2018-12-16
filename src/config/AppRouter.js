import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from '../components/Dashboard';
import HomePage from '../components/HomePage';
import {Header} from '../components/common/Header'
import {Footer} from '../components/common/footer'

const AppRouter = () => (
    <Router>
      <div>
        <Header/>

  
        <Route path="" exact component={HomePage} />
        <Route path="/dashboard" component={Dashboard} />
        <Footer/>
         </div>
    </Router>
  );
  
  export default AppRouter;