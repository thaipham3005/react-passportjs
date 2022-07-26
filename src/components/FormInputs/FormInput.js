import styled from "styled-components"

const StyledWrapper = styled.div.attrs(props => ({
    inline: props.inline? 'row' : 'column'
}))`
    display: flex;
    flex-direction: ${props => props.inline};
`

const StyledInput = styled.input.attrs(props=>({
    type: props.type || 'text',
}))`
    outline: none;
    border-width: 0;
    border-bottom: 1px solid ${props=>props.color};
    padding: 5px 5px 2px;
    border-radius: 3px;
    &:focus{
        background: ${props=>props.focusBackground || '#efefef'}
    }
`

const TextInput = () => {
    return (
        <StyledInput></StyledInput>
    )
}

const PasswordInput = () => {
    return (
        <StyledInput type='password'></StyledInput>
    )
}

const FormInput = (props) => {
    const {label, type, inline, focusBackground} = props
  return (
    <StyledWrapper inline={inline}>
        <label>{label}</label>
        {type === 'password' ? 
        <PasswordInput /> : <TextInput />
    }
    </StyledWrapper>
  )
}

export default FormInput