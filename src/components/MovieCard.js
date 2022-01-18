import moviePoster from '../images/massImg.png';
import '../styles/components/_moviePoster.scss';
import heart from '../images/heart.svg';


function MovieCard() {
    return (
        <div className='info-image-container'>
        <div className='poster-container'>
            <img className='mass-poster' src={moviePoster} alt="mass movie poster"/>
            </div>
            <div className='title-icon-container'>
            <p className='movie-title'>Mass</p>
            <img class='heart' src={heart}></img>
            </div>
            <div className='movie-info-container'>
            <p className='movie-date'>Oct. 8, 2021</p>                   
            <p className='movie-rating'>PG</p>
            </div>
        
        
    )
        </div>
    )
}

export default MovieCard;
