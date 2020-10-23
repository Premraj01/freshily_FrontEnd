/** @format */

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Story from '../components/Story'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Row, Col, Container, Figure } from 'react-bootstrap'
import Companies from '../Company'

const StoriesScreen = () => {
  return (
    <Container>
      <Row>
        {Companies.map((company) => (
          <Col sm={12} md={6} lg={4} xl={6}>
            <Story company={company} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default StoriesScreen
