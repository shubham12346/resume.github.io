import ShortVideoPlayer from "./ShortVideoPlayer";

export type projectDetailType = {
  websiteUrl: string;
  projectName: string;
  projectSummary: string;
  videoUrl: string;
  imageUrl: string;
};
export const ProjectDetail = (props: projectDetailType) => {
  const { projectName, projectSummary, websiteUrl, videoUrl, imageUrl } = props;
  return (
    <section className=" m-10 py-10 flex  mb-36 flex-col md:flex-row  ">
      <div className=" flex flex-col ">
        <h3 className="pb-2">
          <label htmlFor="projectName">Project Name :</label> {projectName}
        </h3>
        <div className="">
          <label htmlFor="description" className="pb-1">
            Description{" "}
          </label>
          <p className="w-[80%] text-wrap"> {projectSummary}</p>
        </div>
        <div className="pb-1 pt-2">
          <label htmlFor="websiteUrl">Website Url : </label>
          <a href={websiteUrl} id="websiteUrl" className=" underline">
            {websiteUrl}
          </a>
        </div>
        <div className="py-1">
          <label htmlFor="videoUrl">Video URL :</label>
          <a href={websiteUrl} id="videoUrl" className=" underline">
            {videoUrl}
          </a>
        </div>
      </div>
      <div className="relative ">
        <ShortVideoPlayer imageUrl={imageUrl} videoUrl={videoUrl} />
      </div>
    </section>
  );
};
