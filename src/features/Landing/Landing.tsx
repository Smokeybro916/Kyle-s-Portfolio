import { FC } from 'react'
import selfie1 from 'src/features/Landing/selfie1.jpg'

import { Banner,Image, LandingContainer, Logo, Navbar, NavbarOption, NavbarOptions } from './styledComponents'

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
        <Image>
          <img src={selfie1} alt="Picture of me" style={{width:'200px', height:'250px'}}></img>
        </Image>
      </Banner>
    </LandingContainer>
  )
}

export default Landing
