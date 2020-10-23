/** @format */

import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image, Container } from 'react-bootstrap'

const Story = ({ company }) => {
  return (
    <>
      <Container className='cont my-3 p-3 rounded'>
        <a href={`/story/${company._id}`}>
          <Card.Img className='image' src={company.image} variant='top' />
          <div className='middle'>
            <div className='text'>{company.name}</div>
          </div>
        </a>
      </Container>
    </>
  )
}

export default Story
