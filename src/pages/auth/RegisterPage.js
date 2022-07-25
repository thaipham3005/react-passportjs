import { useContext } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { BsFacebook, BsGithub, BsGoogle } from 'react-icons/bs'
import { ThemeContext } from '../../context/Theme.provider'
import AnimatedPage from './../animated/AnimatedPage'

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

const LoginPanel = styled.div`
  padding:20px;
  background-color: ${({ theme }) => theme.mainBackground};
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: max-content;
  gap: 10px;
  border-radius: 10px;
  box-shadow: 0 3px 10px 5px rgba(0,0,0,.2);  
`

const StyledButton = styled.button.attrs(props => ({
  background: props.background ? props.background : '#DEDEDE',
  color: props.color ? props.color : '#353535',
  width: props.width ? props.width : 'max-content'
}))`
  background-color: ${props => props.background};
  color: ${props => props.color};
  border: none;
  width: ${props => props.width};
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

`

function RegisterPage() {
  const { themeState: { colors } } = useContext(ThemeContext)

  return (
    <StyledWrapper>
      <AnimatedPage>
        <LoginPanel theme={colors}>

        </LoginPanel>
      </AnimatedPage>
    </StyledWrapper>
  )
}

export default RegisterPage