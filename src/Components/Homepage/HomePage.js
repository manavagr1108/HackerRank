import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'
import Grid from '@mui/material/Grid'
import '../../Styles/Homepage/HomePage.css'
const HomePage = () => {
    const gridStyle = {
        marginTop : 0,
        marginLeft: 0,
        width: '100%'
    }
    return (
        <div>
            <Grid container spacing={2} sx={gridStyle}>
                <Navbar />
                <Content/>
                <Footer/>
            </Grid>
        </div>
    )
}

export default HomePage
