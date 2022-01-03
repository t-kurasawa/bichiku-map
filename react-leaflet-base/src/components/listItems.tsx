import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';


export const mainListItems = (
  <div>
    <ListItem button component="a" href="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="防災備蓄マップ" />
    </ListItem>
    <ListItem button component="a" href="/contribution">
      <ListItemIcon>
        <VolunteerActivismIcon />
      </ListItemIcon>
      <ListItemText primary="分け合う備蓄" />
    </ListItem>

  </div>
);

export const secondaryListItems = <div></div>;
