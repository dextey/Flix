import firebase from "firebase/app";
import Firebase from "../firebase/config";

import React from "react";
import SignIn from "../components/SignIn/SignIn";

function Login() {
  return (
    <div>
      <SignIn />
    </div>
  );
}

export default Login;
