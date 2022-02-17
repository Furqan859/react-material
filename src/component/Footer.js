import React from 'react';
import {Tabs,Tab,Paper} from '@mui/material'

export default function Footer() {
  return (<Paper>
      <Tabs
  value={"2"}
  
  textColor="primary"
  indicatorColor="primary"
  centered 
    > 

  <Tab value="1" label="Item One">one</Tab>
  <Tab value="2" label="Item Two" >two</Tab>
  <Tab value="3" label="Item Three" >three</Tab>
  
</Tabs>
</Paper>
  )
}
