import React from "react";
import getCurrentUser from "@/actions/getCurrentUser";
import Navbar from "@/components/Navbar";
import getAllMovies from "@/actions/getAllMovies";
import MoviesList from "@/components/MoviesList";

const Movies: React.FC = async () => {
  const currentUser = await getCurrentUser();
  const movies = await getAllMovies();

  return (
    <>
      <Navbar username={currentUser?.name} image={currentUser?.image} />
      <div className="pb-40 pt-72">
        <MoviesList title="Фільми" movies={movies} />
      </div>
    </>
  );
};
export default Movies;
