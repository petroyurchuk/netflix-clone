import React from "react";
import getBillboardVideo from "@/actions/getBillboardVideo";
import PlayButton from "./PlayButton";

type Props = {};

const Billboard: React.FC = async (props: Props) => {
  const billboardVideoData = await getBillboardVideo();

  if (!billboardVideoData) return null;

  return (
    <div className="relative h-[56.25vw]">
      <video
        className="w-full h-full object-cover brightness-[60%] transition duration-500"
        autoPlay
        muted
        loop
        poster={billboardVideoData?.thumbnailUrl}
        src={billboardVideoData?.videoUrl}
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {billboardVideoData?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {billboardVideoData?.description}
        </p>
        <div className="flex items-center mt-3 md:mt-4 gap-3">
          <PlayButton movieId={billboardVideoData?.id} />
        </div>
      </div>
    </div>
  );
};
export default Billboard;
