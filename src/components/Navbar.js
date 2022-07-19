import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'
import imgLogo from '../assets/images/logo.png'
import { size } from '../utils/constants'
import ThemeSwitcher from './Navbar/ThemeSwitcher'

const StyledLink = styled(NavLink)`
  box-sizing: border-box;
  font-family: Nunito;
  font-size: 1em;
  margin: .2em;
  padding: .5em 1em;
  border-radius: 2px;
  color: #efefef;
  background-color: ${props => props.bg ? props.bg : '#2C3E50'} ;
  cursor: pointer;
  text-decoration: none;
  
  &:hover{
    background-color: #3D4F60;
  } ;
  &.active{    
    border-bottom: 2px solid #2980B9;
  };

  @media only screen and (max-width: ${size.mobileL}){
    margin: .2em;
    padding: .5em;
  }  
`
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
  padding: .5em;
  box-shadow: 0 3px 10px rgba(0,0,0,.3); 
  
`

const Brand = styled.div`
  width: 30vw;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
`
const Logo = styled.div`
  width: 40px;
  height: 40px;
  background-size: contain;
  background-image: url(${imgLogo});
  background-repeat: no-repeat;
  background-position: center;
 
`
const BrandName = styled.div`
  font-size: 24px;
  color: #ffffff;
  font-weight: bold;
  text-shadow: 2px 2px 0 rgba(255,255,255,0.3);
  @media only screen and (max-width: ${size.tablet}){
    display: none;
  }
`

const NavContainter = styled.div`
  flex-grow:1;
  display: flex;
  justify-content: flex-end;
`
const StyledThemeSwitcher = styled(ThemeSwitcher)`
  display: block;
  width: 40px; 
  height: 40px;  
  padding: 10px;
  cursor: pointer;

`

function Navbar() {
  return (
    <HeaderBar className='header'>
      <Brand >
        <Logo />
        <BrandName>TASK RUNNER</BrandName>
      </Brand>
      <NavContainter>
        <StyledLink to="/landing">Landing</StyledLink>

        <StyledLink to="/home" >Home</StyledLink>
        <StyledLink to="/contact" >Contact</StyledLink>
        <StyledLink to="/dashboard" >Dashboard</StyledLink>
      </NavContainter>


      <StyledThemeSwitcher theme='light'/>

    </HeaderBar>
  )
}

export default Navbar