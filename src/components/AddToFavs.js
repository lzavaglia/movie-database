import { useState } from "react";

function AddToFavs() {

    const addFavouriteMovie = (movie) => {
		const newFavouriteList = [favourites, movie] = useState(null);
		setFavourites(newFavouriteList);
	};
    return (
        <div>
            <Movies/>
        </div>
    )
}

export default AddToFavs;
