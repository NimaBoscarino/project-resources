import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

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

const BoilerplateItem = ({data}) => {
  return (
    <div style={{
      margin: '15px',
      padding: '5px',
      background: '#EAEAEA'
    }}>
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
    <div>
      <h1>Boilerplates</h1>
      <p>These are to help you get you get started with your projects. Think of them like sourdough starters 🍞</p>
      <ul>
      {
        boilerplates.map(b => <BoilerplateItem key={b.node.id} data={b.node} />)
      }
      </ul>
    </div>
  )
}

Boilerplates.defaultProps = {
}

Boilerplates.propTypes = {
}

export default Boilerplates
