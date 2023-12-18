import { FC } from 'react'

import { Banner, LandingContainer, Logo, Navbar, NavbarOption, NavbarOptions } from './styledComponents'

const Landing: FC = () => {
  return (
    <LandingContainer>
      <Navbar aria-label='Landing Page Navbar'>
        <Logo>Kyle's Place</Logo>
        <NavbarOptions>
          <NavbarOption>Projects</NavbarOption>
          <NavbarOption>About</NavbarOption>
          <NavbarOption>Contact</NavbarOption>
        </NavbarOptions>
      </Navbar>
      <Banner>
        <span>WELCOME</span>
        <span>TO MY</span> 
        <span>PORTFOLIO</span>
      </Banner>
    </LandingContainer>
  )
}

export default Landing
