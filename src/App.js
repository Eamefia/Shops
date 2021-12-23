import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import "./Checkout.css";
import Product_details from "./Product_details";

function App() {
  return (
    <Router>
      <div className="app">
         <Switch>
           <Route path="/checkout">
           <Header />
             <Checkout />
           </Route>
           <Route path="/product">
             <Header />
             <Product_details />
           </Route>
           <Route path="/">
             <Header />
             <Home />
           </Route>
         </Switch>
      </div>
    </Router>
    
  );
}

export default App;
