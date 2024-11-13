import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Fund } from "@/types/Fund";
import { generateSlug } from "@helpers/generateSlug";
import { CardContent, CardMedia, Typography } from "@mui/material";

interface FundCardProps {
  fund: Fund;
  key: string;
}

const FundCard: FC<FundCardProps> = ({ fund }) => {
  const navigate = useNavigate();

  function handleOnclick() {
    const slug = generateSlug(fund.name);
    navigate(`/funds/${slug}`);
  }

  return (
    <button key={fund.id} onClick={handleOnclick}>
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
