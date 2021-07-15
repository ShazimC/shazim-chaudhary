/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SideNav from "./SideNav";
import ScrollNav from "./ScrollNav";
import "../styles/global.css";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { GlobalStyle } from "../styles/theme";

const Layout = ({ children }) => {
  const currentTheme = useContext(ThemeContext);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="layout" aria-label={data.site.siteMetadata.title}>
      <GlobalStyle theme={currentTheme}/>
      <SideNav/>
      <main className="content">{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
