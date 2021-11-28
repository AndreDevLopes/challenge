import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom"

import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import Seach from "./pages/Seach/Seach"
import All from "./pages/All/All"

interface PrivateRouteProps{
    children : any,
}


function PrivateRoute (props: PrivateRouteProps){
    const token = localStorage.getItem('token')

    return token ? props.children : <Navigate to="/" />;
}

function IsAuth(props: PrivateRouteProps){
    const token = localStorage.getItem('token')
   
    return token ? <Navigate to="/all" /> : props.children; 
}


const Rotas = () => {
   return(
       <Router>
           <Routes>
              <Route path="/" element={<IsAuth>
                      <Login />
              </IsAuth>} />
              <Route path="/home" element={<PrivateRoute>
                  <Home />
              </PrivateRoute>}/>
              <Route path="/seach" element={<PrivateRoute>
                  <Seach />
              </PrivateRoute>} />
              <Route path="/all" element={<PrivateRoute>
                  <All />
              </PrivateRoute>} />
           </Routes>
       </Router>
   )
}

export default Rotas;