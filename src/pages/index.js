import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Boilerplates from '../components/boilerplates'
import Tutorials from '../components/tutorials'
import Projects from '../components/projects'

const IndexPage = () => (
  <Layout>
    <h1>The best place to find final project resources</h1>
    <p>Tons of students have worked on final projects at Lighthouse Labs. Why not capitalize on their struggles? This website collects useful boilerplates, tutorials, npm modules, and general tips from instructors, mentors, and students.</p>
    <p>If you find anything that you'd like to add to this list, please make a pull request over on the <a href="https://github.com/NimaBoscarino/project-resources">GitHub repo</a></p>

    <Boilerplates />
    {/* <Tutorials /> */}
    <Projects />
    <hr />
    <p>I'll add more features to this site over time (e.g. filtering by tags, searching, etc.), but for now it'll just be a big form. Use good old <kbd>Ctrl + F</kbd> to find what you're looking for 😉</p>
  </Layout>
)

export default IndexPage
