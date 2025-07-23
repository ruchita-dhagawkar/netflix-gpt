const VideoTitle = ({ movie }: any) => {
  return (
    <div className="absolute top-16 left-10 text-white text-4xl font-bold max-w-lg">
      {movie?.title || "VideoTitle"}
      <p className="text-sm mt-2 w-6/12">
        {movie?.overview || "Video description goes here."}
      </p>
      <button className="mt-2 bg-red-600 hover:bg-red-700 text-white py-1 px-2 rounded cursor-pointer">
        Play
      </button>
    </div>
  );
};

export default VideoTitle;
