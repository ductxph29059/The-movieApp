import { useState, useEffect } from "react";

import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import MoiveSearch from "./components/MoiveSearch";
import { MovieProvider } from "../context/MovieProvider";
function App() {
  const [moive, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  // console.log(moive.length);
  const [movieSearch, setMovieSearch] = useState([]);

  const handleSearch = async (searchVal) => {
    setMovieSearch([]);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=vi&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url1 =
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

      const url2 =
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

      // const response  = await fetch (url1, options);
      // const data = await response.json();
      // setMovie(data.results);
      // console.log(data);

      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
      ]);
      const data1 = await res1.json();
      const data2 = await res2.json();
      console.log(data1);
      setMovie(data1.results);
      setMovieRate(data2.results);
    };
    fetchMovie();
  }, []);

  return (
    <>
    <MovieProvider>
      
    </MovieProvider>
      <div className="bg-black pb-10">
        <Header onSearch={handleSearch} />
        <Banner />
        {movieSearch.length > 0 ? (
          <MoiveSearch title={"ket qua tim kiem"}
           data={movieSearch}
          />
        ) : (
          <>
            <MovieList title={"Phim Hot"} data={moive} />
            <MovieList title={"Phim Đề cử"} data={movieRate} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
