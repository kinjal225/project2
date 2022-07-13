
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

function NavBar(){
    return(

            <>
            
            <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                {/* <Nav.Link href="#link">Firstpage</Nav.Link>
                                <Nav.Link href="#link">Secondpage</Nav.Link> */}
                                
                                <Link to="/Firstpage" className='p-2'>Firstpage</Link>
                                <Link to="/Secondpage" className='p-2'>Secondpage</Link>
                                <Nav.Link href="#link">content</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            
            
            </>




    )
}
export default NavBar