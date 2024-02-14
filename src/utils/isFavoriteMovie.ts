export const isFavoriteMovie = (
  movieId: string,
  favoriteIds: string[] | undefined
): boolean => {
  return favoriteIds ? favoriteIds.includes(movieId) : false;
};
