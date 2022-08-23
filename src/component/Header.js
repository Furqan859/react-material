import React from 'react'
import {AppBar,Toolbar,Typography,Grid,Icon} from '@mui/material';

export default function Header({theme}) {
  return (
    <AppBar position='static' color={theme} variant={theme}>
    <Grid container sm={12}>
   
    <Grid Item sm={11}>
    <Toolbar>
    <Typography variant='h5' >Exercise Database</Typography>
    
    </Toolbar>
    </Grid>

    <Grid Item sm={1}>
    <Toolbar placement='top-end'>
    <Typography variant='h5' >
    
    <Icon color='secoundary ' sx={{fontSize:40}}>add_circle</Icon>
    </Typography>
    </Toolbar>
    
    </Grid>

    </Grid>
    </AppBar>
    
  )
}
