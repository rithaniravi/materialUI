import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import TextField from '@mui/material/TextField';
function ButtonComponent() {
    return (
        <div>
            <Container>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <Typography>Button and Varient</Typography>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
                <hr></hr>
                <br></br>
                <Typography>Disabled button and onClick event</Typography>
                <Button disabled>Disabled</Button>
                <Button variant="contained" disabled>Disabled</Button>
                <Button onClick={() => { alert('clicked') }}>Click me</Button>
                <hr></hr>
                <br></br>
                <Typography>Size of Button</Typography>
                <Button variant='contained' color='secondary' size='small'>Button</Button>
                <Button variant='contained' color='secondary' size='medium'>Button</Button>
                <Button variant='contained' color='secondary' size='large'
                    sx={{
                        backgroundColor: "gray", color: "white", "&:hover": {
                            backgroundColor: "white", color: "black"
                        }
                    }}>Button</Button>
                <hr></hr>
                <br></br>
                <Typography>Add icons with Button</Typography>
                <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
                <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
                <hr></hr>
                <br></br>
                <Typography>IconButton</Typography>
                <IconButton aria-label="delete" size="small"><DeleteIcon /></IconButton>
                <hr></hr>
                <br></br>
                <Typography>Fingerprint</Typography>
                <IconButton aria-label="fingerprint" color="secondary">
                    <Fingerprint />
                </IconButton>
                <br></br>
                <hr></hr>
                <Button variant="contained"><MarkEmailUnreadIcon/></Button><br></br>
                <Button variant="contained" startIcon={<MarkEmailUnreadIcon/>}>Email</Button>
                <hr></hr>


            </Container>
        </div>
    )
}

export default ButtonComponent