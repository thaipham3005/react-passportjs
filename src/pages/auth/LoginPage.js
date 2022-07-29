import { useContext } from 'react'
import styled from 'styled-components'
import { BsFacebook, BsGithub, BsGoogle } from 'react-icons/bs'
import {BiLogIn} from 'react-icons/bi'
import { ThemeContext } from '../../context/Theme.provider'
import AnimatedPage from './../animated/AnimatedPage'
import ButtonLogoText from '../../components/Button/ButtonLogoText'
import FormInput from '../../components/FormInputs/FormInput'

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


const EmailLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 200px;
`

const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 200px;
  padding: 20px;
`

function LoginPage() {
  const { themeState: { colors } } = useContext(ThemeContext)
  
  const handleFacebookLogin = async(userData)=>{

  }

  const handleGoogleLogin = ()=>{
    console.log('google login');
    window.open('http://localhost:5000/auth/google','_self')
  }

  const handleGithubLogin = async(userData)=>{
    
  }

  const handleEmailLogin = async(userData)=>{
    
  }

  return (
    <StyledWrapper>
      <AnimatedPage>
        <LoginPanel >
          <EmailLogin>
            <FormInput label='Email'></FormInput>
            <FormInput label='Password' type='password'></FormInput>
            <ButtonLogoText 
              background='#f7d00a'
              width={50}
              text='Login'
              logo={<BiLogIn size={20}/>}/>
          </EmailLogin>
          <SocialLogin>
            <ButtonLogoText background='#1877F2'
              width={100}
              color='#FFF'
              text='Facebook'
              logo={<BsFacebook size={20} />}
            />
            <ButtonLogoText background='#CD201F'
              width={100}
              color='#FFF'
              text='Google'
              logo={<BsGoogle size={20} />}
              onClick={handleGoogleLogin}
            />

            <ButtonLogoText background='#c2c2c2'
              width={100}
              color='#202020'
              text='Github'
              logo={<BsGithub size={20} />}
            />

          </SocialLogin>
        </LoginPanel>
      </AnimatedPage>
    </StyledWrapper>
  )
}

export default LoginPage