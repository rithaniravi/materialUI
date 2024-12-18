import { Box } from '@mui/material'
import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';

function Layout() {
    return (
        <div>
            <Container maxWidth="xs">
                <Box sx={{ p: 2, border: '1px solid', width: "500px", margin: 1, height: "70px", borderRadius: 1 }} >
                    The Box component renders as a by default, but you can swap in any other valid HTML tag or React
                    component using the component prop. The demo below replaces the  with a element
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={8}>
                        <Box>size=8</Box>
                    </Grid>
                    <Grid size={4}>
                        <Box>size=4</Box>
                    </Grid>
                    <Grid size={4}>
                        <Box>size=4</Box>
                    </Grid>
                    <Grid size={8}>
                        <Box>size=8</Box>
                    </Grid>
                </Grid>
                </Box>

            </Container>
        </div>
    )
}

export default Layout