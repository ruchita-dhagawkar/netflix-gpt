const VideoTitle = ({ movie }: any) => {
  return (
    <div className="text-white text-4xl font-bold absolute top-60 left-10">
      {movie?.title || "VideoTitle"}
      <p className="text-lg mt-2 w-4/12">
        {movie?.overview || "Video description goes here."}
      </p>
      <button className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded cursor-pointer">
        Play
      </button>
    </div>
  );
};

export default VideoTitle;
