import React from 'react';
import Leftpain from './Leftpain';
import Rightpain from './Rightpain';
import { Grid, Paper } from '@mui/material';

export default function Index() {

    const styles = {
        paper:{
            padding: 20,
             margin: 20 
        }
    }

    return (<Grid container >
        <Grid Item sm>
           <Leftpain styles={styles}/>

        </Grid>

        <Grid Item sm>
           <Rightpain styles={styles}/>
        </Grid>
    </Grid>
    )
}
