var fetch = require("node-fetch");
import Anime from "../components/Anime";
import React, { Component } from "react";

class AnimeContainer extends Component {
  constructor() {
    super();
    this.state = { anime: null };
  }
  componentDidMount() {
    fetch(`https://kitsu.io/api/edge/anime/${this.props.match.params.id}`, {
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
        <Anime anime={this.state.anime} />
      </div>
    );
  }
}

export default AnimeContainer;
