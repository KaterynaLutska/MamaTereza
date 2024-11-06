import React from "react";

import { Fund } from "@/types/Fund";
import { Cancel, CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";

interface FundCardProps {
  fund: Fund;
  key: string;
}

const FundCard: React.FC<FundCardProps> = ({ fund, key }) => {
  function handleOnclick() {
    console.log("click");
  }

  return (
    <button key={key} onClick={handleOnclick}>
      <CardMedia component="img" alt={fund.name} height="140" src={fund.imageURL} />
      <CardContent>
        <Typography variant="h6" component="div">
          {fund.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {fund.foundedYear}
        </Typography>
        <div>
          <Typography variant="body1">Collected: ${fund.capital}</Typography>
        </div>
      </CardContent>
    </button>
  );
};

export default FundCard;
