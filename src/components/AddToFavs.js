import { useState } from "react";

const movieFavs = 'movie-favs';

function addToFavs(){
    let favsFromStorage = localStorage.getItem(movieFavs);
    if(favsFromStorage === null){
        favsFromStorage = [];
    }else{
        favsFromStorage = JSON.parse(favsFromStorage);
    }
    return favsFromStorage;
  }
  

export default AddToFavs;
