import React from "react";
import "./App.css";
import { AuthProvider } from "./components/Login/useAuth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/Login/SignUp";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import Booking from "./components/Booking/Booking";
import HotelInfo from "./components/HotelInfo/HotelInfo";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/booking/:id">
            <Header />
            <Booking></Booking>
          </Route>
          <Route path="/destination">
            <Header />
            <HotelInfo />
          </Route>
          <Route path="/login">
            <Header />
            <SignUp />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
