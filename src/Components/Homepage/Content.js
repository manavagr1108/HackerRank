import React from 'react'
import '../../Styles/Homepage/Content.css'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
const Content = () => {
    return (
        <Grid container spacing={3} mt={15}>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
                <Grid container spacing={1}>
                    <Grid item xs={10} pl={0}>
                        <Typography variant="h3" gutterBottom component="div" className='ContentTitle'>
                            Matching developers with great companies.
                        </Typography>
                        <Grid item xs={2}></Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={2} mt={2}>
                    <Grid container spacing={1} xs={6} pl={3}>
                        <Typography variant="h6" gutterBottom component="div" mb={3}>
                            <Typography variant='h4' mb={1.5}>
                                For Companies
                            </Typography>
                            <Typography variant='subtitle1'>
                                We are the market-leading technical interview platform to identify and hire developers wherever they are.
                            </Typography>
                        </Typography>
                        <Button variant="contained" color='success'>Start Hiring</Button>
                    </Grid>
                    <Grid container spacing={1} pl={4} xs={6}>
                        <Typography variant="h6" gutterBottom component="div" mb={3}>
                            <Typography variant='h4' mb={1.5}>
                                For Job Seekers
                            </Typography>
                            <Typography variant='subtitle1'>
                            Join over 16 million developers, practice coding skills, prepare for Interviews and get hired.
                            </Typography>
                        </Typography>
                        <Button variant="outlined" color='success'>Sign Up & Code</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
            </Grid>
        </Grid>
    )
}

export default Content
