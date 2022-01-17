import moviePoster from '../images/massImg.png';
import '../styles/components/_moviePoster.scss';


function IndividualMovieCard() {
    return (
        <div>
        <div className='poster-container'>
            <img className='mass-poster' src={moviePoster} alt="mass movie poster"/>
            <p className='movie-title'>Mass</p>
            <span className='movie-info-container'>
            <p className='movie-date'>Oct. 8, 2021</p>                   
            <p className='movie-time'>1h 50m</p>
            <p className='movie-descrip'>Everyone's favorite spooky family is back in the animated comedy sequel, The Addams Family 2. In this all new movie we find Morticia and Gomez distraught that their children are growing up, skipping family dinners, and totally consumed with "scream time." To reclaim their bond they decide to cram Wednesday, Pugsley, Uncle Fester and the crew into their haunted camper and hit the road for one last miserable family vacation. Their adventure across America takes them out of their element and into hilarious run-ins with their iconic cousin, IT, as well as many new kooky characters. What could possibly go wrong?</p>
            <p className='release-date'>Release Date: Oct. 1, 2021</p>
            <p className='run-time'>Runtime: 1h 33m</p>
            <p className='rating'>Rating: 53%</p>
            </span>
        </div>
        
    )
        </div>
    )
}

export default IndividualMovieCard;
