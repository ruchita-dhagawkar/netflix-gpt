import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useUserStore } from "../store/useUserStore";
import SecondaryContainer from "./SecondaryContainer";
import VideoTitle from "./VideoTitle";
import MovieList from "./MovieList";

const Browse = () => {
  const setMovieList = useUserStore((state) => state.setMovieList);
  const movieList = useUserStore((state) => state.movieList);
  const [firstMovieId, setFirstMovieId] = useState<number | null>(null);
  const [trailer, setTrailer] = useState<any>(null);
  const [movie, setMovie] = useState<any>(null);

  // First useEffect: Fetch list of movies
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc",
      API_OPTIONS
    )
      .then((res) => res.json())
      .then((data) => {
        const movies = data.results || [];
        setMovieList(movies);
        if (movies.length > 0) {
          setFirstMovieId(movies[0].id); // ✅ Set ID of first movie
          setMovie(movies[0]); // Set the first movie for later use
        }
      })
      .catch((err) => console.error("Failed to fetch movies:", err));
  }, []);

  // Second useEffect: Fetch videos for the first movie
  useEffect(() => {
    if (!firstMovieId) return;

    fetch(
      `https://api.themoviedb.org/3/movie/${firstMovieId}/videos?language=en-US`,
      API_OPTIONS
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Movie videos:", data);
        const trailers = data.results.filter(
          (video: any) => video.site === "YouTube" && video.type === "Trailer"
        );
        console.log("Filtered trailers:", trailers);
        setTrailer(trailers[0]);
      })
      .catch((err) => console.error("Failed to fetch movie videos:", err));
  }, [firstMovieId]);

  return (
    <div className="bg-black flex flex-col min-h-screen">
      <div className="relative w-full h-[75vh]">
        <SecondaryContainer trailer={trailer} />
        <VideoTitle movie={movie} />
      </div>

      {/* Movie list below */}
      <MovieList movieList={movieList} />
    </div>
  );
};
export default Browse;
