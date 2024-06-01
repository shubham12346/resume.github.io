export type projectDetailType = {
  websiteUrl: string;
  projectName: string;
  projectSummary: string;
  videoUrl: string;
};
export const ProjectDetail = (props: projectDetailType) => {
  const { projectName, projectSummary, websiteUrl, videoUrl } = props;
  return (
    <section className="flex flex-col">
      <h3>{projectName}</h3>
      <p>{projectSummary}</p>
      <div>
        <label htmlFor="websiteUrl">Website Url : </label>
        <a href={websiteUrl} id="websiteUrl" className=" underline">
          {websiteUrl}
        </a>
      </div>
      <div>
        <label htmlFor="videoUrl">Video URL :</label>
        <a href={websiteUrl} id="videoUrl" className=" underline">
          {videoUrl}
        </a>
      </div>
    </section>
  );
};
