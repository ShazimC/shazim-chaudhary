import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/seo'

const Experience = () => (
  <Layout>
    <Seo title='Experience' />
    <h1>Experience</h1>
    <Link to='/'>Go back to the homepage</Link>
  </Layout>
)

export default Experience
