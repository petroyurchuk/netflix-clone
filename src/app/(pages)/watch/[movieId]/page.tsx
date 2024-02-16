import { getMovieById } from "@/actions/getMovieById";
import GoBack from "@/components/GoBack";

type WatchParams = {
  movieId: string;
};

const Watch = async ({ params }: { params: WatchParams }) => {
  const movie = await getMovieById(params);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex items-center gap-8 bg-black bg-opacity-70">
        <GoBack />
        <p className="text-white text-xl md:text-3xl font-bold">
          <span className="font-light"> Перегляд </span>
          {movie?.title}
        </p>
      </nav>
      <video
        className="h-full w-full "
        autoPlay
        controls
        src={movie?.videoUrl}
      ></video>
    </div>
  );
};
export default Watch;
