import { Box } from "@mui/material";
import Choice from "../components/HomeComponent";
import Topbar from "../components/Navbar";

function Home(){
    return(
        <Box>
            <Topbar/>
            <Box sx={{
                display:'flex',
                justifyContent:'center'
            }} >
                <Choice/>
            </Box>
        </Box>
    )
}

export default Home;