import {  Routes,  Route,} from "react-router-dom";
import './App.css';
import './Header.css';
import Header from "./Header";
import Home from "./Home";
import Other from "./Other";


function App() {
  return (
    
          <div className="app" >
              <Routes>

                  <Route path ="/other" element={<> <Header /> <Other /> </>} />
                  
                  <Route path ="/" element={<> <Header /> <Home /> </>} /> 
                                                 
              </Routes>
            </div>
            
  );
}

export default App;
