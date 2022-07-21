import styled from 'styled-components'
import imgLogo from '../assets/images/app-logo.png'
import ThemeSwitcher from './Navbar/ThemeSwitcher'
import StyledLink from './Navbar/StyledLink'
import Brand from './Navbar/Brand'
import { useContext } from 'react'
import { AuthContext } from '../context/Auth.provider'
import { size } from '../utils/ScreenSize'

const HeaderBar = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 50px;
  position: sticky;
  position: -webkit-sticky;
  left:0;
  top:0;
  background-color: #34495E;
  display: flex;
  align-items: center;
  padding: 0 5em ;
  box-shadow: 0 3px 10px rgba(0,0,0,.3);   
  @media only screen and (max-width: ${size.laptop}){
    padding: 0 .5em ;
  }
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
  const { authState } = useContext(AuthContext)
  return (
    <HeaderBar className='header'>
      <Brand title='THEME TEST' logo={imgLogo} />
      <NavContainter>
        <StyledLink to="/landing">Landing</StyledLink>
        <StyledLink to="/contact" >Contact</StyledLink>
        {authState.isAuthenticated && authState.permissions.includes('Chakra') ? <StyledLink to="/chakra" >CharkraUI</StyledLink> : ''}
        {authState.isAuthenticated && authState.permissions.includes('Antd') ? <StyledLink to="/antd" >Ant Design</StyledLink> : ''}
        {authState.isAuthenticated && authState.permissions.includes('MUI') ? <StyledLink to="/mui" >MUI</StyledLink> : ''}
        {authState.isAuthenticated && authState.permissions.includes('Bootstrap') ? <StyledLink to="/bootstrap" >Bootstrap</StyledLink> : ''}

      </NavContainter>

      <ProfileContainer>
        <ThemeSwitcher />
      </ProfileContainer>
    </HeaderBar>
  )
}

export default Navbar