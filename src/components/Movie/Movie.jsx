// id, title, runtime, omdbID, youtubeID
import react from 'react';
import axios from 'axios';
export default function Movie({ title, id, getMovie }) {
  return (
    <div
      onClick={(id) => {
        getMovie(id);
      }}
    >
      <h2>{title}</h2>
    </div>
  );
}
