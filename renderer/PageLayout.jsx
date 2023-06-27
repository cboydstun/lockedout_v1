import React from 'react'

import './PageLayout.css'

function PageLayout({ children }) {
  return (
    <React.StrictMode>
      <div className="App">
        {children}
      </div>
    </React.StrictMode>
  )
}

export { PageLayout }
