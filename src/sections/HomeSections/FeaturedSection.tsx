import { useEffect, useState } from "react";

import { ProjectsTop } from "@/types/ProjectsTop";
import { fetchTopProject } from "@api/request";
import ProjectCard from "@components/ProjectCard";

const FeaturedSection = () => {
  const [projects, setProject] = useState<ProjectsTop[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFunds = async () => {
      try {
        const data: ProjectsTop[] = await fetchTopProject();
        setProject(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadFunds();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <ul className="funs_list">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.projectName} />
        ))}
      </ul>
    </div>
  );
};

export default FeaturedSection;
