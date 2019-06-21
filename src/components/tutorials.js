import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Tutorials = ({ }) => {

  return (
    <div>
      <h1>Tutorials</h1>
      <p>Sometimes we just need a walkthrough! Here are some articles, videos, and tutorial series that you might find helpful.</p>
      <em>These are coming soon...</em>
    </div>
  )
}

Tutorials.defaultProps = {
}

Tutorials.propTypes = {
}

export default Tutorials
