import { useState } from "react";
import Movies from "../components/Movies";
import getStorage from "../utilities/StorageFavourites";

function Favourites() {


    const [favMovies, setFavMovies] = useState(getStorage());

    function updateFavs(movies){
        setFavMovies(movies);
    }



    return (
        <section className='home-page'>
            {favMovies.length > 0 ? <Movies movies={favMovies} updateFavs={updateFavs} /> : <p>No Favs...</p>}
        </section>
    )
}

export default Favourites
