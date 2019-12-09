import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Search from "./search"

const Header = ({ siteTitle, setSearch, toggleInfo }) => (
  <header
    style={{
      background: `#17a3dd`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
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
