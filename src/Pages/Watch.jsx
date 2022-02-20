import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Season from "../components/Season/Season";
import Series from "../components/Series/Series";
import { Link } from "react-router-dom";

function Watch() {
  return (
    <div>
      {/* <Link to="/">back</Link> */}
      <Navbar />
      <Link
        to="/"
        style={{
          position: "absolute",
          top: "70px",
          fontSize: "40px",
          background: "none",
          color: "white",
          border: "none",
          textDecoration: "none",
          margin: "5px",
        }}
        className="bx bx-arrow-back"
      >
        <span
          className="material-icons"
          style={{ fontSize: "50px", padding: "12px" }}
        >
          arrow_back_ios
        </span>
      </Link>
      <Series />
      <Season />
      <div style={{ margin: "55px" }}>
        <hr />
        <h1 style={{ margin: "15px", color: "white" }}>Recommendations</h1>
        <hr />
      </div>
      <Season recommend={true} />
    </div>
  );
}

export default Watch;
