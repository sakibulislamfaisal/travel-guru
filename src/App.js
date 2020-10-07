import React from "react";
import "./App.css";
import { AuthProvider } from "./components/Login/useAuth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/Login/SignUp";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Route path="/login">
          <SignUp />
        </Route>
      </Router>
    </AuthProvider>
  );
}

export default App;
