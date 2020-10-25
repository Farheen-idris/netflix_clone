import React from "react";
import "./App.css";
import Row from "./Row";
import { request } from "https";
export default function App() {
  return (
    <div className="App">
      <Row
        title="Netflix Orginals"
        fetchurl={request.fetchNetflixOriginals}
        isLargeRows
      />
      <Row title="Trending Now" fetchurl={request.fetchTrending} />
      <Row title="Top Rated" fetchurl={request.fetch} />
      <Row title="Action Movies" fetchurl={request.fetchActionMovie} />
      <Row title="Comedy Movies" fetchurl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchurl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchurl={request.fetchRomanceMovies} />
    </div>
  );
}
