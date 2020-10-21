/** @format */

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Container } from 'react-bootstrap'

import stories from '../products'

const StoryScreen = ({ match }) => {
  const story = stories.find((p) => p._id === match.params.id)
  console.log(story)

  return (
    <main>
      <Container>
        <Row className='m-5'>
          <Card className='m-auto py-3 rounded'>
            <Col>
              <Card.Img src={story.image} variant='top' />
            </Col>
          </Card>

          <Col className='ml-5'>
            <h1>Title</h1>
            <span>
              <strong>{story.description}</strong>
            </span>
          </Col>
        </Row>
      </Container>
      <hr />
      <h1>
        <p className='text-center'>Name of Producers</p>
      </h1>
      <Row className='m-5'>
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
    </main>
  )
}
export default StoryScreen
