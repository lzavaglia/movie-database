import IndividualMovieCard from "../components/IndividualMovieCard";
import { useState, useEffect } from "react";
import { API_KEY } from "../globals/Variables";
import { useParams } from "react-router-dom";

function IndividualMovie() {
  const { id } = useParams();
  const [moviesData, setMoviesData] = useState(false);
  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&page=1`
      );
      let moviesDataFromApi = await res.json();
      setMoviesData(moviesDataFromApi);
    };
    fetchMovie();
  }, []);

  return (
    <section className="individual-page">
      {moviesData !== false && <IndividualMovieCard movie={moviesData} />}
    </section>
  );
}

export default IndividualMovie;
