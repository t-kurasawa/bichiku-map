import Template from 'pages/Template';
import ContributeStockpile from 'components/ContributeStockpile';
import StockpileType from 'components/StockpileType';

import Grid from '@mui/material/Grid';

const Contribution = () => {
  return (
    <Template>
      <Grid container spacing={3}>
        <ContributeStockpile />
        <StockpileType />
      </Grid>
    </Template>
  );
};

export default Contribution;
