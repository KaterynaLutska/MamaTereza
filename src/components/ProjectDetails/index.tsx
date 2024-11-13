import { FC, useEffect, useState } from "react";

import { Project } from "@/types/Project";
import { fetchNewCollectedAmount } from "@api/request";
import DonateModal from "@components/DonateModal";
import { Button, Card, CardContent, Typography } from "@mui/material";

interface ProjectDetailsProps {
  project: Project;
  slug?: string;
  updateProject: any;
}
const ProjectDetails: FC<ProjectDetailsProps> = ({ project, slug, updateProject }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDonateClick = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleConfirmDonation = async (amount: number) => {
    await fetchNewCollectedAmount(amount, slug, project.id);
    updateProject(project.id, amount);
  };

  return (
    <Card key={project.id} sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">{project.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          Purpose: {project.purpose}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Goal: ${project.fundraisingGoal.toLocaleString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Collected: ${project.collected.toLocaleString()}
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: 1 }} onClick={handleDonateClick}>
          Donate
        </Button>
        <DonateModal
          open={isModalOpen}
          onClose={handleCloseModal}
          onConfirmDonation={handleConfirmDonation}
          updateProject={updateProject}
        />
      </CardContent>
    </Card>
  );
};
export default ProjectDetails;
