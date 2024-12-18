import React from 'react'
import Typography from '@mui/material/Typography'
import { Container } from '@mui/material'

function TypographyComponenet() {
  return (
    <div>
        <Container>
        <Typography variant="h4" component="h5" align='center'  gutterBottom={true} sx={{backgroundColor:"red",color:"white"}}>
        A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.
        There are several different types of higher order functions like map and reduce. We will discuss these later in this 
         tutorial. But before that let's first dive deep into what higher order functions are.
        </Typography>
        </Container>
        
    </div>
  )
}

export default TypographyComponenet