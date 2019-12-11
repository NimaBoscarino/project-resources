/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/layout.css"
import "../styles/custom.css"

const Layout = ({ children, setSearch }) => {
  const [showInfo, setShowInfo] = useState(false)
  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // Look into improving the tab indexing, popup elements are selected last -- annoying!!
  return (
    <>
      {showInfo && (
        <div
          className="popup-container"
          onClick={toggleInfo}
          onKeyPress={toggleInfo}
          role="button"
          tabIndex="0"
        >
          <div className="popup">
            <button className="close-button" onClick={toggleInfo}>
              &times;
            </button>
            <h2>The best place to find final project resources!</h2>
            <p>
              Tons of students have worked on final projects at Lighthouse Labs.
              Why not capitalize on their struggles? This website collects
              useful boilerplates, tutorials, npm modules, and general tips from
              instructors, mentors, and students.
            </p>
            <p>
              If you find anything that you'd like to add to this list, please
              make a pull request over on the{" "}
              <a href="https://github.com/NimaBoscarino/project-resources">
                GitHub repo
              </a>
              .
            </p>
          </div>
        </div>
      )}
      <Header
        siteTitle={data.site.siteMetadata.title}
        setSearch={setSearch}
        toggleInfo={toggleInfo}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: "1rem",
        }}
      >
        <main>{children}</main>
        <hr />
        <footer>
          <a href="https://twitter.com/NimaBoscarino">@NimaBoscarino</a> -&nbsp;
          <a href="https://nimaboscarino.github.io">nimaboscarino.github.io</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
