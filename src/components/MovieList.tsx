const MovieList = ({ movieList }: any) => {
  return (
    <div className="text-white px-6 -mt-32 z-10">
      <h2 className="text-xl font-bold mb-2">Popular Movies</h2>
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {movieList.map((movie: any) => (
          <div
            key={movie.id}
            className="min-w-[150px] max-w-[150px] h-[225px] bg-gray-800 rounded overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-sm text-gray-400 p-2">
                No Image
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
