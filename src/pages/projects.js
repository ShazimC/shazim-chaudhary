import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/seo'

const Projects = () => (
  <Layout>
    <Seo title='Projects' />
    <h1>Projects</h1>
    <Link to='/'>Go back to the homepage</Link>
  </Layout>
)

export default Projects
