import React from 'react'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import './PageLayout.css'

function PageLayout({ children }) {
  console.log('children', children)
  return (
    <React.StrictMode>
      <div className="App">
        <Navigation />
        {children}
        <Footer />
      </div>
    </React.StrictMode>
  )
}

export { PageLayout }
