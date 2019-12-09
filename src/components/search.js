import React from 'react'

const Search = ({ setSearch }) => {
  return (
    <input
      placeholder="Search by tag"
      className="search-input"
      onChange={(e) => setSearch(e.target.value)}
      type="text"></input>
  )
}

export default Search