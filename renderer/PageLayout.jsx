import React from 'react'

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
