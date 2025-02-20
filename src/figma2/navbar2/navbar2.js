import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './navbar2.css'


function Navbar2(){
    // console.log(Navbar);
    
    return(
        <div>

            <Navbar  expand="md" className="navbar">
                <Navbar.Brand id="title">CandyUI</Navbar.Brand>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse className='Col'>
                <Nav>
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Services</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    )
}
export default Navbar2;