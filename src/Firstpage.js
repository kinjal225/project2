
// import React from 'react'
import { Link } from "react-router-dom";
import NavBar from "./components/Navbar";


function Firstpage() {
    return (
        <>
            <NavBar />
            <h6>This is the first page</h6>
             <Link to="/" className='p-2'>Home</Link>
            {/* <Link to="/Secondpage" className='p-2'>Secondtpage</Link>  */}
        </>
    )
}

export default Firstpage