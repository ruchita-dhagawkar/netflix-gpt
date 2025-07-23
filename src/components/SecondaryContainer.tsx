const SecondaryContainer = ({ trailer }: any) => {
  return (
    <iframe
      className="w-full h-full"
      src={`https://www.youtube.com/embed/${trailer?.key}?si=v6CZzJujhWHhigAo`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default SecondaryContainer;
