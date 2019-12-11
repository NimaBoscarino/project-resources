import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Search from "./search"

const Header = ({ siteTitle, setSearch, toggleInfo }) => (
  <header>
    <div className="inner-header">
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          {siteTitle}
        </h1>
      </Link>
      <div style={{ display: "block", minWidth: "fit-content" }}>
        <Search setSearch={setSearch} />
        <button onClick={toggleInfo}>&#9432;</button>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
