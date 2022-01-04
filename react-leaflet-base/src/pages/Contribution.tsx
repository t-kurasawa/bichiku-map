import Template from 'pages/Template';
import ContributeStockpile from 'components/ContributeStockpile';
import Stockpile from 'components/Stockpile';

import Grid from '@mui/material/Grid';

const Contribution = () => {
  return (
    <Template>
      <Grid container spacing={3}>
        <ContributeStockpile />
        <Stockpile />
      </Grid>
    </Template>
  );
};

export default Contribution;
