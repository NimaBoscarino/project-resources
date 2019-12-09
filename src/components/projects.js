import React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Tag from "./tag"

const ProjectItem = ({ data }) => {
  console.log(data)
  return (
    <div
      className="list-item"
      style={{ backgroundImage: `url(${data.img_url || null})` }}
    >
      <a href={data.github}>
        <h4>{data.name}</h4>
      </a>
      {data.cohort && <p>Cohort: {data.cohort}</p>}
      <p>Team: {data.team.join(", ")}</p>
      <p>Boilerplates: {data.boilerplates.join(", ") || "None!"}</p>
      <p className="tags">
        Tech:
        {data.tags.map(t => (
          <Tag>{t}</Tag>
        ))}
      </p>
      <p>Description: {data.description}</p>
    </div>
  )
}

const Projects = ({ filter }) => {
  const { allProjectsJson } = useStaticQuery(
    graphql`
      query {
        allProjectsJson {
          edges {
            node {
              id
              name
              team
              tags
              github
              boilerplates
              description
              cohort
            }
          }
        }
      }
    `
  )

  let projects = allProjectsJson.edges
  if (filter) {
    projects = projects.filter(p =>
      p.node.tags
        .join(", ")
        .toLowerCase()
        .includes(filter.toLowerCase())
    )
  }

  return (
    <div className="list-container">
      <h2 className="inline">Projects</h2>
      <h5 className="inline"> ⁠— A hall of fame!</h5>
      <div className="list">
        {projects.map(b => (
          <ProjectItem key={b.node.id} data={b.node} />
        ))}
      </div>
    </div>
  )
}

// Projects.defaultProps = {}

// Projects.propTypes = {}

export default Projects
