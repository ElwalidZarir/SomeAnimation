import React from "react";
import { motion } from "framer-motion";
const Movie = ({ results }) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
    >
      <h2>{results.title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + results.backdrop_path}
        alt=""
      />
    </motion.div>
  );
};

export default Movie;
