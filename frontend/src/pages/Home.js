import { Box } from "@mui/material";
import NavigationComponent from "../components/navigationComponent";
import LoginComponent from "../components/loginComponent";
import AudioListComponent from "../components/audioListComponent";

function Home() {
    return (
        <Box>
            <Box>
                <NavigationComponent />
            </Box>
            <Box>
                <LoginComponent/>
            </Box>
            <Box>
               <AudioListComponent/> 
            </Box>
        </Box>
    )
}

export default Home;