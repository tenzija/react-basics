import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {

    return(
        <>
            <Navbar className='audiowide'>
                <LinkContainer to='/'>
                    <Navbar.Brand className='mt-1 mb-1 border-red'>
                        <span className='audiowide-navbar pt-2 pb-2 pl-1 pr-1 rounded size-lg'>THE DAILY NEWS</span>
                    </Navbar.Brand>
                </LinkContainer>
            </Navbar>
            <Nav className='audiowide-navbar justify-content-center'>
                <Nav.Item>
                    <LinkContainer to='/'>
                        <Nav.Link className='mt-1 mb-1'>
                            <span className='red pb-2 pt-2 pl-1 pr-1 rounded'>Home</span>
                        </Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to='/blog'>
                        <Nav.Link className='mt-1 mb-1'>
                            <span className='red pb-2 pt-2 pl-1 pr-1 rounded'>Blog</span>
                        </Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to='/news'>
                        <Nav.Link className='mt-1 mb-1'>
                            <span className='red pb-2 pt-2 pl-1 pr-1 rounded'>News</span>
                        </Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to='/latest'>
                        <Nav.Link className='mt-1 mb-1'>
                            <span className='red pb-2 pt-2 pl-1 pr-1 rounded'>Latest</span>
                        </Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to='/contact'>
                        <Nav.Link className='mt-1 mb-1'>
                            <span className='red pb-2 pt-2 pl-1 pr-1 rounded'>Contact</span>
                        </Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            </Nav>
        </>
    )
}


export default Header