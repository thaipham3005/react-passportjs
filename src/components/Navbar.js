import styled from 'styled-components'
import imgLogo from '../assets/images/logo.png'
import ThemeSwitcher from './Navbar/ThemeSwitcher'
import StyledLink from './Navbar/StyledLink'
import Brand from './Navbar/Brand'

const HeaderBar = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 50px;
  position: absolute;
  left:0;
  top:0;
  background-color: #34495E;
  display: flex;
  align-items: center;
  padding: 0 .5em ;
  box-shadow: 0 3px 10px rgba(0,0,0,.3);   
`

const NavContainter = styled.nav`
  flex-grow:5;
  display: flex;
  justify-content: flex-end;

`

const ProfileContainer = styled.div`
  flex-grow:2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

function Navbar() {
  return (
    <HeaderBar className='header'>
      <Brand title='TASK RUNNER' logo={imgLogo}/>
      <NavContainter>
        <StyledLink to="/landing">Landing</StyledLink>
        <StyledLink to="/home" >Home</StyledLink>
        <StyledLink to="/contact" >Contact</StyledLink>
        <StyledLink to="/dashboard" >Dashboard</StyledLink>
      </NavContainter>

      <ProfileContainer>
        <ThemeSwitcher />
      </ProfileContainer>
    </HeaderBar>
  )
}

export default Navbar