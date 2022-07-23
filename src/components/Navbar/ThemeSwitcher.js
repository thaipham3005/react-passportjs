import { useContext } from 'react'
import { ThemeContext } from '../../context/Theme.provider'
import styled from 'styled-components'
import {FiSun, FiMoon} from 'react-icons/fi'

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

const ThemeLight = (props) => {
    return (
        <FiMoon color='#FFF' size={20}></FiMoon>
    )
}

const ThemeDark = (props) => {
    return (
        <FiSun color='#FFF' size={20}></FiSun>
    )
}
const ThemeSwitcher = (props) => {    
    const { themeState, changeTheme } = useContext(ThemeContext)

    const switchTheme = () => {
        changeTheme()
    }

    return (
        <StyledWrapper className={themeState.theme} onClick={() => switchTheme()}>
            {themeState.isDarkTheme? <ThemeDark />: <ThemeLight />}

        </StyledWrapper>
    )
}

export default ThemeSwitcher