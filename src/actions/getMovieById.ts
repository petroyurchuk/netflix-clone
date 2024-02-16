import prisma from "@/utils/prismadb";

type Params = { movieId: string };

export const getMovieById = async ({ movieId }: Params) => {
  try {
    const uniqueMovie = prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!uniqueMovie) {
      throw new Error("Cannot find movie");
    }

    return uniqueMovie;
  } catch (error: any) {
    throw new Error(error);
  }
};
