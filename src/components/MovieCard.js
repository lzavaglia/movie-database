
import moviePoster from '../images/massImg.png';
import '../styles/components/_moviePoster.scss';
import heart from '../images/heart.svg';
import noPoster from '../images/no-movie-poster.jpg';



function MovieCard({ movie }) {
    return (
        <div className='info-image-container'>
        <div className='poster-container'>

        {movie.poster_path === null ?
                    <img src={noPoster} alt="No Poster" />:
                    <img className='mass-poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                }
            </div>
            <div className='title-icon-container'>
            <p className='movie-title'>{movie.title}</p>
            
            </div>
            <div className='movie-info-container'>
            <p className='movie-date'>{movie.release_date}</p> 
            <img className='heart' src={heart}></img>                  
            {/* <p className='movie-rating'>PG</p> */}
            </div>
        
        
    )
        </div>
    )
}

export default MovieCard;
