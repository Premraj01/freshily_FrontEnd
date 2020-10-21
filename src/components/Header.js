/** @format */

import React from 'react'
import { Navbar, Nav, Dropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { AiOutlineLogin } from 'react-icons/ai'
import { GiThreeLeaves } from 'react-icons/gi'
const Header = () => {
  return (
    <header>
      <Navbar expand='lg' variant='dark' collapseOnSelect>
        <Navbar.Brand href='/'>
          Freshily
          <GiThreeLeaves />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/aboutus'>About Us</Nav.Link>
            <Nav.Link href='/produce'>Our Produces</Nav.Link>
            <LinkContainer to='/story'>
              <Nav.Link>Farm Blog</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='/location'>Location</Nav.Link>
            <Nav.Link href='/signup'>
              <AiOutlineLogin />
              &nbsp;Sign In & Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
