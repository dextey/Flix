import React, { useEffect, useState } from "react";
import "./Season.css";
import { img_url, API_KEY, url } from "../../Constants/Constants";
import axios from "axios";

function Season({ recommend }) {
  const [seasons, setseasons] = useState([]);

  useEffect(() => {
    const posterId = localStorage.getItem("seriesId");

    if (recommend) {
      if (posterId) {
        axios
          .get(
            url +
              "tv/" +
              posterId +
              "/recommendations?api_key=" +
              API_KEY +
              "&language=en-US"
          )
          .then((response) => {
            setseasons(response.data.results);
          })
          .catch(() => {
            console.log("error");
          });
      }
    } else {
      axios
        .get(url + "tv/" + posterId + "?api_key=" + API_KEY + "&language=en-US")
        .then((response) => {
          setseasons(response.data.seasons);
        })
        .catch(() => {
          console.log("error");
        });
    }
  }, []);
  return (
    <div className="row">
      <div className="posters" style={{ paddingLeft: "60px" }}>
        {seasons.map((season) => {
          return (
            season.poster_path && (
              <img
                key={season.id}
                className="seasonposter"
                src={img_url + season.poster_path}
                onClick={() => {
                  recommend && localStorage.setItem("seriesId", season.id);

                  recommend && window.location.reload();
                }}
                alt=""
              />
            )
          );
        })}
      </div>
    </div>
  );
}

export default Season;
