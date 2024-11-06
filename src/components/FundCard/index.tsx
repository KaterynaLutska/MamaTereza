import React from 'react';
import { CardContent, CardMedia, Typography, IconButton, Card } from '@mui/material';
import { CheckCircle, Cancel } from '@mui/icons-material';
import { Fund } from '@/types/Fund';


interface FundCardProps {
  fund: Fund;
	key: string;
}

const FundCard: React.FC<FundCardProps> = ({ fund, key }) => {

	function handleOnclick () {
		console.log('click');
		
	}

  return (
		<button key={key} onClick={handleOnclick}>
      <CardMedia
        component="img"
        alt={fund.name}
        height="140"
        src={fund.imageURL}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {fund.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {fund.foundedYear}
        </Typography>
        <div>
          <Typography variant="body1">
            Collected: ${fund.capital}
          </Typography>
        </div>
      </CardContent>
    </button>
  );
};

export default FundCard;
