/** @format */

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Carousel, Image, Container } from 'react-bootstrap'

const ProductCarousel = ({ stories }) => {
  return (
    <>
      <Carousel pause='hover' className='m-4 bg-transparent'>
        {stories.map((story) => (
          <Carousel.Item key={story._id}>
            <Link to={`/story/${story._id}`}>
              <Image
                className='mt-3 mb-3 rounded'
                src={story.image}
                alt={story.name}
                fluid
              />
              <Carousel.Caption className='carousel-caption'>
                <h3>
                  {story.name} (${story.price})
                </h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}

export default ProductCarousel
