
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';



export default function SearchForm() {

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <MenuIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search OpenStreetMaps"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton 
                type="submit" sx={{ p: '10px' }} aria-label="search"
            >
                <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
                onClick={ () => { alert('hi!') }}
                color="primary" sx={{ p: '10px' }} aria-label="directions"
            >
                <DirectionsIcon />
            </IconButton>
        </Paper>
    )
}
