import { Button } from "@mui/material"
import Box from "@mui/material/Box";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const LoginComponent = () => {

    return (
        <Box sx={{
            display:'flex',
            justifyContent:'space-between',
            margin:'0 2%',
            padding:'1%',
            alignItems:'center'
        }} >
            <Box>
                <ArrowBackIosIcon/>
                <ArrowForwardIosIcon/>
            </Box>
            <Box>
                <Button>S'inscrire</Button>
                <Button variant="contained" >Connexion</Button>
            </Box>
        </Box>
    )
}


export default LoginComponent;