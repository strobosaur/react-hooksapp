import React, { useState } from 'react';
import uuid from 'uuid/dist/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { artist: 'Polygon Window', title: 'Polygon Window', id: 1 },
    { artist: 'Squarepusher', title: 'Tundra', id: 2 },
    { artist: 'Future Sound Of London', title: 'Slider', id: 3 },
    { artist: 'Oliver Huntemann', title: 'Dark Passenger', id: 4 },
    { artist: 'Aphex Twin', title: 'Windowlicker', id: 5 }
  ]);
  const addSong = (artist, title) => {
    setSongs([...songs, {artist: artist, title: title, id: uuid() }]);
  }
  return ( 
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return (
            <li key={song.id}>{song.artist + " - " + song.title}</li>
          )
        })}
      </ul>
      {/* <button onClick={addSong}>Add a song</button> */}
      <NewSongForm addSong={addSong} />
    </div>
   );
}
 
export default SongList;