import React from "react";
import getCurrentUser from "@/actions/getCurrentUser";
import getFavoritesMovies from "@/actions/getFavoritesMovies";
import Navbar from "@/components/Navbar";
import MoviesList from "@/components/MoviesList";

const Favorites: React.FC = async () => {
  const currentUser = await getCurrentUser();
  const favoritesMovies = await getFavoritesMovies();

  return (
    <>
      <Navbar username={currentUser?.name} image={currentUser?.image} />
      <div className="pb-40 pt-72">
        <MoviesList title="Улюблені" movies={favoritesMovies} />
      </div>
    </>
  );
};
export default Favorites;
