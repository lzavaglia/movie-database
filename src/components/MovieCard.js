import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../styles/components/_moviePoster.scss';
import filledHeart from '../images/filled-heart.svg';
import heart from '../images/heart.svg';
import noPoster from '../images/no-movie-poster.jpg';
import {isMovieInStorage, setStorage, removeFromStorage} from '../utilities/StorageFavourites';


const dateFormat = (string) => {
    let options = {year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}

function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "m";
    }

function MovieCard({ movie, updateFavs }) {
    const [isLiked, setIsLiked] = useState(isMovieInStorage(movie));

    const addMovie = () => {
            const updatedFavMovies = setStorage(movie);
            setIsLiked(true);
            if(updateFavs !== undefined){
                updateFavs(updatedFavMovies);
            }
    }

    const removeMovie = () => {
        const updatedFavMovies = removeFromStorage(movie);
        setIsLiked(false);
        if(updateFavs !== undefined){
            updateFavs(updatedFavMovies);
        }
    }
    

    return (
        <div className='info-image-container'>
        <div className='poster-container'>
        <div className='hover-container'><p>{movie.overview}</p><div className="button-container">
                                <Link to={`/movie/${movie.id}`}><button className="movie-button">More Info</button></Link>
                            </div>
            {/* <p className="">Runtime: {timeConvert(movie.runtime)}</p> */}
            <p className="">{movie.vote_average *10}%</p>
                            </div>
        <div className='hover-info-display'></div>
        {movie.poster_path === null ?
                    <img src={noPoster} alt="No Poster" />:
                    <Link to={`/movie/${movie.id}`}><img className='mass-poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} /></Link>
                }
            <div className='all-movie-info-box'>
            <div className='title-date-container'>
            <p className='movie-title'>{movie.title}</p>
            <div className='date-heart-container'>
            <p className='movie-date'>{dateFormat(movie.release_date)}</p> 
            {isLiked === true ? <div>
                    <img className="heart" src={filledHeart} alt='remove from favs' onClick= {() => removeMovie(movie)}/>
                </div> :
                <div>
                    <img className="heart" src={heart} alt='add to favs' onClick= {() => addMovie(movie)}/>
                </div>}
            </div>
            
            </div>
               

                </div>
            </div>
        
        
    )
        </div>
    )
}


export default MovieCard;
