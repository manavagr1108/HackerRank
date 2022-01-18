import React from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import '../../Styles/Homepage/Navbar.css'
const Navbar = () => {
    const buttonContainer = {
        display: 'flex',
        alignItems: 'center'
    }
    return (
        <Grid container spacing={4} mt={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}>
                <Typography variant="h5" gutterBottom component="div" className='HomeIcon'>Hacker Rank</Typography>
            </Grid>
            <Grid item xs={5}></Grid>
            <Grid item xs={3} sx={buttonContainer}>
                    <Button variant="text" color='info'>Login</Button>
                    <Button variant="outlined" color='info'>Sign Up</Button>
            </Grid>
        </Grid>
    )
}

export default Navbar
