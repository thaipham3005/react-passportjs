import styled from 'styled-components'
import { size } from '../../utils/ScreenSize'


const BrandContainer = styled.div`

display: flex;
justify-content: left;
align-items: center;
gap: 10px;
width: max-content;
`
const Logo = styled.div`
width: 40px;
height: 40px;
background-size: contain;
background-image: url(${props => props.logo});
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
const Brand = ({ logo, title }) => {
  return (
    <BrandContainer >
      <Logo logo={logo} />
      <BrandName>{title}</BrandName>
    </BrandContainer>
  )

}


export default Brand