import { Box } from "@mui/material";
import { Link } from "react-router-dom";


const Topbar=()=>{
    const title='Albums';
    const description='CREATE ALBUMS AND ADD MEDIA';
    return(
        <Box sx={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center'
        }} >
            <h2>{title}</h2>
            <Box sx={{
                display:'flex',
                width:'25%',
                justifyContent:'space-between'
            }} >
                <Link to='/'>Home</Link>
                <Link to='/uploads'>Uploads</Link>
                <Link to='/downloads'>Downloads</Link>
            </Box>
            <h4>{description}</h4>
        </Box>
    )
}

export default Topbar;