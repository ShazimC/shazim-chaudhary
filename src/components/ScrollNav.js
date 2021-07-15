import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const StyledAnchor = styled.a`
  margin: 40px;
  margin-right: 25px;
  padding: 15px;
  color: rgb(${props => props.theme.global.linkHover});
  :hover {
    color: rgb(${props => props.theme.global.link});
  }
  ${({ to, selectedAnchor, theme }) => {
    const selected = to === '/' + selectedAnchor
    if (selected) {
      return css`
        color: rgb(${theme.global.link});
        border-bottom: 2px solid rgb(${theme.global.link}); 
      `
    }
  }}
`

export default function ScrollNav () {
  const [selectedAnchor, setSelectedAnchor] = useState('#hero')
  return (
    <nav className='scrollNav'>
      <StyledAnchor
        as={AnchorLink}
        to='/#about'
        title='About me'
        selectedAnchor={selectedAnchor}
        onAnchorLinkClick={() => setSelectedAnchor('#about')}
      >
        
      </StyledAnchor>
      <StyledAnchor
        as={AnchorLink}
        to='/#occupation'
        title='Current Occupation'
        selectedAnchor={selectedAnchor}
        onAnchorLinkClick={() => setSelectedAnchor('#occupation')}
      >
        
      </StyledAnchor>
      <StyledAnchor
        as={AnchorLink}
        to='/#fav3'
        title='My Favorite 3 Projects'
        selectedAnchor={selectedAnchor}
        onAnchorLinkClick={() => setSelectedAnchor('#fav3')}
      >
        
      </StyledAnchor>
    </nav>
  )
}
