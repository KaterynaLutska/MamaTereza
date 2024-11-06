import { useContext } from "react";
import ProjectCard from "@components/ProjectCard";
import { StoreContextProps } from "@contexts/types/StoreContext";
import { StoreContext } from "@contexts/StoreContext";

const FeaturedSection = () => {
	const { projectsTop} = useContext<StoreContextProps>(StoreContext)

  return (
    <div>
      <ul className="funs_list">
        {projectsTop.map((project) => (
          <ProjectCard project={project} key={project.projectName} />
        ))}
      </ul>
    </div>
  );
};

export default FeaturedSection;
