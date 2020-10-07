import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { useAuth } from "./useAuth";

const SignUp = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useState(false);
  const auth = useAuth();
  const onSubmit = (data, e) => {
    e.preventDefault();
    if (loggedInUser === true) {
      if (data.email && data.password) {
        auth.signIn(data.email, data.password);
      }
    } else {
      if (data.name && data.email && data.password && data.confirm_password) {
        auth.signUp(data.email, data.confirm_password, data.name);
      }
    }
  };

  return (
    <div className="signup ">
      <div className="container">
        {loggedInUser ? (
          <form onSubmit={handleSubmit(onSubmit)} className="total-form">
            <h4 className="text-center">Login Panel</h4>
            {auth.user != null && (
              <p className="text-danger error">{auth.user.error}</p>
            )}
            {auth.success && (
              <p
                style={{
                  color: "green",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                User is LoggedIn Successfully
              </p>
            )}
            <div className="form-group">
              <input
                name="email"
                ref={register({
                  required: "Enter your e-mail",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Enter a valid e-mail address",
                  },
                })}
                className="form-control"
                placeholder="Username or  Email"
              />
              {errors.email && (
                <span className="error">{errors.email.message}</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                ref={register({
                  minLength: {
                    value: 8,
                    message: "password must have min length of 8",
                  },
                  required: {
                    value: true,
                    message: "password is required",
                  },
                  maxLength: {
                    value: 15,
                    message: "password must have max length of 15",
                  },
                })}
                className="form-control"
                placeholder=" Password"
              />
              {errors.password && (
                <span className="error">{errors.password.message}</span>
              )}
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-warning btn-block sign-btn"
              >
                Sign In
              </button>
            </div>
            <div className="account text-center">
              <label onClick={() => setLoggedInUser(false)}>
                Create a new Account
              </label>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <h5 className="text-center">Create An Account</h5>
            {auth.user != null && (
              <p className="text-danger error">{auth.user.error}</p>
            )}
            {auth.success && (
              <p
                style={{
                  color: "green",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                User is Successfully Created
              </p>
            )}
            <div className="form-group">
              <input
                name="name1"
                ref={register({
                  required: {
                    value: true,
                    message: "First Name is required",
                  },
                  minLength: {
                    value: 4,
                    message: "Name field should have min length of 4",
                  },
                })}
                className="form-control"
                placeholder="First Name"
              />
              {errors.name1 && (
                <span className="error"> {errors.name1.message}</span>
              )}
            </div>
            <div className="form-group">
              <input
                name="name"
                ref={register({
                  required: {
                    value: true,
                    message: "Last Name is required",
                  },
                  minLength: {
                    value: 4,
                    message: "Last Name field should have min length of 4",
                  },
                })}
                className="form-control"
                placeholder="Last Name"
              />
              {errors.name && (
                <span className="error"> {errors.name.message}</span>
              )}
            </div>
            <div className="form-group">
              <input
                name="email"
                ref={register({
                  required: "Enter your e-mail",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Enter a valid e-mail address",
                  },
                })}
                className="form-control"
                placeholder="Username or  Email"
              />
              {errors.email && (
                <span className="error">{errors.email.message}</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                ref={register({
                  minLength: {
                    value: 8,
                    message: "password must have min length of 8",
                  },
                  required: {
                    value: true,
                    message: "password is required",
                  },
                  maxLength: {
                    value: 15,
                    message: "password must have max length of 15",
                  },
                })}
                className="form-control"
                placeholder=" Password"
              />
              {errors.password && (
                <span className="error">{errors.password.message}</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirm_password"
                ref={register({
                  validate: (value) => value === watch("password"),
                  required: {
                    value: true,
                    message: "confirm password is required",
                  },
                })}
                className="form-control"
                placeholder=" Confirm Password"
              />
              {errors.confirm_password && (
                <span className="error">{errors.confirm_password.message}</span>
              )}
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-warning btn-block sign-btn"
              >
                Create an Account
              </button>
            </div>
            <div className="account text-center ">
              Already Have an Account{" "}
              <Link>
                {" "}
                <label
                  onClick={() => setLoggedInUser(true)}
                  style={{
                    textDecoration: "underline",
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </label>
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
