import './App.css';
import Auth from './MyComponents/Auth'
import Home from './MyComponents/Home/home';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>

      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>} />
        


      </Routes>



    </Router>
    

    
    
    </>

    
  );
}

export default App;
