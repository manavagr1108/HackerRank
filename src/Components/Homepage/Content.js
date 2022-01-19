import React from 'react'
import '../../Styles/Homepage/Content.css'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
const Content = () => {
    const buttonstyle = {
        boxShadow: 'rgba(27, 169, 76, 0.4) 0px 3px 6px 0px'
    }
    return (
        <Grid container spacing={3} mt={15}>
            <Grid item xs={0} sm={2}></Grid>
            <Grid item xs={10} sm={8} md={8} lg={4} xl={4}>
                <Grid container spacing={1}>
                    <Grid item xs={10} pl={0}>
                        <Typography variant="h3" gutterBottom component="div" className='ContentTitle'>
                            Matching developers with great companies.
                        </Typography>
                        <Grid item xs={2}></Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={2} mt={7}>
                    <Grid container spacing={1} xs={12} sm={12} md={6} pl={3} pb={5}>
                        <Typography variant="h6" gutterBottom component="div" mb={3}>
                            <Typography variant='h4' mb={1.5}>
                                <span className='ContentSubTitle'>For Companies</span>
                            </Typography>
                            <Typography variant='subtitle1'>
                                We are the market-leading technical interview platform to identify and hire developers wherever they are.
                            </Typography>
                        </Typography>
                        <Button variant="contained" p={1} size='large' color='success' sx={buttonstyle}><span className='ContentButton'>Start Hiring</span></Button>
                    </Grid>
                    <Grid container spacing={1} pl={4} xs={12} sm={12} md={6} pb={2}>
                        <Typography variant="h6" gutterBottom component="div" mb={3}>
                            <Typography variant='h4' mb={1.5}>
                                <span className='ContentSubTitle'>
                                    For Job Seekers
                                </span>
                            </Typography>
                            <Typography variant='subtitle1'>
                                Join over 16 million developers, practice coding skills, prepare for Interviews and get hired.
                            </Typography>
                        </Typography>
                        <Button variant="outlined" size='large' color='success'><span className='ContentButton'>Sign Up & Code</span></Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item display={{ xs: "none", sm: "none", md: "none" , lg: "block"}} xs={0} sm={0} md={0} lg={6} xl={6}>
                <img src='HackerRankImg.png' alt='HackerRankImg' className='HackerRankImg' />
            </Grid>
        </Grid>
    )
}

export default Content
