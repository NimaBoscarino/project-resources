import React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Tag from "./tag"

const ProjectItem = ({ data }) => {
  return (
    <div
      style={{
        margin: "15px",
        padding: "5px",
        background: "#EAEAEA",
      }}
    >
      <h2>
        <a href={data.github}>{data.name}</a>
      </h2>
      {data.cohort && <p>Cohort: {data.cohort}</p>}
      <p>Team: {data.team.join(", ")}</p>
      <p>Boilerplates: {data.boilerplates.join(", ") || "None!"}</p>
      <p>
        Tech:
        {data.tech.map(t => (
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
              tech
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
      p.node.tech
        .join(", ")
        .toLowerCase()
        .includes(filter.toLowerCase())
    )
  }

  return (
    <div>
      <h1>Projects</h1>
      <p>A hall of fame!</p>
      <ul>
        {projects.map(b => (
          <ProjectItem key={b.node.id} data={b.node} />
        ))}
      </ul>
    </div>
  )
}

Projects.defaultProps = {}

Projects.propTypes = {}

export default Projects
