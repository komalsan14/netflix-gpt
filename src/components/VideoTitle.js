const VideoTitle = ({ title, overview }) => {
    return (
      <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
        <div className="my-4 md:m-0">
          <button className=" bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
            ▶️ Play
          </button>
          <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
            More Info
          </button>
        </div>
      </div>
    );
  };
  export default VideoTitle;
  //'https://api.themoviedb.org/3/movie/748783/videos?language=en-US'
  //<iframe width="560" height="315" src="https://www.youtube.com/embed/T5JIv8YgxKw?si=rVRutgpkF5j9edrE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>