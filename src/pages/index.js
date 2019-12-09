import React, { useState } from 'react'
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import Projects from '../components/projects'
import Boilerplates from '../components/boilerplates'
import Tutorials from '../components/tutorials'

const IndexPage = () => {
  const [search, setSearch] = useState('')
  const [projectView, setProjectView] = useState('projects')

  return (
    <Layout setSearch={setSearch}>
      <div className="project-view-buttons">
        <button onClick={() => setProjectView("projects")}>Projects</button>
        <button onClick={() => setProjectView("boilerplates")}>Boilerplates</button>
        <button onClick={() => setProjectView("tutorials")}>Tutorials</button>
      </div>
      {/* TODO: There is definitely a better way of displaying this */}
      {projectView === "projects" && <Projects filter={search} />}
      {projectView === "boilerplates" && <Boilerplates />}
      {projectView === "tutorials" && <Tutorials />}
    </Layout>
  )
}

export default IndexPage
