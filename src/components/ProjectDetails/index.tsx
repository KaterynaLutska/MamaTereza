import { FC } from "react";

import { Project } from "@/types/Project";
import { Button, Card, CardContent, Typography } from "@mui/material";

interface ProjectDetailsProps {
  project: Project;
}
const ProjectDetails: FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <Card key={project.id} sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">{project.projectName}</Typography>
        <Typography variant="body2" color="text.secondary">
          Purpose: {project.purpose}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Goal: ${project.fundraisingGoal.toLocaleString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Collected: ${project.collected.toLocaleString()}
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: 1 }}>
          Donate
        </Button>
      </CardContent>
    </Card>
  );
};
export default ProjectDetails;
