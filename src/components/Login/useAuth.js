import * as firebase from "firebase/app";
import "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import React from "react";
import firebaseConfig from "../../firebase.config";

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();
export const AuthProvider = (props) => {
  const auth = Auth();
  return (
    <AuthContext.Provider value={auth}> {props.children} </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);

export const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user.email ? (
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

const Auth = () => {
  const [user, setUser] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const currUser = user;
        setUser(currUser);
      }
    });
  }, []);

  const signIn = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setUser(res.user);
        window.history.back();
        setSuccess(true);
      })
      .catch((err) => setUser({ error: err.message }));
  };

  const signUp = (email, password, fname, lname) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        firebase
          .auth()
          .currentUser.updateProfile({
            displayName: `${fname} ${lname}`,
          })
          .then(() => {
            setUser(res.user);
            window.history.back();
            setSuccess(true);
            console.log(res.user);
          });
      })
      .catch((err) => setUser({ error: err.message }));
  };

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then((res) => setUser(null));
  };
  //google sign In
  const googleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        setUser(res.user);
        window.history.back();
        setSuccess(true);
      })
      .catch((err) => setUser({ err: err.message }));
  };

  //google signOut user
  const googleSignOut = () => {
    return firebase
      .auth()
      .signOut()
      .then((res) => setUser(null));
  };

  //facebook sign in
  const facebookSignIn = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then((res) => {
        setUser(res.user);
        window.history.back();
        setSuccess(true);
      })
      .catch((err) => setUser({ error: err.message }));
  };

  //facebook logout
  const facebookLogout = () => {
    return firebase
      .auth()
      .signOut()
      .then((res) => setUser(null));
  };
  return {
    success,
    user,
    signIn,
    signUp,
    signOut,
    googleSignIn,
    facebookSignIn,
    googleSignOut,
    facebookLogout,
  };
};
export default Auth;
