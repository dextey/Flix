import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Posters from "../components/Posters/Posters";
import {
  Original,
  Action,
  Trending,
  Comedy,
  Animated,
  Crime,
} from "../Constants/Constants";
function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div style={{ paddingTop: "20px" }}>
        <Posters key={0} title={"Popular on Netflix "} big genre={Original} />
        <Posters key={1} title={"Trending Now "} genre={Trending} />
        <Posters key={2} title={"Comedy"} genre={Comedy} />
        <Posters key={3} title={"Animated Movies"} genre={Animated} />
        <Posters key={4} title={"Action and Adventure"} genre={Action} />
        <Posters key={5} title={"Crime Series"} genre={Crime} />
        <Posters />
      </div>
    </div>
  );
}

export default HomePage;
