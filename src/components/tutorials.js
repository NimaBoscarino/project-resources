import React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Tag from './tag'

const TutorialItem = ({data}) => {
  return (
    <div style={{
      margin: '15px',
      padding: '5px',
      background: '#EAEAEA',
    }}>
      <a href={data.url}>
        <h3>{data.name}</h3>
      </a>
      <p>{data.description}</p>
      <p>
        {data.media_type} submitted by <a href={`https://github.com/${data.submitted_by.github}`}>{data.submitted_by.name}</a>
      </p>
      <p>
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
    <div>
      <h1>Tutorials</h1>
      <p>Sometimes we just need a walkthrough! Here are some articles, videos, and tutorial series that you might find helpful.</p>
      <ul>
      {
        tutorials.map(b => <TutorialItem key={b.node.id} data={b.node} />)
      }
      </ul>
    </div>
  )
}

// Tutorials.defaultProps = {
// }

// Tutorials.propTypes = {
// }

export default Tutorials
