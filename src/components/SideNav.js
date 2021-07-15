import React from 'react'
import { useStyledDarkMode } from 'gatsby-styled-components-dark-mode'
import { useLocation } from '@reach/router'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

const IconMoon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    stroke='none'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-moon'
  >
    <title>Dark Mode</title>
    <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
  </svg>
)

const IconSun = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='#f9d71c'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-sun'
  >
    <title>Light Mode</title>
    <circle cx='12' cy='12' r='5'></circle>
    <line x1='12' y1='1' x2='12' y2='3'></line>
    <line x1='12' y1='21' x2='12' y2='23'></line>
    <line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
    <line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
    <line x1='1' y1='12' x2='3' y2='12'></line>
    <line x1='21' y1='12' x2='23' y2='12'></line>
    <line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
    <line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
  </svg>
)

const IconLinkedIn = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    role='img'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-linkedin'
  >
    <title>LinkedIn</title>
    <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
    <rect x='2' y='9' width='4' height='12'></rect>
    <circle cx='4' cy='4' r='2'></circle>
  </svg>
)

const IconGitHub = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    role='img'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-github'
  >
    <title>GitHub</title>
    <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
  </svg>
)

const IconSoloLearn = () => (
  <svg
    role='img'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
  >
    <title>SoloLearn</title>
    <path d='M13.01.083c-1.354-.024-2.678.303-3.822 1.12-3.493 2.178-4.327 6.98-2.163 10.94.442-4.8 3.936-8.762 8.56-9.603 2.165-.248 3.74 0 3.74 0C17.601 1.15 15.264.125 13.01.083zm-5.246.923C4.418 2.095.924 5.163 1.367 8.628c0 3.96 3.935 7.03 7.821 8.317-3.05-3.515-5.214-7.87-3.295-12.672.887-2.03 1.87-3.267 1.87-3.267zM17.79 3.262c-2.789-.035-6.718 1.358-8.158 4.031 4.38-1.733 9.99-1.336 12.646 3.367 1.133 1.93 1.575 3.464 1.575 3.464.542-3.762-.345-8.563-3.788-10.346-.542-.334-1.345-.504-2.275-.516zm-2.497 3.635c3.493 3.514 5.657 9.208 2.656 13.613-1.328 1.931-2.51 3.069-2.51 3.069h.002c3.788-.94 7.673-4.454 7.673-8.365 0-2.623-2.704-7.327-7.82-8.317zM.531 9.57c-1.328 3.465-.05 7.82 2.558 9.603 3.493 2.624 8.267 1.336 11.76-1.733-4.773.892-9.989 0-12.644-4.306C1.024 11.104.53 9.57.53 9.57zm17.712 3.168c-1.723 4.8-5.609 8.168-10.627 8.416-2.312-.149-3.936-.644-3.936-.644 2.41 2.97 6.789 4.208 10.282 2.872 2.362-.94 4.133-3.516 4.526-6.437.246-1.485-.048-2.723-.245-4.207Z' />
  </svg>
)

const IconMail = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-mail'
  >
    <title>Email</title>
    <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
    <polyline points='22,6 12,13 2,6'></polyline>
  </svg>
)

const Title = styled.h1`
  font-size: 23px;
  font-weight: 500;
  text-align: center;
`

const SubTitle = styled.h2`
  font-weight: normal;
  font-size: 18px;
  margin-bottom: 40px;
  color: rgb(${props => props.theme.global.linkHover});
`

const ThemeButton = styled.button`
  position: relative;
  margin: 15px auto 0px 15px;
  color: rgb(${props => props.theme.global.color});
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
  font-size: 40px;
  :hover {
    cursor: pointer;
  }
`

const Avatar = styled.img`
  width: 60%;
  border-radius: 200px;
  margin-bottom: 25px;
`

const NavContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 50px;
  width: 90%;
`

const SocialLink = styled.a`
  color: rgb(${props => props.theme.global.linkHover});
  width: 35px;
  height: 35px;
  :hover {
    color: rgb(${props => props.theme.global.link});
  }
`

const NavTab = styled.a`
    font-size: 23px;
    padding: 15px;
    margin: 5px 0;
    color: rgb(${props => props.theme.global.color});
    :hover {
      color: rgb(${props => props.theme.global.link});
    }
    ${({ to, pathname, theme }) => {
      const selected = to === pathname
      if (selected) {
        return css`
          border-bottom: 2px solid rgb(${theme.global.link});
          color: rgb(${theme.global.link});
        `
      }
    }}
  `

export default function SideNav () {
  const { isDark, toggleDark } = useStyledDarkMode()
  const { pathname } = useLocation()
  return (
    <nav className="sideNav">
      <ThemeButton onClick={() => toggleDark()}>
        {isDark ? <IconSun/> : <IconMoon/>}
      </ThemeButton>
      <NavContent>
        <Avatar src='https://avatars.githubusercontent.com/u/35382434?s=400&u=14f4068a742462707889dc6748c372d2bc57a402&v=4' />
        <Title>Shazim Chaudhary</Title>
        <SubTitle>Software Engineer</SubTitle>
        <NavTab as={Link} to='/' pathname={pathname}>
          About
        </NavTab>
        <NavTab as={Link} to='/experience/' pathname={pathname}>
          Experience
        </NavTab>
        <NavTab as={Link} to='/projects/' pathname={pathname}>
          Projects
        </NavTab>
        <NavTab as={Link} to='/ascension/' pathname={pathname}>
          Ascension
        </NavTab>
        <SocialsContainer>
          <SocialLink href='https://www.linkedin.com/in/shazimchaudhary/'>
            <IconLinkedIn />
          </SocialLink>
          <SocialLink href='https://github.com/ShazimC'>
            <IconGitHub />
          </SocialLink>
          <SocialLink href='https://www.sololearn.com/profile/1751172'>
            <IconSoloLearn />
          </SocialLink>
          <SocialLink href='mailto:shazim.chaudhary@rutgers.edu'>
            <IconMail />
          </SocialLink>
        </SocialsContainer>
      </NavContent>
    </nav>
  )
}
