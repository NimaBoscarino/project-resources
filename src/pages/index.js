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
      <h1>The best place to find final project resources</h1>
      <p>Tons of students have worked on final projects at Lighthouse Labs. Why not capitalize on their struggles? This website collects useful boilerplates, tutorials, npm modules, and general tips from instructors, mentors, and students.</p>
      <p>If you find anything that you'd like to add to this list, please make a pull request over on the <a href="https://github.com/NimaBoscarino/project-resources">GitHub repo</a></p>
      <div style={{
        marginBottom: '25px'
      }}>
        Show: {" "}
        <button onClick={() => setProjectView('projects')}>Projects</button>
        <button onClick={() => setProjectView('boilerplates')}>Boilerplates</button>
        <button onClick={() => setProjectView('tutorials')}>Tutorials</button>
      </div>
      {/* TODO: There is definitely a better way of displaying this */}
      {
        projectView === 'projects' && <Projects filter={search}/>
      }
      {
        projectView === 'boilerplates' && <Boilerplates />
      }
      {
        projectView === 'tutorials' && <Tutorials />
      }
      <hr />
    </Layout>
  )
}

export default IndexPage
