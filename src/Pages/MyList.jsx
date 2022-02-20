import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Firebase } from "../firebase/config";
import "./MyList.css";
import { url, API_KEY } from "../Constants/Constants";
import { useHistory } from "react-router-dom";

function MyList() {
  const [posters, setPosters] = useState([]);
  const history = useHistory();
  let series = [];

  useEffect(() => {
    Firebase.firestore()
      .collection("ids")
      .doc("mUnes4qCDBPVCueFyooMW0PD0zB3")
      .get()
      .then((data) => {
        const ids = data.data().seriesId;

        ids.map((id) => {
          axios
            .get(url + "tv/" + id + "?api_key=" + API_KEY + "&language=en-US")
            .then((response) => {
              series = [...series, response.data];

              setPosters(series);
            });
        });
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mylist_container">
        <span>
          <h2 className="mylist_heading">My List</h2>
        </span>
        <hr className="mylist_hr" />
        <div className="mylist_collection">
          {posters &&
            posters.map((data) => {
              return (
                <img
                  key={data.id}
                  className="mylist_poster"
                  src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                  alt=""
                  onClick={() => {
                    localStorage.setItem("seriesId", data.id);
                    history.push({ pathname: "/watch" });
                  }}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default MyList;
