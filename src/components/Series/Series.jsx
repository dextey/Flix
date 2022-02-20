import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

import { url, img_url, API_KEY } from "../../Constants/Constants";
import "./Series.css";

import firebase from "firebase/app";
import { Firebase } from "../../firebase/config";
import "firebase/auth";

function Series() {
  const [movie, setmovie] = useState();
  const [posterId, setposterId] = useState(0);
  const [vid, setVid] = useState("");
  const db = Firebase.firestore();
  const user = Firebase.auth().currentUser;

  const opts = {
    height: "800",
    width: "90%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    const posterId = localStorage.getItem("seriesId");
    setposterId(posterId);
    if (posterId) {
      axios
        .get(url + "tv/" + posterId + "?api_key=" + API_KEY + "&language=en-US")
        .then((response) => {
          setmovie(response.data);
        });
    }
  }, []);

  const playTrailer = () => {
    const posterId = localStorage.getItem("seriesId");

    axios
      .get(
        "https://api.themoviedb.org/3/tv/" +
          posterId +
          "/videos?api_key=d03799692be1c26faf0ade18a4205f9f&language=en-US"
      )
      .then((response) => {
        response.data.results[0] && setVid(response.data.results[0].key);
      })
      .catch(() => console.log("didnt received serieid"));
  };

  return (
    <div>
      {posterId && (
        <div
          className="banner"
          style={
            movie && {
              backgroundImage: `url(${img_url + movie.backdrop_path})`,
              height: "1000px",
            }
          }
        >
          <div className="watchContent">
            <h1 className="title" style={{ marginBottom: "50px" }}>
              {movie ? (movie.title ? movie.title : movie.name) : ""}
            </h1>
            <div className="playbutton">
              <button className="playnow " onClick={playTrailer}>
                <span
                  class="material-icons"
                  style={{
                    fontSize: "40px",
                    marginRight: "5px",
                  }}
                >
                  play_arrow
                </span>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "20px",
                    marginRight: "35px",
                  }}
                >
                  PLAY
                </span>
              </button>
              <button
                className="addlist  material-icons "
                onClick={() => {
                  db.collection("ids")
                    .doc(user.uid)
                    .update({
                      seriesId:
                        firebase.firestore.FieldValue.arrayUnion(posterId),
                    });
                }}
              >
                add
              </button>
            </div>
            <h3 className="subtitle">{movie && movie.name}</h3>

            <p className="desc" style={{ marginTop: "20px" }}>
              {movie ? movie.overview : ""}
            </p>
          </div>
        </div>
      )}
      <div className={vid ? "overlay" : " "}>
        <button
          style={{
            border: "none",
            fontSize: "50px",
            backgroundColor: "transparent",
            color: "white",
            display: vid ? "block" : "none",
          }}
          onClick={
            // pause
            () => {
              setVid(null);
            }
          }
        >
          <span
            class="material-icons"
            style={{ fontSize: "50px", padding: "10px" }}
          >
            close
          </span>
        </button>
        <div
          style={{
            display: vid ? "grid" : "none",
            paddingLeft: "10%",
          }}
        >
          {vid && <YouTube videoId={vid} opts={opts} />}
        </div>
        <div style={{ margin: "60px" }}></div>
      </div>
    </div>
  );
}

export default Series;
