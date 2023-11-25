import Button from '@mui/material/Button';
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';



const Choice=()=>{
    return(
        <Box sx={{
            display:'flex'

            }} >
            <Button variant='contained' ><Link to='/uploads'>Uploads</Link></Button>
            <Button variant='contained' ><Link to='/downloads'>Downloads</Link></Button>
        </Box>
    )
}

export default Choice;