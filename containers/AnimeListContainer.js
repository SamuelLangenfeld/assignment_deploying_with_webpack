var fetch = require("node-fetch");
import AnimeList from "../components/AnimeList";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class AnimeListContainer extends Component {
  constructor() {
    super();
    this.state = { anime: [] };
  }
  componentDidMount() {
    fetch("https://kitsu.io/api/edge/anime", {
      method: "GET",
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json"
      } // request header. format {a:'1'} or {b:['1','2','3']}
    })
      .then(data => data.json())
      .then(response => this.setState({ anime: response.data }));
  }
  render() {
    return (
      <div id="didthismount?">
        <Link to="/anime/1">Button</Link>
        <AnimeList anime={this.state.anime} />
      </div>
    );
  }
}

export default AnimeListContainer;
