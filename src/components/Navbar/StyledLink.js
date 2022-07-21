import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { size } from '../../utils/ScreenSize'

const StyledLink = styled(NavLink)`
box-sizing: border-box;
font-family: Nunito;
font-size: 1em;
height: 50px;
margin: .2em;
padding: .25em .75em;
color: #efefef;
cursor: pointer;
text-decoration: none;
display: flex;
align-items: center;
&:hover{
    background-color: #3D4F60;
} ;
&.active{    
    border-bottom: 3px solid #2980B9;
};

@media only screen and (max-width: ${size.mobileL}){
    margin: .2em;
    padding: .5em;
}  
`

export default StyledLink