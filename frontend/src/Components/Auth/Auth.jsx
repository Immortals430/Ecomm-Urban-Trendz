import React, { useContext, useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { AppContext } from "../../AppContext";
import { useDispatch } from "react-redux";
import { signin, signup } from "../../redux/reducers/auth_reducer";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLoginButton } from "./GoogleLoginButton";
import MoonLoader from "react-spinners/MoonLoader";

export default function Auth() {
  const { loginForm, setLoginForm, setAuthPage } = useContext(AppContext);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // sign up
  const callSignup = async (e) => {
    e.preventDefault();
    setLoading(true)
    const formData = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
    };
    const { payload } = await dispatch(signup(formData));
    setLoading(false)
    if (!payload) return;
    e.target.reset();
    setLoginForm(true);
  };

  // sign in
  async function callSignin(e) {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    await dispatch(signin({ email, password }));
    setLoading(false);
    setAuthPage(false);
    s;
  }

  return (
    <section className="auth-sec">
      <div
        className={`auth-container ${!loginForm && "open"}`}
        id="auth-container"
      >
        <div className="auth-btns">
          <div id="loginbtn" onClick={() => setLoginForm(true)}>
            Login
          </div>
          <div id="registerbtn" onClick={() => setLoginForm(false)}>
            Register
          </div>

          <div className={`whitebox ${loginForm && "open"}`}></div>
        </div>

        <form onSubmit={callSignin} className="form">
          <p className="desc">Insert your account information</p>

          <label htmlFor="signin-email">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="ENTER YOUR EMAIL"
            id="signin-email"
          />

          <label htmlFor="signin-password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            id="signin-password"
          />

          <p>
            <MdEmail /> Forgot your <b>Password?</b>
          </p>
          {loading ? (
            <div className="login-loading-btn loading">
              <MoonLoader size={20} color="white" />
            </div>
          ) : (
            <button type="submit">LOGIN</button>
          )}

          <GoogleOAuthProvider
            clientId={import.meta.env.VITE_APP_GOOGLE_CLIENTID}
          >
            <GoogleLoginButton />
          </GoogleOAuthProvider>
        </form>

        <form
          onSubmit={callSignup}
          className="form signup"
          style={!loginForm ? { top: "53px" } : {}}
        >
          <p className="desc">Create your account</p>

          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="USERNAME"
            id="username"
          />
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" placeholder="EMAIL" id="email" />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            id="password"
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="CONFIRM PASSWORD"
            id="confirmPassword"
          />

          {loading ? (
            <div className="login-loading-btn">
              <MoonLoader size={20} color="white" />
            </div>
          ) : (
            <button type="submit">REGISTER</button>
          )}

        </form>

        <div className="close">
          <IoClose size={50} onClick={() => setAuthPage(false)} />
        </div>
      </div>
    </section>
  );
}
