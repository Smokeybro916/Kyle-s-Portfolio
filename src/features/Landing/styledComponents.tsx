import styled from 'styled-components'

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 6rem;
  gap: 10rem;
`

export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
`

export const Logo = styled.h1``

export const NavbarOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-size: 26px;
`

export const NavbarOption = styled.div`
  transition: 0.5s linear;

  &:hover {
    color: #2B9EB3;
  }
`

export const Banner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 7rem;
`

export const P = styled.p`
  width: 100%;
  font-size: 2rem;

`

export const Image = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
`