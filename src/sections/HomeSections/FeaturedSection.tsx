import { useContext } from "react";

import ProjectCard from "@components/ProjectCard";
import { ProjectsContext } from "@contexts/ProjectsContext";
import { ProjectsContextProps } from "@contexts/types/ProjectsContext";

const FeaturedSection = () => {
  const { topProjects } = useContext<ProjectsContextProps>(ProjectsContext);

  return (
    <div>
      <h2>Our Top Projects</h2>
      <ul className="funds_list">
        {topProjects.map((topProject) => (
          <ProjectCard project={topProject} key={topProject.name} />
        ))}
      </ul>
    </div>
  );
};

export default FeaturedSection;
