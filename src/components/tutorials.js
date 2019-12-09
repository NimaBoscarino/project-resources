import React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Tag from './tag'

const TutorialItem = ({data}) => {
  return (
    <div className="list-item">
      <a href={data.url}>
        <h4>{data.name}</h4>
      </a>
      <p>{data.description}</p>
      <p>
        {data.media_type} submitted by <a href={`https://github.com/${data.submitted_by.github}`}>{data.submitted_by.name}</a>
      </p>
      <p className="tags">
        {
          data.tags.map(t => <Tag>{t}</Tag>)
        }
      </p>
    </div>
  )
}

const Tutorials = () => {
  const { allTutorialsJson } = useStaticQuery(
    graphql`
      query {
        allTutorialsJson {
          edges {
            node {
              id
              name
              description
              url
              submitted_by {
                name
                github
              }
              media_type
              tags
            }
          }
        }
      }
    `
  )

  const tutorials = allTutorialsJson.edges

  return (
    <div className="list-container">
      <h2 className="inline">Tutorials</h2>
      <h5 className="inline"> ⁠— Sometimes we need a walkthrough! Here are some articles, videos, and tutorials you might find helpful.</h5>
      <div className="list">
      {
        tutorials.map(b => <TutorialItem key={b.node.id} data={b.node} />)
      }
      </div>
    </div>
  )
}

// Tutorials.defaultProps = {
// }

// Tutorials.propTypes = {
// }

export default Tutorials
