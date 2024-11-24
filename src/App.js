import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import CheckoutProduct from "./CheckoutProduct";
import Login from "./Login";
import AccountCreationPage from './AccountCreationPage';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Orders from "./Orders";


function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("[USER] ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/accountcreate">
  <AccountCreationPage />
</Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/checkoutproduct">
            <Header />
            <CheckoutProduct />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/about">
            {/* Render another component */}
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
