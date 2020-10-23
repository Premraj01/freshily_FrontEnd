/** @format */

import React, { useState, useEffect } from 'react'
//import Photos from '../components/Photos'
import axios from 'axios'
import { Button, Row, Col, Image, Figure, Container } from 'react-bootstrap'
import Pagination from './Pagination'

const Categories = ({ stories }) => {
  return (
    <div
      className='parent jumbotron-transparent mt-5 ml-5 bg-transprent '
      fluid>
      {stories.map((story) => (
        <Figure className='item' key={story.id}>
          <Figure.Image
            className='rounded ml-5%'
            style={{ height: 80, width: 80 }}
            src={story.image}
          />
          <Figure.Caption className=''>{story.name}</Figure.Caption>
        </Figure>
      ))}
    </div>
  )
}

export default Categories
