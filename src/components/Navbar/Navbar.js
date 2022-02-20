import React from "react";
import "./Nav.css";
import { Firebase } from "../../firebase/config";
import "firebase/auth";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="netflix"
      />
      <Link to="/" className="nav_list">
        <h2>Home</h2>
      </Link>
      <Link to="/list" className="nav_list">
        <h2>My List</h2>
      </Link>
      <img
        className="avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4VeiODxvd6v3J_8hGlgCaqE2GusfG428mgQ&usqp=CAU"
        alt=""
        onClick={() => {
          Firebase.auth()
            .signOut()
            .then(() => {
              // Sign-out successful.
            })
            .catch((error) => {});
        }}
      />
    </div>
  );
}

export default Navbar;
