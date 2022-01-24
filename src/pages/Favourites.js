import Movies from "../components/Movies";
import getStorage from "../utilities/StorageFavourites";

function Favourites({moviesData}) {

    const favouriteMovie = getStorage();
    return (
        <section className='home-page'>
        {moviesData !== null && <Movies movies ={favouriteMovie}/>}
        </section>
    )
}

export default Favourites
