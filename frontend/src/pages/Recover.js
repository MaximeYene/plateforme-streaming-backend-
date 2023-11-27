import { Box } from "@mui/material";
import RecoverFormular from "../components/RecoverForm"
import Topbar from "../components/Navbar";

const Recover = () => {
    return (
        <Box>
            <Topbar/>
            <Box sx={{
                marginTop:'5%',
                display:'flex',
                justifyContent:'center'
                }} >
                <RecoverFormular />
            </Box>

        </Box>
    )
}

export default Recover;
