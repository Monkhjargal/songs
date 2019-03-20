import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Song 1",
      duration: "4:05"
    },
    {
      title: "Song 2",
      duration: "5:05"
    },
    {
      title: "Song 3",
      duration: "6:05"
    }
  ];
};

const selectedSongReducer = (selectSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectSong;
};

export default combineReducers({
  songs: songsReducer,
  selectSong: selectedSongReducer
});
