import prisma from "@/utils/prismadb";

export default async function getAllMovies() {
  try {
    const movies = await prisma.movie.findMany();

    return movies;
  } catch (error: any) {
    throw new Error(error);
  }
}
