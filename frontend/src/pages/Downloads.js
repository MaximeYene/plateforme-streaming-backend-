import { Box } from "@mui/material";
import DownloadsFormular from "../components/DownloadsForm";
import Topbar from "../components/Navbar";

const Downloads = () => {
    return (
        <Box>
            <Topbar/>
            <Box sx={{
                marginTop:'5%',
                display:'flex',
                justifyContent:'center'
                }} >
                <DownloadsFormular />
            </Box>

        </Box>
    )
}

export default Downloads;
