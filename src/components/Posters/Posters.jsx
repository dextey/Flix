import "./Posters.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { url, img_url } from "../../Constants/Constants";
import { useHistory } from "react-router-dom";

function Posters(props) {
  const [movie, setMovie] = useState([]);

  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${url + props.genre}`)
      .then((response) => {
        setMovie(response.data.results.reverse());
      })
      .catch((error) => {
        // console.log("unknown error");
      });
  }, []);

  return (
    <div className="row">
      <h4 className="ptitle">{props.title} </h4>
      <div className="posters" style={{ display: "flex" }}>
        {movie.map((series) => {
          return (
            <img
              onClick={() => {
                localStorage.setItem("seriesId", series.id);
                history.push({ pathname: "/watch", id: `${series.id}` });
              }}
              key={series.id}
              src={img_url + series.poster_path}
              className={props.big ? "bigposter" : "poster"}
              alt={series.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Posters;
