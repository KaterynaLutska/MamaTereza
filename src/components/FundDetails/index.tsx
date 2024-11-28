import { FC, useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import { Fund } from "@/types/Fund";
import { fetchFundsBySlug } from "@api/request";
import Loader from "@components/Loader";
import { FundsContext } from "@contexts/FundsContext";
import { FundsContextProps } from "@contexts/types/FundsContext";
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const FundDetails: FC = () => {
  const effectWasExecuted = useRef(false);

  const { fundsBySlug, updateFunds, isLoaded, setIsLoaded } = useContext<FundsContextProps>(FundsContext);

  const { slug } = useParams();

  const fund = slug ? fundsBySlug[slug] : undefined;

  const loadFund = () => {
    if (slug && !fund) {
      fetchFundsBySlug(slug)
        .then((data: Fund) => {
          setIsLoaded(true);
          updateFunds(data);
        })
        .catch((error) => {
          console.error("Failed to load funds:", error);
        })
        .finally(() => {
          setIsLoaded(false);
        });
    }
  };

  useEffect(() => {
    if (!effectWasExecuted.current && !fund && !isLoaded) {
      loadFund();
      effectWasExecuted.current = true;
    }
    if (fund) {
      setIsLoaded(false);
    }
  }, []);

  if (isLoaded) {
    return <Loader />;
  }

  return (
    <Box sx={{ padding: 4 }}>
      {fund && (
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
            {/* {getProjectsByFund?.map((project) => (
              <ProjectDetails project={project} key={project.id} slug={slug} updateProject={updateProject} />
            ))} */}
          </Box>
        </Card>
      )}
    </Box>
  );
};

export default FundDetails;
