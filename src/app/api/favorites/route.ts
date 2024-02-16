import { NextResponse, NextRequest } from "next/server";
import getCurrentUser from "@/actions/getCurrentUser";
import prisma from "@/utils/prismadb";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { movieId } = body;
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      throw new Error("You need logged in");
    }

    const existingMovie = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!existingMovie) {
      throw new Error("Movie don't found");
    }

    const user = await prisma.user.update({
      where: {
        email: currentUser.email || "",
      },
      data: {
        favoriteIds: { push: movieId },
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { movieId } = body;
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      throw new Error("You need logged in");
    }

    const existingMovie = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!existingMovie) {
      throw new Error("Movie don't found");
    }

    const updatedFavoritesIds = currentUser.favoriteIds.filter(
      (favoriteId) => favoriteId !== movieId
    );

    const user = await prisma.user.update({
      where: {
        email: currentUser.email || "",
      },
      data: {
        favoriteIds: updatedFavoritesIds,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.error();
  }
}
