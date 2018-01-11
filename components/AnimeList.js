import React from "react";

const AnimeList = ({ anime }) => {
  let animeArray;
  if (anime.length) {
    animeArray = anime.map(anime => (
      <div key={anime.attributes.canonicalTitle}>
        <div>{anime.attributes.canonicalTitle}</div>

        <div>
          {anime.attributes.coverImage ? (
            <img
              style={{ width: 800, height: "auto" }}
              src={anime.attributes.coverImage.small}
            />
          ) : null}
        </div>
      </div>
    ));
  } else {
    animeArray = null;
  }
  return <div>{animeArray}</div>;
};

export default AnimeList;
