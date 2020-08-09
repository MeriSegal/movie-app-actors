import React from 'react';
import {Navbar, Nav } from 'react-bootstrap'

class NavBar extends React.Component {

    constructor(props) {
        super(props);            
    }

   
    render() {
                
        return (            
            <div>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#/actors">Actors</Nav.Link>                       
                        </Nav>
                        <Nav>
                            <Nav.Link target="void" href="https://www.themoviedb.org">TMDB</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>                    
            </div>
        );
    }
}

export default NavBar;