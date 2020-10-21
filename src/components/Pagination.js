/** @format */

import React from 'react'

const Pagination = ({ photosPerPage, totalPhotos, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPhotos / photosPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className=''>
      <ul className='pagination ml-10'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
