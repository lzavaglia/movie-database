import moviePoster from '../images/massImg.png';
import '../styles/components/_moviePoster.scss';


function MovieCard() {
    return (
        <div>
        <div className='poster-container'>
            <img className='mass-poster' src={moviePoster} alt="mass movie poster"/>
            <p className='movie-title'>Mass</p>
            <span className='movie-info-container'>
            <p className='movie-date'>Oct. 8, 2021</p>                   
            <p className='movie-time'>1h 50m</p>
            </span>
        </div>
        
    )
        </div>
    )
}

export default MovieCard;
