import { useContext } from 'react'
import { ThemeContext } from '../../context/Theme.provider'

const ThemeSwitcher = (props) =>{
    const {themeState, changeTheme} = useContext(ThemeContext)

    const switchTheme = ()=> {
        changeTheme()
        console.log(themeState)
    }

    return (
        <div className={themeState.theme} onClick={()=>switchTheme()}>III</div>
    )
}

export default ThemeSwitcher