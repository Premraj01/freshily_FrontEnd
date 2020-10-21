/** @format */

import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image, Container } from 'react-bootstrap'

const Story = ({ story }) => {
  return (
    <>
      <Container className='cont my-3 p-3 rounded'>
        <a href={`/story/${story._id}`}>
          <Card.Img className='image' src={story.image} variant='top' />
          <div className='middle'>
            <div className='text'>{story.name}</div>
          </div>
        </a>
      </Container>
    </>
  )
}

export default Story
