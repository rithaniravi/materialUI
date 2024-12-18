import React from 'react'
import { Button, Container, styled } from '@mui/material'



const StyledButton=styled(Button)(({theme})=>({
    backgroundColor:theme.palette.primary.main,
    color:"white",
    "&:hover":{
        backgroundColor:"white",
        color:"black"
    }
}))
function StyledComponent() {
  return (
    <div>
        <Container>
            <br></br>
            <StyledButton variant='contained'>My Button</StyledButton>


        </Container>

    </div>
  )
}

export default StyledComponent