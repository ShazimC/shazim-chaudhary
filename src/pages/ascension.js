import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/seo'

const Ascension = () => (
  <Layout>
    <Seo title='Ascension' />
    <h1>Ascension</h1>
    <Link to='/'>Go back to the homepage</Link>
  </Layout>
)

export default Ascension
