import Template from 'pages/Template';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import OpenStreetMap from 'components/OpenStreetMap';
import { UpSpeedDial } from 'components/SpeedDial';

function DashboardContent() {
  return (
    <Template>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <OpenStreetMap />
            <UpSpeedDial />
          </Paper>
        </Grid>
      </Grid>
    </Template>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
