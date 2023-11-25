import { Box } from "@mui/material";


const TitleUploads=()=>{
    const title='Albums';
    const description='CREATE ALBUMS AND ADD MEDIA';
    return(
        <Box sx={{
            display:'flex',
            justifyContent:'space-between'
        }} >
            <h2>{title}</h2>
            <h4>{description}</h4>
        </Box>
    )
}

export default TitleUploads;