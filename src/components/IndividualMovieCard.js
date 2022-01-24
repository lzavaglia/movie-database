import { Link } from "react-router-dom";
import moviePoster from "../images/massImg.png";
//! RE COMMENT IF DOESNT WORK
import "../styles/components/_moviePoster.scss";
import "../styles/components/_individualMovie.scss";
import noPoster from "../images/no-movie-poster.jpg";

const dateFormat = (string) => {
  let options = {year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(string).toLocaleDateString([],options);
}

// const getGenres = genres => {
//   let content = [];
//   for (let i = 0; i < movie.genres; i++) {
//   const 
//   movie.genres[i].name}



function timeConvert(n) {
  var num = n;
  var hours = (num / 60);
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours + "h " + rminutes + "m";
  }

function IndividualMovieCard({ movie }) {
  if (!movie) {
    return null;
  } else {
    // is a movie
    return (
      <>
        <div className="indiv-poster-container">
          {movie.poster_path === null ? (
            <img src={noPoster} alt="No Poster" />
          ) : (
            <img
              className="mass-poster"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          )}
         
          <p className="indiv-movie-title">{movie.title}</p>
          <div className="indiv-movie-info-container">
            <p className="indiv-movie-descrip">{movie.overview}</p>
            <p>Original Language: {movie.original_language}</p>
            <p className="indiv-movie-genre">Genre: 
           
            </p>
            <p className="indiv-release-date">Release Date: {dateFormat(movie.release_date)}</p>
            <p className="indiv-run-time">Runtime: {timeConvert(movie.runtime)}</p>
            <p className="indiv-view-rating">Rating:{movie.vote_average *10}%</p>
            
          </div>
        </div>
      </>
    );
  }
}

export default IndividualMovieCard;
