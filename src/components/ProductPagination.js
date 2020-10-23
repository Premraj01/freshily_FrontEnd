/** @format */

import React, { useState, useEffect } from 'react'
//import Photos from '../components/Photos'
import axios from 'axios'
import { Button, Container } from 'react-bootstrap'
import Product from './Product'
import Pagination from './Pagination'

const ProductPagination = ({ stories }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [photosPerPage] = useState(10)

  // Get current posts
  const indexOfLastPhoto = currentPage * photosPerPage
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage
  const currentPhotos = stories.slice(indexOfFirstPhoto, indexOfLastPhoto)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className='mb-5'>
      <div>
        <h1 className=' text-primary mb-3 mt-1 '>Our Products</h1>
        <Product stories={stories} />
        <Pagination
          photosPerPage={photosPerPage}
          totalPhotos={stories.length}
          paginate={paginate}
        />
      </div>
      <div>
        <h1 className=' text-primary mb-3 '>Our Products</h1>
        <Product stories={stories} />
        <Pagination
          photosPerPage={photosPerPage}
          totalPhotos={stories.length}
          paginate={paginate}
        />
      </div>
    </div>
  )
}

export default ProductPagination
