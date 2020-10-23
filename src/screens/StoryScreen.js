/** @format */

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Image, Container } from 'react-bootstrap'
import products from '../products'
import companies from '../Company'
import { RiStarSFill } from 'react-icons/ri'

const StoryScreen = ({ match }) => {
  const company = companies.find((p) => p._id === match.params.id)

  return (
    <>
      <Container className='jumbotron-transparent mt-5 '>
        <Row className='ml-5 '>
          <Col className='ml-5 ' sm={12} md={6} lg={4} xl={6}>
            <div>
              <Card.Img src={company.image} variant='top' />
            </div>
          </Col>

          <Col className='ml-5' sm={12} md={6} lg={4} xl={4}>
            <h1>{company.name}</h1>
            <span>
              <strong>{company.description}</strong>
            </span>
          </Col>
        </Row>
      </Container>
      <hr />
      <h1>
        <p className='text-center'>More by {company.name}</p>
      </h1>

      <div>
        <Row className='ml-5 '>
          {products.map((product) => (
            <>
              {company._id === product.brand.id ? (
                <Col sm={12} md={6} lg={4} xl={3}>
                  <Card className='my-3 p-3 rounded'>
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
              ) : null}
            </>
          ))}
        </Row>
      </div>
    </>
  )
}
export default StoryScreen
