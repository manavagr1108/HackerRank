import React from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
// import Typography from '@mui/material/Typography'
import '../../Styles/Homepage/Navbar.css'
const Navbar = () => {
    const buttonContainer = {
        display: 'flex',
        alignItems: 'center' 
    }
    return (
        <Grid container spacing={4} mt={5}>
            <Grid item xs={0} sm={2}></Grid>
            <Grid item xs={10} sm={10} md={10} lg={2} xl={2}>
                <img src='HackerRankLogo.png' alt='img' className='HackerRankLogo'/>
            </Grid>
            <Grid item xl={5} lg={5} md={2} sm={2} xs={0}></Grid>
            <Grid item xs={8} sm={5} md={4} lg={3} xl={3} sx={buttonContainer}>
                    <Button variant="text" color='info' className='buttonComponent'>Login</Button>
                    <Button variant="outlined" color='info' className='buttonComponent'>Sign Up</Button>
            </Grid>
        </Grid>
    )
}

export default Navbar
