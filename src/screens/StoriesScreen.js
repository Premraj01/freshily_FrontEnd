/** @format */

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Story from '../components/Story'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Row, Col, Container, Figure } from 'react-bootstrap'
import stories from '../products'

const StoriesScreen = () => {
  console.log(stories)

  return (
    <Container>
      <Row>
        {stories.map((story) => (
          <Col sm={12} md={6} lg={4} xl={6}>
            <Story story={story} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default StoriesScreen
