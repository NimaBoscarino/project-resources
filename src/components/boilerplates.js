import React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Tag from './tag'

const BoilerplateItem = ({data}) => {
  return (
    <div className="list-item">
      <a href={data.url}>
        <h3>{data.name}</h3>
      </a>
      <p>{data.description}</p>
      <p>
        By <a href={`https://github.com/${data.author.github}`}>{data.author.name}</a>
      </p>
      {
        data.tags.map(t => <Tag>{t}</Tag>)
      }
    </div>
  )
}

const Boilerplates = () => {
  const { allBoilerplatesJson } = useStaticQuery(
    graphql`
      query {
        allBoilerplatesJson {
          edges {
            node {
              id
              name
              description
              url
              author {
                name
                github
              }
              tags
            }
          }
        }
      }
    `
  )

  const boilerplates = allBoilerplatesJson.edges

  return (
    <div className="list-container">
      <h2 className="inline">Boilerplates</h2>
      <p className="inline"> ⁠— These are to help you get started with your projects. Think of them like sourdough starters <span role="img" aria-label="bread emoji">🍞</span>.</p>
      <div className="list">
      {
        boilerplates.map(b => <BoilerplateItem key={b.node.id} data={b.node} />)
      }
      </div>
    </div>
  )
}

Boilerplates.defaultProps = {
}

Boilerplates.propTypes = {
}

export default Boilerplates
