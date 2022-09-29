import React, { useState } from 'react';
import {portDatas} from './Ports';
import {Grid, Container, Typography} from '@mui/material';
import './Port.css'
import PortComponent from './PortComponent';

const ControllerDigitalInput = () => {

  return (
    <Container className='containerCDI'>
    <Typography className="titleCDI">Controller Digital Input</Typography>
    <Grid container columns= {{md: 8}} >
    {portDatas.map((port,index) => (
            <Grid item md={2} >          
               <PortComponent portName={port.name} portIndex={index+1}/>
            </Grid>

          ))}

    </Grid>

       

    </Container>

  )

}



export default ControllerDigitalInput;