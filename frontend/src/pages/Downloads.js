import { Box } from "@mui/material";
import Topbar from "../components/Navbar";
import DownloadForm from "../components/downlaodsForm";

const Downloads=()=>{
    return(
        <Box>
            <Topbar/>
            <Box>
                <DownloadForm/>
            </Box>
        </Box>
    )
}


export default Downloads;