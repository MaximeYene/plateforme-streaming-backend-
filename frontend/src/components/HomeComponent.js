import Button from '@mui/material/Button';
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';
import '../styles/Home.css'



const Choice = () => {
    return (
        <Box className='choice-container' >
            <Box>
                <Button sx={{ fontSize: '25px' }} variant='contained' ><Link style={{ textDecoration: 'none', color: '#fff' }} to='/uploads'>Uploads</Link></Button>
            </Box>
            <Box>
                <Button sx={{ fontSize: '25px' }} variant='contained' ><Link style={{ textDecoration: 'none', color: '#fff' }} to='/recover'>Recover</Link></Button>
            </Box>
            <Box>
                <Button sx={{ fontSize: '25px' }} variant='contained' ><Link style={{ textDecoration: 'none', color: '#fff' }} to='/downloads'>Downloads</Link></Button>
            </Box>

        </Box>
    )
}

export default Choice;