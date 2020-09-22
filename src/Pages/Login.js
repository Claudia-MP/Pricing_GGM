import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function Login() {
  return (
    <form class="form-signin">
      <Link to="/">
        <img
          class="mb-4"
          src="https://borlabs.io/wp-content/uploads/2019/09/blog-wp-login.png"
          alt=""
          width="100"
          height="100"
        />
      </Link>
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">
        Email address
      </label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required=""
        autofocus=""
      />
      <label for="inputPassword" class="sr-only">
        Password
      </label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required=""
      />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
      <p class="mt-5 mb-3 text-muted">© 2017-2020</p>
    </form>
  );
}

export default Login;
