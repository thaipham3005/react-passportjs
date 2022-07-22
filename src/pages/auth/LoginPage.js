import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { BsFacebook, BsGithub, BsGoogle } from 'react-icons/bs'

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

const LoginPanel = styled.div`
  padding:20px;
  background-color: ${props => props.theme?.color?.mainBackground || '#F7F7F7'};
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: max-content;
  gap: 10px;
  border-radius: 10px;
  box-shadow: 0 3px 10px 5px rgba(0,0,0,.2);
  
`

const EmailLogin = styled.div`
  width: 200px;
  height: 200px;
`

const SocialLogin = styled.div`
  width: 200px;
  height: 200px;
`

const StyledButton = styled.button.attrs(props => ({
  background: props.background ? props.background : '#DEDEDE',
  color: props.color ? props.color : '#353535',
  width: props.width ? props.width : 'max-content'
}))`
  background-color: ${props => props.background};
  color: ${props => props.color};
  border: none;
  width: ${props => props.width}'px';
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

`

function LoginPage() {
  return (
    <StyledWrapper>
      <LoginPanel>
        <EmailLogin>

        </EmailLogin>
        <SocialLogin>
          <StyledButton background='#1877F2' width={100}>
            <BsFacebook size={20} color='#FFF'/> Facebook
          </StyledButton>
          <StyledButton background='#CD201F'>
            <BsGoogle size={20} color='#FFF'/> Google
          </StyledButton>
          <StyledButton background='#F5F6F5'>
            <BsGithub size={20} color='#202020'/> Gitbub
            <span ></span>
          </StyledButton>
        </SocialLogin>

      </LoginPanel>
    </StyledWrapper>
  )
}

export default LoginPage