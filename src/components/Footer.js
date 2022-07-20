import styled from "styled-components"

const Container = styled.div({
  height: '200px',
  backgroundColor: '#262626',
  color: '#fefefe',
  padding: 5,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'center',
  justifyItems:'space-between',
  gap: 20

})

const Column = styled.div({
  flexGrow: 1,
  flexShrink:1,
  flexBasis: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

})
function Footer() {
  return (
    <Container>
      <Column>
       <div>ffdsafdfasd</div>
       <div>ffdsafdfasd</div>
       <div>ffdsafdfasd</div>
       <div>ffdsafdfasd</div>
       <div>ffdsafdfasd</div>
      </Column>
      <Column>
      fsdfdsf dsfsdfsadf
      </Column>
      <Column>
      fdafdsfdsaf
      </Column>
      
    </Container>
  )
}

export default Footer