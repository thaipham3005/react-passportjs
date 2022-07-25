import styled from "styled-components"

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
    padding: 5px 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        opacity: .9
    }
  
  `

const ButtonLogoText = ({ children, ...props }) => {
    let {background, width, color} = props
    return <StyledButton background={background} width={width} color={color}>
        {props.logo ? props.logo : ''}
        {props.text ? <span>&nbsp;{props.text}</span>  : ''}
        {children}
    </StyledButton>
}

export default ButtonLogoText