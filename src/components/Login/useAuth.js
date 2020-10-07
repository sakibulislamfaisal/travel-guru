import * as firebase from "firebase/app";
import "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import firebaseConfig from "../../firebase.config";
import { Redirect, Route } from "react-router-dom";

firebase.initializeApp(firebaseConfig);

//create context
const AuthContext = createContext();

//Context Provider set
export const AuthProvider = (props) => {
  const auth = Auth();
  return (
    <AuthContext.Provider value={auth}> {props.children} </AuthContext.Provider>
  );
};
//then use context provider
export const useAuth = () => useContext(AuthContext);

//Private Route
export const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

//work with Auth functionality
const Auth = () => {
  const [user, setUser] = useState(null);

  //current User find
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const currUser = user;
        setUser(currUser);
      }
    });
  }, []);

  //sign in method using firebase
  const signIn = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setUser(res.user);
      })
      .catch((err) => setUser({ err: err.message }));
  };

  //sign out method using firebase
  const signUp = (name, email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        firebase.auth().currentUser.updateProfile({
          displayName: name,
        });
      })
      .then((res) => {
        setUser(res.user);
      })
      .catch((err) => setUser({ err: err.message }));
  };

  //sign Out method using firebase
  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then((res) => {
        setUser(null);
      })
      .catch((err) => setUser({ err: err.message }));
  };
};
