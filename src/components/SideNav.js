import React from 'react'
import { useStyledDarkMode } from 'gatsby-styled-components-dark-mode'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavTab = styled.a`
  font-size: 25px;
  padding: 15px 0;
  color: rgb(${props => props.theme.global.color});
  :hover {
    color: rgb(${props => props.theme.global.link});
  }
`

const Title = styled.h1`
  font-size: 25px;
  font-weight: 500;
`

const SubTitle = styled.h2`
  font-weight: normal;
  font-size: 20px;
  margin-bottom: 40px;
`

const ThemeButton = styled.button`
  background-color: rgb(${props => props.theme.global.bg});
  border: 1px solid rgb(${props => props.theme.global.color});
  border-radius: 5px;
  position: absolute;
  top: 15px;
  right: 15px;
  color: rgb(${props => props.theme.global.color});
  font-size: 20px;
  padding: 10px;
`

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 200px;
  margin-bottom: 25px;
`

export default function SideNav () {
  const { isDark, toggleDark } = useStyledDarkMode()
  const currentTheme = useContext(ThemeContext)

  return (
    <nav>
      <ThemeButton onClick={() => toggleDark()}>
        {isDark ? 'Light' : 'Dark'}
      </ThemeButton>
      <Avatar src='https://avatars.githubusercontent.com/u/35382434?s=400&u=14f4068a742462707889dc6748c372d2bc57a402&v=4' />
      <Title>Shazim Chaudhary</Title>
      <SubTitle>Software Engineer</SubTitle>
      <NavTab as={Link} to='/page-2/'>
        About
      </NavTab>
      <NavTab as={Link} to='/page-2/'>
        Experiences
      </NavTab>
      <NavTab as={Link} to='/page-2/'>
        Projects
      </NavTab>
      <NavTab as={Link} to='/page-2/'>
        Ascension
      </NavTab>
    </nav>
  )
}
