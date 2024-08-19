import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'

function Header(){

    const userLogin = useSelector(state => state.userLog)
    const {userInfo} = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return(
        
        <header>
        <Navbar variant="dark" expand="lg" className="bg-dark">
            <Container>

                <LinkContainer to="/">
                    <Navbar.Brand>Ghuni Shop</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/cart">
                        <Nav.Link ><i className="fa fa-shopping-cart"> </i>Cart</Nav.Link>
                    </LinkContainer>

                    {userInfo ? (

                            <NavDropdown title={userInfo.name} id='username'>
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>Log out</NavDropdown.Item>
                            </NavDropdown>

                    ) : (

                            <LinkContainer to="/login">
                                <Nav.Link ><i className="fa fa-user"> </i>Login</Nav.Link>
                            </LinkContainer>

                    )}

                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
        
    )
}

export default Header