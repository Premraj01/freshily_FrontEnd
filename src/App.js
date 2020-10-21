/** @format */

import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import StoriesScreen from './screens/StoriesScreen'
import StoryScreen from './screens/StoryScreen'

const App = () => {
  return (
    <Router>
      <Header />

      <Route path='/' component={HomeScreen} exact />
      <Route path='/story' component={StoriesScreen} exact />
      <Route path='/story/:id' component={StoryScreen} />

      <Footer />
    </Router>
  )
}

export default App
