import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./banner.css";

function banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(request.fetchNetflixOriginal);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+"..."+str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
      }}
    >
      <div className="banner_Content">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description"> {truncate(movie?.overview,150)}</h1>
      </div>
      <div className="banner--fadeBotton"></div>
    </div>
  );
}

export default banner;
