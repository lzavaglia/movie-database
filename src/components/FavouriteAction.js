import { useState } from "react";
// import { STORAGE_MOVIE_FAVS } from "../globals/Variables";
import {isMovieInStorage, setStorage, removeFromStorage} from '../utilities/StorageFavourites';

// const movieFavs = 'movie-favs';

const Favourites = () => {
//     let favsFromStorage = localStorage.getItem(STORAGE_MOVIE_FAVS);
//     if(favsFromStorage === null){
//         favsFromStorage = [];
//     }else{
//         favsFromStorage = JSON.parse(favsFromStorage);
//     }
//     return favsFromStorage;

    const [movie, setMovie]  = useState(null);
    const [ifFavourited, setIfFavourited] = useState([]);
    
    const AddMovie = () => {
        if(!isMovieInStorage(movie)){
            setStorage(movie);
            setIfFavourited(true);
        }else{
            setIfFavourited(false);
        }
    }

    // AddMovie();

    const RemoveMovie = () => {
        removeFromStorage(movie);
        setIfFavourited(false);
    }

    // RemoveMovie();

}


  

export default Favourites;
