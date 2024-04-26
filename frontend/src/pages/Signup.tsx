import React, { useEffect } from 'react';
import { MdLogin } from "react-icons/md";
import {Button, Box,Typography } from '@mui/material';
import Input from '../components/shared/Input';
import {toast} from 'react-hot-toast'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate=useNavigate();
  const auth=useAuth();
  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData=new FormData(e.currentTarget);
    const name=formData.get("name") as string;
    const email=formData.get("email") as string;
    const password=formData.get("password") as string;
    try {
      await auth?.signup(name,email,password);
      toast.loading("Signing Up",{id:"signup"});
      toast.success("Sign Up Successful",{id:"signup"});
    } catch (error) {
      console.log(error);
      toast.error("Sign Up Failure",{id:"signup"});
    }
  };
  useEffect(()=>{
    if(auth?.user){
      return navigate("/chat");
    }
  },[auth])
  return <Box width={"100%"} height={"100%"} display="flex" flex={1}>
    <Box padding={8} mt={8} display={{md:"flex",sm:"none",xs:"none"}}>
      <img src="https://img.freepik.com/free-vector/floating-robot_78370-3669.jpg?t=st=1710070257~exp=1710073857~hmac=221147fbd6a96faa787b7edc0307fd77d536f4a9c0327aa835da0dca53d1ae27&w=740" alt="Robot" style={{width:"400px"}} />
    </Box>
    <Box display={'flex'} flex={{xs:1,md:0.5}} 
    justifyContent={"center"}
     alignItems={"center"}
     padding={2}
     ml={'auto'}
     mt={16}>
      <form
      onSubmit={handleSubmit}
      style={{margin:"auto",
      padding:"30px",
      boxShadow:"10px 10px 20px #000",
      borderRadius:"10px",
      border:"none",
      }}>
        <Box sx={{display:'flex',flexDirection:"column",
      justifyContent:"center",
      }}>
        <Typography 
        variant="h4"
        textAlign="center"
        padding={2}
        fontWeight={600}
        >
          Signup
        </Typography>
        <Input type="text" name="name" label="Name" />
        <Input type="email" name="email" label="Email" />
        <Input type="password" name="password" label="Password"/>
        <Button type='submit' 
          sx={{
          px:2,
          py:1,
          mt:2,
          width:"400px",
          borderRadius:2,
          bgcolor:"#00fffc",
          ":hover":{
            bgcolor:"#fff",
            color:"#000",
          }
          }}
          endIcon={<MdLogin/>}
          >
            Signup
          </Button>
        </Box>
      </form>


    </Box>
  </Box>;
};

export default Signup;