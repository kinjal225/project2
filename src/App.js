import logo from './logo.svg';
import './App.css';

//import Navbar from './components/Navbar';
//import Content from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Firstpage from "./Firstpage"
import Secondpage from "./Secondpage"

function App() {
  return (
    <div>


      {/* <Header/> */}


      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Firstpage" element={ <Firstpage/> } />
        <Route path="/Secondpage" element={ <Secondpage/> } />
      </Routes>


      {/* <Navbar/> */}
     



    </div>
  );
}

export default App;
