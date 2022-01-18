import React from 'react'
import '../../Styles/Homepage/Footer.css'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
const Footer = () => {
    return (
        <Grid container spacing={4} mt={25}>
            <Grid item xs={2}></Grid>
            <Grid item xs={5}>
                <Typography variant="subtitle2" gutterBottom component="div" >
                    Copyright © 2022 HackerRank  |  Careers
                </Typography>
                <Typography variant="subtitle2" gutterBottom component="div" >
                    Privacy Policy
                </Typography>
            </Grid>
            <Grid item xs={5}></Grid>
        </Grid>
    )
}

export default Footer
