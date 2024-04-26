import React from 'react'
import { TextField } from '@mui/material'
type Props={
    name:string;
    type:string;
    label:string
}
const Input = (props:Props) => {
  return <TextField 
  InputLabelProps={{style:{color:"white"}}}
   name={props.name}
    label={props.label}
     type={props.type}
     margin='normal'
     InputProps={{style:{width:"400px",borderRadius:10,fontSize:20}}}
     />
};

export default Input;