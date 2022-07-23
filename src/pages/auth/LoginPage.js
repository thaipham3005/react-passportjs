import { useContext } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { BsFacebook, BsGithub, BsGoogle } from 'react-icons/bs'
import { ThemeContext } from '../../context/Theme.provider'

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

const LoginPanel = styled(motion.div)`
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
  width: ${props => props.width};
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

`

function LoginPage() {
  const { themeState: { colors } } = useContext(ThemeContext)

  return (
    <AnimatePresence exitBeforeEnter>
      <StyledWrapper>
        <LoginPanel theme={colors}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, x: 100, transition: { duration: 1 } }}  >
          <EmailLogin>
          </EmailLogin>
          <SocialLogin>
            <StyledButton background='#1877F2' width={100}>
              <BsFacebook size={20} color='#FFF' /> Facebook
            </StyledButton>
            <StyledButton background='#CD201F'>
              <BsGoogle size={20} color='#FFF' /> Google
            </StyledButton>
            <StyledButton background='#F5F6F5'>
              <BsGithub size={20} color='#202020' /> Gitbub
              <span ></span>
            </StyledButton>
          </SocialLogin>
        </LoginPanel>
      </StyledWrapper>
    </AnimatePresence>
  )
}

export default LoginPage