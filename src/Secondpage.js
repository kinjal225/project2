
// import React from 'react'
import { Link } from "react-router-dom";
import NavBar from "./components/Navbar";


function Secondpage() {
    return (
        <div>

            <NavBar/>

            <h6>This is the second page</h6>
            <Link to="/" className='p-2'>Home</Link>
            {/* <Link to="/Firstpage" className='p-2'>Firstpage</Link> */}
        </div>
    )
}

export default Secondpage