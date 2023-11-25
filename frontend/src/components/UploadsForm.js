import { Box } from "@mui/material";
import Button from "@mui/material/Button";


const Formular=()=>{
    return(
        <Box>
            <form>
                <input type="text" name="Titre de l album" placeholder="Titre de l album" required />
                <input type="text" name="Nom de l artiste" placeholder="Nom de lartiste" required />
                <input type="file" name="file" placeholder="Veuiller inserer l labum" required />
                <Button>Upload</Button>
            </form>
        </Box>
    )
}

export default Formular;