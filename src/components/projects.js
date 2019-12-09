import React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Tag from './tag'

const ProjectItem = ({data}) => {
  return (
    <div className="list-item" style={{ backgroundImage: `url(${data.img_url || null})` }}>
      <div style={{ height: "22vw" }}>
        <h3><a href={data.github}>{data.name}</a></h3>
        <p>Team: {data.team.join(', ')}</p>
        <p>Boilerplates: {data.boilerplates.join(', ') || 'None!'}</p>
        <p>
        Tech:
        {
          data.tech.map(t => <Tag>{t}</Tag>)
        }
        </p>
        <p>Description: {data.description}</p>
      </div>
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
            }
          }
        }
      }
    `
  )

  let projects = allProjectsJson.edges
  if (filter) {
    projects = projects.filter(p => p.node.tech.join(', ').toLowerCase().includes(filter.toLowerCase()))
  }

  return (
    <div className="list-container">
      <h2 className="inline">Projects</h2>
      <p className="inline"> ⁠— A hall of fame!</p>
      <div className="list">
      {
        projects.map(b => <ProjectItem key={b.node.id} data={b.node} />)
      }
      </div>
    </div>
  )
}

Projects.defaultProps = {
}

Projects.propTypes = {
}

export default Projects
