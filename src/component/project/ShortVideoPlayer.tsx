import { useState } from "react";

export type shortVideoplayerType = {
  imageUrl: string;
  videoUrl: string;
};
const ShortVideoPlayer = (props: shortVideoplayerType) => {
  const { imageUrl, videoUrl } = props;
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleOnMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    const videoElement = e.currentTarget.querySelector("video");
    if (videoElement) {
      videoElement.play();
    }
    setIsHovered(true);
  };

  const handleOnMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
    const videoElement = e.currentTarget.querySelector("video");
    if (videoElement) {
      videoElement.pause();
    }
    setIsHovered(false);
  };

  return (
    <div
      className="relative border-10 border-red-300 "
      onMouseOver={handleOnMouseOver}
      onMouseOut={handleOnMouseOut}
    >
      <div
        className={`w-96  ${
          isHovered ? "p-2 border-10 border-red shadow-xl" : ""
        }`}
      >
        <img
          className={` ${isHovered ? "hidden" : "  block"}`}
          src={imageUrl}
          alt=""
        />
        <video
          className={`absolute top-0 left-0 transition-transform duration-300  ${
            isHovered ? " scale-110 opacity-100 " : " scale-100 opacity-0"
          }`}
          src={videoUrl}
          loop
          muted
          preload="none"
          controls
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default ShortVideoPlayer;
