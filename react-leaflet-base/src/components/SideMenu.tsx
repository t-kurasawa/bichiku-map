import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const SideMenu = () => {
  return (
    <List>
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
        <ListItemText primary="備蓄を分け合う" />
      </ListItem>
    </List>
  );
};

export default SideMenu;
