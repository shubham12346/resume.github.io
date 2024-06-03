import { PROJECTS } from "./constant";
import { ProjectDetail } from "./project/ProjectDetail";
const Project = () => {
  return (
    <div className="borderBottom py-10">
      {PROJECTS?.map((project, index) => (
        <div key={`${index}-${project.projectName}`}>
          <ProjectDetail {...project} />
        </div>
      ))}
    </div>
  );
};

export default Project;
