import React from 'react'
import {TextField,InputAdornment,Icon,Box,Typography} from '@mui/material';

interface portProps {
    portName: string;
    portIndex: number;
    children?: React.ReactNode; 
  }
export default function PortComponent(props: portProps) {
  return (
    <>
    <Box className='portCDI'>
    <Icon className='numberPort'>
            {props.portIndex}
    </Icon>
    <Typography className='portText'>
            {props.portName}
    </Typography>
    </Box>
    {/* <TextField
        className='portCDI'
        defaultValue={props.portName}
        InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                      <Icon
                      className='numberPort'
                      >{props.portIndex}</Icon>
                    </InputAdornment>
                  ),
                }}
      /> */}
    </>
  )
}

