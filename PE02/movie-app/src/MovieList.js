import React, { useState } from 'react';
import './MovieList.css';

const MovieList = () => {
  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const movies = [
    {
      title: 'Inception',
      genre: 'Science Fiction',
      releaseYear: 2010
    },
    {
      title: 'The Shawshank Redemtion',
      genre: 'Drama',
      releaseYear: 1994
    },
    {
        title: 'The Dark Knight',
        genre: 'Action',
        releaseYear: 2008
      },
    // Add more movies here
  ];

  const filteredMovies = selectedGenre === 'All Genres'
    ? movies
    : movies.filter(movie => movie.genre === selectedGenre);

  const handleMovieClick = (title) => {
    alert(`Clicked movie: ${title}`);
  };

  return (
    <div className="MovieList">
      <h1>Movie List</h1>
      <div>
        <select id="genreSelect" value={selectedGenre} onChange={handleGenreChange}>
          <option value="All Genres">All Genres</option>
          {Array.from(new Set(movies.map(movie => movie.genre))).map((genre, index) => (
            <option key={index} value={genre}>{genre}</option>
          ))}
        </select>
      </div>
      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index} onClick={() => handleMovieClick(movie.title)}>
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
            <p>{movie.releaseYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
