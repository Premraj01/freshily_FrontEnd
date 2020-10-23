/** @format */

import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'
import { RiStarSFill } from 'react-icons/ri'

const Photos = ({ stories }) => {
  return (
    <Row>
      {stories.map((product) => (
        <Col>
          <Card className='my-1 p-1 rounded'>
            <Link to={`/product/${product._id}`}>
              <Card.Img src={product.image} variant='top' />
            </Link>
            <Card.Body>
              <Row>
                <Col>
                  {' '}
                  <Link to={`/story/${product.brand.id}`}>
                    <Card.Text>{product.brand.brand_name}</Card.Text>
                  </Link>
                  <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                      <strong>{product.name}</strong>
                    </Card.Title>
                  </Link>
                </Col>
                <Col sm={4}>
                  <Card.Text>
                    <RiStarSFill />
                    {product.rating}
                  </Card.Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Text as='h3'>${product.price}</Card.Text>
                </Col>
                <Col>
                  <a href='#' class='btn btn-primary'>
                    Add to cart
                  </a>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Photos
