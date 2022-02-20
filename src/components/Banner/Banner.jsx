import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { url, img_url, Trending } from "../../Constants/Constants";
import "./Banner.css";

function Banner({ playTrailer }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(`${url + Trending}`).then((response) => {
      setMovie(response.data.results[Math.floor(Math.random() * 20)]);
    });
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${img_url + movie.backdrop_path})`,
      }}
    >
      <div className="content">
        <h1 className="title">
          {movie ? (movie.title ? movie.title : movie.name) : ""}
        </h1>
        <div className="banbtn">
          <button className="btn ">
            <span
              className="bx bx-play"
              style={{
                fontSize: "20px",
                margin: "4px",
                backgroundColor: "transparent",
                display: "flex",
              }}
            >
              <span class="material-icons">play_arrow</span>
            </span>
            Play
          </button>
          <button className="btn">
            <span style={{ fontSize: "20px", margin: "4px", display: "flex" }}>
              <span class="material-icons">playlist_play</span>
            </span>
            <Link to="/list" style={{ textDecoration: "none", color: "white" }}>
              {" "}
              My list
            </Link>
          </button>
        </div>
        <h3 className="subtitle">Netflix Originals</h3>

        <p className="desc">{movie ? movie.overview : ""}</p>
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;
