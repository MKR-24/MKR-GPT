import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const Logo = () => {
  return <div style={{
    display:'flex',

    marginRight:"auto",
    alignItems:'center',
    gap:"8px",
  }}>
    <Link to={'/'}>
        <img src='https://img.freepik.com/free-vector/chatbot-conversation-vectorart_78370-4107.jpg?t=st=1710060709~exp=1710064309~hmac=7a04263fb6fd90b66e5e7d6c7bbd22205072c8f47686515c8ba1b4eb21987bef&w=740'
        alt="openai"
         width={'30px'} 
         height={'30px'}
         className='image-inverted'
          />
         
    </Link>
    <Typography
           sx={{
            display:{md:"block",sm:"none",xs:"none"},
          mr:"auto",
          fontWeight:"700",
          textShadow:"2px 2px 20px #000",
        }}>
            <span style={{fontSize:"20px"}}> MKR</span>-GPT
          </Typography>
  </div>;
  
};
export default Logo;
