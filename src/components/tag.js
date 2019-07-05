import React from 'react'

const Tag = ({children}) => {
  return (
    <span style={{
      fontSize: '12px',
      margin: '5px',
      border: 'solid 1px black',
      padding: '2px',
      borderRadius: '4px'
    }}>
      {children}
    </span>
  )
}

export default Tag