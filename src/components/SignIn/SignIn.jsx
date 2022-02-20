import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./SignIn.css";
import { Firebase } from "../../firebase/config";
import "firebase/auth";

function SignIn() {
  const history = useHistory();

  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [error, seterror] = useState(null);

  return (
    <div>
      <div className="background">
        <div className="box-container">
          <div className="box">
            <img
              className="login-logo"
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              alt=""
            />
            <hr className="line" />
            <input
              type="text"
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              className="signin"
              onClick={() => {
                Firebase.auth()
                  .signInWithEmailAndPassword(email, password)
                  .then((userCredential) => {
                    history.push("/");
                  })
                  .catch((error) => {
                    seterror(error.message);
                  });
              }}
            >
              Sign In
            </button>
            <span style={{ color: "red", fontSize: "15px", padding: "10px" }}>
              {error ? `*${error}` : ""}
            </span>
            <span className="tosignUp">
              New to Netflix?
              <Link
                to="/signUp"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: "5px",
                }}
              >
                SignUp now
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
