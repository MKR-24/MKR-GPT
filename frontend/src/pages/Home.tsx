import { Box } from "@mui/material";
import React from "react";
import TypingAnimation from "../components/typer/TypingAnimation";
import Footer from "../components/footer/Footer";

const Home = () => {
   return <Box width={"100%"} height={"100%"}>
    <Box 
    sx={{display:'flex',
    width:"100%",
    flexDirection:"column",
    alignItems:"center",
    mx:"auto",
    mt:3,
    }}>  
    <Box><TypingAnimation/></Box>
    <Box sx={{
        width:"100%",
        display:"flex",
        flexDirection:{md:"row",xs:"column"},
        gap:5,
        my:10,
    }}>
        <img src="https://img.freepik.com/free-vector/gradient-npl-illustration_52683-80462.jpg?t=st=1710697737~exp=1710701337~hmac=d58c5f03ce13cb870f5107d86d885a5179a0ff87208911fd0458868d9bc8e570&w=740" alt="home"
        style={{width:"25%",margin:"auto"}}/>
    </Box>
    <Footer/>
    </Box>
   </Box>
};
export default Home;