import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./SignUp.css";

import { Firebase } from "../../firebase/config";
import "firebase/auth";

function checkpassword(password, confirmPassword) {
  if (password === confirmPassword) {
    return true;
  }
  return false;
}

function SignUp() {
  const history = useHistory();
  const db = Firebase.firestore();
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [confirmPassword, setConfirmPassword] = useState(" ");
  const [error, seterror] = useState(null);

  return (
    <div>
      <div className="signup">
        <div className="container-signup">
          <div className="box-signup">
            <img
              className="login-logo"
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              alt=""
            />
            <hr className="line" />
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <span style={{ color: "red", fontSize: "15px", padding: "10px" }}>
              {error ? `*${error}` : ""}
            </span>
            <button
              className="signin"
              onClick={() => {
                if (checkpassword(password, confirmPassword)) {
                  seterror(null);

                  Firebase.auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                      db.collection("ids").doc(userCredential.user.uid).set({
                        seriesId: "",
                      });
                      history.push("/");
                    })
                    .catch((error) => {
                      seterror(error.message);
                    });
                } else {
                  seterror("passwords doesn't match");
                }
              }}
            >
              Sign Up
            </button>

            <span className="tosignUp">
              Already have an account?
              <Link
                to="/signIn"
                style={{ textDecoration: "none", color: "white" }}
              >
                Login now
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
