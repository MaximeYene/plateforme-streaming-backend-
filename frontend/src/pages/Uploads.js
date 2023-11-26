import { Box } from "@mui/material";
import Formular from "../components/UploadsForm";
import Topbar from "../components/Navbar";


const Uploads = () => {
    return (
        <Box>
            <Topbar />
            <Box sx={{
                display:'flex',
                justifyContent:'center'
            }} >
                <Formular />
            </Box>
        </Box>
    )
}

export default Uploads;
