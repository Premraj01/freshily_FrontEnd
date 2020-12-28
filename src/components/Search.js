/** @format */

import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { ImSearch } from 'react-icons/im'

const Search = () => {
  return (
    <>
      <Form className='mr-3' inline>
        <Form.Control
          type='text'
          name='q'
          placeholder='Search Products...'
          className='mr-sm-2 ml-sm-5'></Form.Control>
        <ImSearch type='submit' variant='outline-success' className='ml-2' />
      </Form>
    </>
  )
}

export default Search
