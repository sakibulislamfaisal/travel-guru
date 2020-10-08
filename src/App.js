import React from "react";
import "./App.css";
import { AuthProvider } from "./components/Login/useAuth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/Login/SignUp";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="/login">
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
