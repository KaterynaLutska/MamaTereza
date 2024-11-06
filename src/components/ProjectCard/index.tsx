import { FC } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { ProjectTop } from "@/types/ProjectTop";

interface ProjectCardProps {
  key: string;
  project: ProjectTop;
}

const ProjectCard: FC<ProjectCardProps> = ({ key, project }) => {
  return (
    <Card key={key} sx={{ maxWidth: 345, margin: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {project.projectName}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Мета збору: {project.fundraisingGoal} грн
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Зібрано: {project.collected} грн
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
          Мета: {project.purpose}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default ProjectCard;
