/** @format */

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Carousel, Image, Container } from 'react-bootstrap'

const ProductCarousel = ({ stories }) => {
  return (
    <Carousel pause='hover' className='bg-transparent '>
      {stories.map((story) => (
        <Carousel.Item key={story.id}>
          <Image className='rounded' src={story.image} alt={story.name} fluid />
          <Carousel.Caption className='carousel-caption'>
            <h2>{story.title}</h2>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductCarousel
