import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MapIcon from '@mui/icons-material/Map';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const SideMenu = () => {
  return (
    <List>
      <ListItem button component="a" href="/">
        <ListItemIcon>
          <MapIcon />
        </ListItemIcon>
        <ListItemText primary="避難所" />
      </ListItem>
      <ListItem button component="a" href="/contribution">
        <ListItemIcon>
          <VolunteerActivismIcon />
        </ListItemIcon>
        <ListItemText primary="防災備蓄に貢献" />
      </ListItem>
    </List>
  );
};

export default SideMenu;
