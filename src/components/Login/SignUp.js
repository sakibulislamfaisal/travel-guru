import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { useAuth } from "./useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";

const SignUp = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const [loggedInUser, setLoggedInUser] = useState(false);
  const auth = useAuth();
  const onSubmit = (data, e) => {
    e.preventDefault();
    if (loggedInUser === true) {
      if (data.email && data.password) {
        auth.signIn(data.email, data.password);
      }
    } else {
      if (
        data.fname &&
        data.lname &&
        data.email &&
        data.password &&
        data.confirm_password
      ) {
        auth.signUp(data.email, data.confirm_password, data.fname, data.lname);
      }
    }
  };

  return (
    <div className="signup ">
      <div className="container total-form ">
        {loggedInUser ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <h4 className="text-center">Login Panel</h4>
            {auth.user != null && (
              <p className="text-danger error">{auth.user.error}</p>
            )}
            {auth.success && (
              <p
                className="alert alert-success"
                role="alert"
                style={{
                  color: "green",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                User is Logged In Successfully
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
                placeholder="Email"
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
                    value: 6,
                    message: "password must have min length of 6",
                  },
                  required: {
                    value: true,
                    message: "You must specify a password",
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
            <div className="form-group py-2">
              <input type="checkbox" name="checkbox" />
              {"  "}
              Remember me
              <Link
                style={{
                  textDecoration: "underline",
                  marginLeft: "130px",
                  color: "orange",
                  fontWeight: "bold",
                  fontSize: "17px",
                }}
              >
                Forget Password
              </Link>
            </div>
            <div className="form-group py-3">
              <button
                type="submit"
                className="btn btn-warning btn-block sign-btn"
              >
                Login
              </button>
            </div>
            <div className="account text-center pb-5">
              Don’t have an account?{" "}
              <Link>
                {" "}
                <label
                  onClick={() => setLoggedInUser(false)}
                  style={{
                    textDecoration: "underline",
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  Create an Account
                </label>
              </Link>
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
                className="alert alert-success"
                role="alert"
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
                name="fname"
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
                name="lname"
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
                placeholder="Email"
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
                    value: 6,
                    message: "password must have min length of 6",
                  },
                  required: {
                    value: true,
                    message: "You must specify a password",
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
                  required: {
                    value: true,
                    message: "confirm password is required",
                  },
                  validate: (value) =>
                    value === password.current || "The password do not match",
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
      <form onSubmit={handleSubmit()}>
        <div className="others py-2">
          <span className="other-part">
            <hr className="first-line" /> Or
            <hr className="first-line" />
          </span>
          <div className="form-group">
            <button
              onClick={() => auth.googleSignIn()}
              className="btn btn-success  btn-block google"
            >
              <FontAwesomeIcon
                className="google-icon mt-1"
                icon={faGooglePlusG}
              />
              Continue With Google
            </button>
          </div>{" "}
          <div className="form-group">
            <button
              onClick={() => auth.facebookSignIn()}
              className="btn btn-primary  btn-block google"
            >
              <FontAwesomeIcon className="google-icon mt-1" icon={faFacebook} />
              Continue With Facebook
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
