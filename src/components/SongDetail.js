import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return (
      <div>
        <h3>Select a song</h3>
      </div>
    );
  }
  return (
    <div>
      <h3>Detail for:</h3>
      <p>
        {song && song.title}
        <br />
        {song && song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectSong };
};

export default connect(mapStateToProps)(SongDetail);
