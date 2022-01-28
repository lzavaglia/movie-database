import { useState } from "react";
import Movies from "../components/Movies";
import getStorage from "../utilities/StorageFavourites";

function Favourites() {


    const [favMovies, setFavMovies] = useState(getStorage());

    function updateFavs(movies){
        setFavMovies(movies);
    }



    return (
        <main className="favourites-main">
            <section className='favourites-page'>
                <h2 className="favourites-title">Your Favourites</h2>
                <div className="fLine"></div>
                {favMovies.length > 0 ? <Movies movies={favMovies} updateFavs={updateFavs} /> : <p className="no-favs">No movies have been added to your favourites. Please click on the heart icon in order to save your favourite movies here.</p>}
            </section>
        </main>
    )
}

export default Favourites
