/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import * as React from "react";
import { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import SideNav from './SideNav'
import styled from 'styled-components'
import '../styles/global.css'
import { ThemeContext } from 'styled-components'
import { GlobalStyle } from '../styles/theme'

const SideNavToggler = styled.a`
  display: none;
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    /* Styles */
    display: inline;
    background: transparent;
    border: transparent;
    position: absolute;
    color: rgb(${props => props.theme.global.color});
    top: 17.5px;
    right: 17.5px;
    opacity: 0.75;
  }
`

const MenuIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='35'
    height='35'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-menu'
  >
    <line x1='3' y1='12' x2='21' y2='12'></line>
    <line x1='3' y1='6' x2='21' y2='6'></line>
    <line x1='3' y1='18' x2='21' y2='18'></line>
  </svg>
)

const Layout = ({ children }) => {
  const currentTheme = useContext(ThemeContext)
  const [nav, showNav] = useState(false);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  let prevScrollpos = window.pageYOffset
  window.onscroll = () => {
    let currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
      document.getElementById('menuToggler').style.top = '17.5px'
    } else {
      document.getElementById('menuToggler').style.top = '-50px'
    }
    prevScrollpos = currentScrollPos
  }

  return (
    <div className='layout' aria-label={data.site.siteMetadata.title}>
      <GlobalStyle theme={currentTheme} />
      <SideNavToggler id='menuToggler' onClick={() => showNav(!nav)}>
        <MenuIcon />
      </SideNavToggler>
      <SideNav nav={nav} />
      <main className='content'>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
