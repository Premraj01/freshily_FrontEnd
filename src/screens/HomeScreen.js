/** @format */

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCarousel from '../components/ProductCarousel'
import Categories from '../components/Categories'
import Option from '../components/Options'
import Pagination from '../components/ProductPagination'
import stories from '../products'
import { Container } from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <>
      <Option stories={stories} />
      <>
        <ProductCarousel stories={stories} />
      </>
      <>
        {' '}
        <Categories stories={stories} />
      </>

      <hr />

      <Pagination stories={stories} />
    </>
  )
}

export default HomeScreen
