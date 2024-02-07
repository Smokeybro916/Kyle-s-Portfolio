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
      </Banner>
      <Banner>
        <span>Projects</span>
        <p>
          My website so far is my only project, but will have more in the future.
        </p>
      </Banner>
      <Banner>
        <span>About</span>
        <p>
          My name is Kyle Luangasa and I've been interested in technololgy from a early age. I've always wanted to create things or be involed. This is my personal website I've created as a project that will keep being updated as I learn to code better.
        </p>
        <Image>
          <img src={selfie1} alt="Picture of me" style={{width:'200px', height:'250px'}}></img>
        </Image>
      </Banner>
      <Banner>
        <span>Contact</span>
        <p>Email: kyleluangasa@gmail.com</p>
        <p>Phone number: 1+ (916)-719-8498</p>
        <a href="https://www.linkedin.com/in/kyle-luangasa-541181192/">LinkedIn Profile</a>
        <a href="https://github.com/Smokeybro916">Github Profile</a>
      </Banner>

    </LandingContainer>
  )
}

export default Landing
