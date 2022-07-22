import { useState, useContext, useRef } from 'react'
import { FiUser } from 'react-icons/fi'
import styled from 'styled-components'

import { AuthContext } from '../../context/Auth.provider'
import { useNavigate } from 'react-router-dom'

const Modal = styled.div`
  width: max-content;  
  height: min-content;
  position: absolute;
  top: 45px;
  right: 20px;
  background-color: #fefefe;
  border-radius: 5px;
  box-shadow: 0 3px 10px 5px rgba(0,0,0,.2);
`

const StyledList = styled.ul.attrs(props => ({
  flow: props.flow ? props.flow : 'column'
}))`
  display: flex;
  flex-direction: ${props => props.flow};
`
const StyledItem = styled.li`
  margin: 5px;

`
const ProfileModal = () => {
  const navigate = useNavigate()
  const { authState: { user, role, permissions } } = useContext(AuthContext)
  return (
    <Modal>
      <StyledList>
        <StyledItem onClick={() => navigate('/profile')}>{user}</StyledItem>
        <StyledItem>{role.join('/ ')}</StyledItem>
        <StyledItem>{permissions.join('/ ')}</StyledItem>

      </StyledList>

    </Modal>
  )
}

const StyledButton = styled.button.attrs(props => ({
  background: props.background ? props.background : '#DEDEDE',
  color: props.color ? props.color : '#353535'
}))`
  background-color: ${props => props.background};
  color: ${props => props.color};
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;

`

const AuthModal = () => {
  const navigate = useNavigate();
  const { authState: { user, role, permissions } } = useContext(AuthContext)

  return (
    <Modal>
      <StyledList flow='row'>
        <StyledItem onClick={() => navigate('/login')}>
          <StyledButton background='#E67E22' color='#FFF'>Login</StyledButton>
        </StyledItem>
        <StyledItem onClick={() => navigate('/register')}>
          <StyledButton background='#2980B9' color='#FFF'>Register</StyledButton>
        </StyledItem>
      </StyledList>
    </Modal>
  )
}

const StyledWrapper = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    width: 40px; 
    height: 40px;  
    cursor: pointer;
    border-radius: 50%;
    transition: background-color .25s ease-in repeat;
    &:hover {
        background-color: #3D4F60;
    }
`

const Profile = () => {
  const [modal, setModal] = useState(false)
  const { authState: { isAuthenticated } } = useContext(AuthContext)

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <StyledWrapper onClick={() => toggleModal()}>
      <FiUser size={20} color={'#fefefe'} />
      {modal ?
        isAuthenticated ? <ProfileModal /> : <AuthModal />
        : ''}
    </StyledWrapper>
  )
}

export default Profile