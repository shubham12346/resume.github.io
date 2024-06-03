export type shortVideoplayerType = {
  imageUrl: string;
  videoUrl: string;
};
const ShortVideoPlayer = (props: shortVideoplayerType) => {
  const { imageUrl, videoUrl } = props;

  return (
    <div className="relative border-2 border-red-700">
      <img className="absolute" src={imageUrl} alt="" />
      <video src={videoUrl} loop muted controls />
    </div>
  );
};

export default ShortVideoPlayer;
