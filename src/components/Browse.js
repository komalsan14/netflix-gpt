// import Header from "./Header";
// import useNowPlayingMovies  from "../hooks/useNowPlayingMovies";


// const Browse = () => {

//   useNowPlayingMovies();
  

  

//   return (
//     <div>
//       <Header />
//     </div>
//   );
// }

// export default Browse;



import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  const { loading, error } = useNowPlayingMovies();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Header />
      <MainContainer />
      
      {/* Render your movie list or other components here */}
    </div>
  );
}

export default Browse;
