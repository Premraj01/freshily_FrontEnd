/** @format */

import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'

const Photos = ({ stories }) => {
  return (
    <Row>
      {stories.map((product) => (
        <Col>
          <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
              <Card.Img src={product.image} variant='top' />
            </Link>
            <Card.Body>
              <Link to={`/product/${product._id}`}>
                <Card.Title as='div'>
                  <strong>{product.name}</strong>
                </Card.Title>
              </Link>

              <Card.Text as='div'>3.4</Card.Text>

              <Card.Text as='h3'>${product.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Photos
