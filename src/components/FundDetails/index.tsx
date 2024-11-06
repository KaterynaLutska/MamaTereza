import { FC, useContext } from "react";
import { useParams } from "react-router-dom";

import ProjectDetails from "@components/ProjectDetails";
import { FundsContext } from "@contexts/FundsContext";
import { FundsContextProps } from "@contexts/types/FundsContext";
import { findFundById } from "@helpers/findFundById";
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const FundDetails: FC = () => {
  const { funds } = useContext<FundsContextProps>(FundsContext);
  const { slug } = useParams();

  const fundId = parseInt(slug?.split("-").pop() || "", 10);
  const fund = findFundById(funds, fundId);

  if (!fund) {
    return <p>Fund not found</p>;
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Card sx={{ display: "flex", flexDirection: "column", maxWidth: 800, margin: "auto" }}>
        <CardMedia component="img" image={fund.imageURL} alt={fund.name} sx={{ height: 300 }} />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {fund.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {fund.info}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Capital</Typography>
              <Typography variant="body1">${fund.capital.toLocaleString()}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Founded Year</Typography>
              <Typography variant="body1">{fund.foundedYear}</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <Box sx={{ padding: 2 }}>
          <Typography variant="h5" gutterBottom>
            Projects
          </Typography>
          {fund.projects.map((project) => (
            <ProjectDetails project={project} />
          ))}
        </Box>
      </Card>
    </Box>
  );
};

export default FundDetails;
