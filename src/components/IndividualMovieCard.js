import moviePoster from '../images/massImg.png';
//! RE COMMENT IF DOESNT WORK
// import '../styles/components/_moviePoster.scss';
import '../styles/components/_individualMovie.scss';


function IndividualMovieCard() {
    return (
        <div>
        <div className='indiv-poster-container'>
            <img className='indiv-mass-poster' src={moviePoster} alt="mass movie poster"/>
            <p className='indiv-movie-title'>Mass</p>
            <span className='indiv-movie-info-container'>
            </span>                  
            <p className='indiv-movie-descrip'>Everyone's favorite spooky family is back in the animated comedy sequel, The Addams Family 2. In this all new movie we find Morticia and Gomez distraught that their children are growing up, skipping family dinners, and totally consumed with "scream time." To reclaim their bond they decide to cram Wednesday, Pugsley, Uncle Fester and the crew into their haunted camper and hit the road for one last miserable family vacation. Their adventure across America takes them out of their element and into hilarious run-ins with their iconic cousin, IT, as well as many new kooky characters. What could possibly go wrong?</p>
            <p className='indiv-release-date'>Release Date: Oct. 1, 2021</p>
            <p className='indiv-run-time'>Runtime: 1h 33m</p>
            <p className='indiv-view-rating'>Rating: 53%</p>
            <p className='indiv-movie-genre'>Genre: Western</p>
            
        </div>
        
    )
        </div>
    )
}

export default IndividualMovieCard;
