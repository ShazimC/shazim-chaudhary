import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi, I'm Shazim Chaudhary.</h1>
    <p>This is the about page.</p>
  </Layout>
)

export default IndexPage
