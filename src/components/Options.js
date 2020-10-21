/** @format */
import React, { useEffect, useState } from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'

const Options = ({ stories }) => {
  const columns = [{ dataField: 'title', text: '' }]

  return (
    <Nav className='ml-3' variant='transparent'>
      <NavDropdown title='Browse Groceries' id='nav-dropdown'>
        {stories.map((story) => (
          <NavDropdown.Item key={story.id}>{story.name}</NavDropdown.Item>
        ))}
      </NavDropdown>
      <Nav.Item>
        <Nav.Link>Shop</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Recepies</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>New In</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Options
