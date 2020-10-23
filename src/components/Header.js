/** @format */

import React, { useState } from 'react'
import { Navbar, Nav, Dropdown, Image, FormControl } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { AiOutlineLogin } from 'react-icons/ai'
import { GiThreeLeaves } from 'react-icons/gi'
import { ImLocation2 } from 'react-icons/im'
import Locations from '../Location'
import Search from './Search'

const Header = () => {
  const [value, setValue] = useState('')
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=''
      ref={ref}
      onClick={(e) => {
        e.preventDefault()
        onClick(e)
      }}>
      {children}
      &#x25bc;
    </a>
  ))

  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}>
          <FormControl
            autoFocus
            className='mx-3 my-2 w-auto'
            placeholder='Search Location'
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className='list-unstyled'>
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      )
    }
  )

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
            <Dropdown className='m-2'>
              <Dropdown.Toggle
                as={CustomToggle}
                id='dropdown-custom-components'>
                <ImLocation2 />
              </Dropdown.Toggle>

              <Dropdown.Menu as={CustomMenu}>
                {Locations.map((Location) => (
                  <Dropdown.Item Key={Location._id}>
                    <Image src={Location.logo} roundedCircle fluid />
                    &nbsp;&nbsp; {Location.city}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Search />

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
