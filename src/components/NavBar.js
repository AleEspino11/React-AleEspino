import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function NavBar() {
        return (
          <Navbar className="Nav">
            <Container>
              <Navbar.Brand href="">My Anyme Store</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto me-0">
                  <Nav.Link href=""> Inicio</Nav.Link>
      
                  <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Figuras</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Ropa</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Mangas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Historietas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Accesorios</NavDropdown.Item>
                    

                  </NavDropdown>

                  <Nav.Link href="">Contacto</Nav.Link>

                  

                </Nav>
              </Navbar.Collapse>
               <CartWidget/> 
            </Container>

          

          </Navbar>
        );
   
};

export default NavBar;
