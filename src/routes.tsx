import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"

import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import Seach from "./pages/Seach/Seach"


const Rotas = () => {
   return(
       <Router>
           <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/seach" element={<Seach />} />
           </Routes>
       </Router>
   )
}

export default Rotas;