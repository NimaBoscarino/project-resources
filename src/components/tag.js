import React from 'react'

const Tag = ({children}) => {
  return (
    <span>
      <span className="tag">
        {children}
      </span>
    </span>
  )
}

export default Tag