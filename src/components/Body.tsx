import Login from "./Login";

const Body = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/GB-en-20250714-TRIFECTA-perspective_9cf91e98-778b-444b-b826-7a6266ca5b80_large.jpg"
        alt="background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0">
        <Login />
      </div>
    </div>
  );
};

export default Body;
