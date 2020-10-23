/** @format */
import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { Nav, NavDropdown, Navbar, Button } from 'react-bootstrap'

const Options = ({ stories }) => {
  return (
    <Navbar expand='lg' variant='primary' collapseOnSelect>
      <Navbar.Toggle aria-controls='basic-navbar-nav'>
        <AiOutlineDown />
      </Navbar.Toggle>
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <NavDropdown title='Browse Groceries'>
            {stories.map((story) => (
              <NavDropdown.Item key={story.id}>{story.name}</NavDropdown.Item>
            ))}
          </NavDropdown>

          <Nav.Link href='/produce'>Shop</Nav.Link>
          <Nav.Link href='/produce'>Recipes</Nav.Link>
          <Nav.Link href='/produce'>New In</Nav.Link>
          <Nav.Link href='/aboutus'>Offers</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Options
/* < Nav className = 'ml-3' variant = 'transparent' >
    <NavDropdown title='Browse Groceries' id='nav-dropdown'>
      {stories.map((story) => (
        <NavDropdown.Item key={story.id}>{story.name}</NavDropdown.Item>
      ))}
    </NavDropdown>*/
