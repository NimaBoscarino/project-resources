import React from 'react'

const Tag = ({children}) => {
  return (
    <div>
      <span className="tag">
        {children}
      </span>
    </div>
  )
}

export default Tag