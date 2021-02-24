import React, { useState, useEffect } from 'react';
import Movie from '../../components/Movie/Movie';
import { movies } from '../../Util/movieData.js';
import axios from 'axios';
export default function Dashboard() {
  const [currentMovieID, setCurrentMovieID] = useState('tt0081505');
  const [movieDetails, setMovieDetails] = useState(null);
  const setMovieID = async (id) => {
    axios
      .get(`http://www.omdbapi.com/?i=tt0081505&apikey=d854b017`)
      .then((res) => {
        setMovieDetails(res.data);
      });
  };

  return (
    <div>
      {movies.map(({ title, id, omdbID }) => {
        return (
          <Movie key={id} title={title} id={omdbID} getMovie={setMovieID} />
        );
      })}
    </div>
  );
}
