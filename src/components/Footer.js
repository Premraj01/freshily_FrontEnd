/** @format */

import React from 'react'
import {
  InputGroup,
  FormControl,
  Container,
  Button,
  Accordion,
  Nav,
  Row,
  Col,
} from 'react-bootstrap'

import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <Container className='py-3 '>
        <>
          <Row>
            <Col>
              <Accordion>
                <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                  Contact Us
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='0'>
                  <div className='py-2'>
                    <h6 style={{ color: 'white' }}>freshily@gmail.com</h6>
                    <h6 style={{ color: 'white' }}> 7392914914</h6>
                    <h6 style={{ color: 'white' }}> freshily@gmail.com</h6>
                  </div>
                </Accordion.Collapse>
              </Accordion>
            </Col>
            <Col>
              <Accordion>
                <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                  Other Links
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='0'>
                  <div className='py-2'>
                    <h6 style={{ color: 'white' }}>Gift Card</h6>
                    <h6 style={{ color: 'white' }}> Blogs</h6>
                    <h6 style={{ color: 'white' }}> Privacy Policy</h6>
                  </div>
                </Accordion.Collapse>
              </Accordion>
            </Col>
            <Col>
              <Accordion>
                <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                  Social Media
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='0'>
                  <Nav>
                    <Nav.Item style={{ align: 'center', color: 'white' }}>
                      &nbsp;&nbsp;
                      <FaInstagram />
                      &nbsp;Instagram
                    </Nav.Item>
                    <Nav.Item style={{ color: 'white' }}>
                      &nbsp; <FaTwitter /> Twitter
                    </Nav.Item>
                    <Nav.Item style={{ color: 'white' }}>
                      &nbsp; <FaFacebook /> Facebook
                    </Nav.Item>
                  </Nav>
                </Accordion.Collapse>
              </Accordion>
            </Col>
            <Col>
              <Accordion>
                <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                  Our newsletter.
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='0'>
                  <div>
                    <InputGroup className='mb-3'>
                      <FormControl
                        placeholder='Username'
                        aria-label='Username'
                        aria-describedby='basic-addon1'
                      />
                    </InputGroup>
                    <Button type='button' className='btn-block'>
                      Subscribe
                    </Button>
                  </div>
                </Accordion.Collapse>
              </Accordion>
            </Col>
          </Row>
        </>
      </Container>
    </footer>
  )
}

export default Footer
