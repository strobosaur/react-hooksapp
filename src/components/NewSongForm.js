import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(artist, title);
    setArtist('');
    setTitle('');
  }
  return ( 
    <form onSubmit={handleSubmit}>
      <label>Artist:</label>
      <input type="text" value={artist} required onChange={(e) => setArtist(e.target.value)} />
      <label>Song title:</label>
      <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)} />
      <input type="submit" value="add song" />
    </form>
   );
}
 
export default NewSongForm;