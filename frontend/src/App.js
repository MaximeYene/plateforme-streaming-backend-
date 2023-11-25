import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Uploads from "./pages/Uploads";
import Downloads from "./pages/Downloads";


function App(){
  return(
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/uploads" element={<Uploads/>} />
            <Route path="/downloads" element={<Downloads/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
