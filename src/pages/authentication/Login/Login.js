import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";
import "./Login.css";

const Login = () => {
  const {
    signInUsingGoogle,
    handleLogin,
    handleName,
    handleEmailChange,
    handlePassword,
    error,
    toggoleState,
    toggole,
    handleForgetPassword,
    setUser,
    setLoading,
  } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || "/home";
  const handleSignInUsingGoogle = () => {
    setLoading(true);
    signInUsingGoogle()
      .then((result) => {
        setUser(result.user);
        history.push(url);
        // ...
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="auth-container">
      <form onSubmit={handleLogin}>
        <div className="register-form  ">
          <h2 className="text-dark text-center fw-bold">
            {toggole ? "Register Now" : "Login Now"}
          </h2>

          {toggole && (
            <div className="flex-container">
              <input
                onBlur={handleName}
                type="text"
                placeholder="UserName"
                required
              />
            </div>
          )}

          <div className="flex-container">
            <input
              onBlur={handleEmailChange}
              type="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="flex-container">
            <input
              onBlur={handlePassword}
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <button type="sumit" className="button-style">
            {toggole ? "Register" : "Login"}
          </button>

          <div className="form-check d-flex justify-content-center">
            <input
              onChange={toggoleState}
              className="form-check-input  "
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              className="form-check-label text-danger fw-bold"
              htmlFor="flexCheckDefault"
            >
              Already Registerd?
            </label>
          </div>

          {!toggole && (
            <button
              onClick={handleForgetPassword}
              className=" btn btn-danger d-block mx-auto mb-3 btn-sm"
            >
              Forget Password?
            </button>
          )}

          <div className="text-center text-warning fw-bold">{error}</div>
        </div>
        <h6 className="text-center text-success mt-3">
          or use google to authenticate
          <div onClick={handleSignInUsingGoogle} className="mt-3   ">
            <i className="fab fa-google-plus-square fa-3x text-danger "></i>
          </div>
        </h6>
      </form>
    </div>
  );
};

export default Login;
