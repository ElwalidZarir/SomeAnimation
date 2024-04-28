import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import Filter from "./Filter";
import { motion } from "framer-motion";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  useEffect(() => {
    fetchPopular();
  }, []);
  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=d2ca84a19fdf58bbc751a40bd1e52fe9&language=en-US&page=1"
    );
    const movies = await data.json();
    console.log(movies.results);
    setPopular(movies.results);
    setFiltered(movies.results);
  };
  return (
    <div className="App">
      <Filter
        popular={popular}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        setFiltered={setFiltered}
      />
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        layout
        className="popular-movies"
      >
        {filtered.map((movie, key) => (
          <Movie results={movie} key={movie.id} />
        ))}
      </motion.div>
    </div>
  );
}

export default App;
