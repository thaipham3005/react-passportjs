import styled from "styled-components"
import { motion } from "framer-motion"
import { useState } from "react"

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 20,
};

const StyledWrapper = styled.div.attrs(props => ({
    size: props.size ? props.size : 20,
    color: props.color ? props.color : '#353535',
}))`
    display: flex;
    justify-content:  flex-start;
    align-items: center;
    width: ${props => props.size * 1.6 + 'px'};
    height: ${props => props.size + 'px'};
    padding: ${props => props.size / 15 + 'px'};
    border-radius: ${props => props.size / 2 + 'px'};
    border-width: ${props => props.size / 10 + 'px'};
    border-style: solid;
    border-color: ${props => props.color};
    background-color: transparent;
    cursor: pointer;
    &[data-active='true'] {
        justify-content:  flex-end;
    };

`

const Handle = styled(motion.div).attrs(props => ({
    size: props.size ? props.size : 20,
    color: props.color ? props.color : '#353535',
    active: props.active
}))`
    width: ${props => Math.round(props.size * 0.7) + 'px'};
    height: ${props => Math.round(props.size * 0.7) + 'px'};
    border-radius: 50%;
    background-color: ${props => props.color};
    &[active="true"]{
        background-color: ${props => props.activecolor};
    }
    &[active="false"]{
        background-color: ${props => props.inactivecolor};
    }
`

const ToogleSwitch = (props) => {
    const [active, setActive] = useState(false)
    const { size, color, activeColor, inActiveColor } = props
    return (
        <StyledWrapper size={size} color={color}
            data-active={active.toString()}
            onClick={() => setActive(!active)}>
            <Handle size={size}
                color={color}
                active={active.toString()}
                activecolor={activeColor}
                inactivecolor={inActiveColor}
                layout transition={spring} />
        </StyledWrapper>
    )
}

export default ToogleSwitch