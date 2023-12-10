import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { Link } from "react-router-dom";

const NavigationComponent = () => {
    return (
        <Box sx={{
            width:'30%',
            height:'500px',
            display: 'flex',
            flexDirection: 'column',
            float: 'left'
        }} >
            <h1>Logo</h1>
            <Link><Button startIcon={<HomeIcon />} >Accueil</Button></Link>
            <Link><Button startIcon={<SearchIcon />} >Rechercher</Button></Link>
            <Link><Button startIcon={<LibraryMusicIcon />} >Bibliothèque</Button></Link>
        </Box>
    )
}

export default NavigationComponent;