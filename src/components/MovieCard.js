import {Link} from 'react-router-dom';
import '../styles/components/_moviePoster.scss';
import heart from '../images/heart.svg';
import noPoster from '../images/no-movie-poster.jpg';



function MovieCard({ movie }) {
    return (
        <div className='info-image-container'>
        <div className='poster-container'>

        {movie.poster_path === null ?
                    <img src={noPoster} alt="No Poster" />:
                    <Link to={`/movie/${movie.id}`}><img className='mass-poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} /></Link>
                }
            </div>
            <div className='title-icon-container'>
            <p className='movie-title'>{movie.title}</p>
            
            </div>
            <div className='movie-info-container'>
            <p className='movie-date'>{movie.release_date}</p> 
            <Link to={`/movie/${movie.id}`}><img className='heart' src={heart}></img></Link>                
            {/* <p className='movie-rating'>PG</p> */}
            </div>
        
        
    )
        </div>
    )
}

export default MovieCard;
