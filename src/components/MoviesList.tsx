import React from "react";
import { Movie } from "@prisma/client";
import getCurrentUser from "@/actions/getCurrentUser";
import { isFavoriteMovie } from "@/utils/isFavoriteMovie";
import MovieCard from "./MovieCard";

type MoviesListProps = {
  title: string;
  movies: Movie[];
};

const MoviesList: React.FC<MoviesListProps> = async ({ title, movies }) => {
  const currentUser = await getCurrentUser();

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8 ">
      <p className="text-white text-md md:text-xl lg:text-2xl font-semibold ">
        {title}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-2">
        {movies.map((movie) => {
          const isFavorite: boolean = isFavoriteMovie(
            movie.id,
            currentUser?.favoriteIds
          );
          return (
            <MovieCard
              key={movie.id}
              movieData={movie}
              isFavorite={isFavorite}
            />
          );
        })}
      </div>
    </div>
  );
};
export default MoviesList;
