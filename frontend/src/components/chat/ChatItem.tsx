import { Avatar, Box, Typography } from '@mui/material';
import React from 'react'
import { useAuth } from '../../context/AuthContext';
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'; 
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
function extractCodeFromString(message:string) {
  if(message.includes("```")){
    const blocks=message.split("```");
    return blocks;
  }
}
function isCodeBlock(str:string){
  if(str.includes("=") || str.includes("[") || str.includes("[") || str.includes("]") || str.includes(";") || str.includes("{") || str.includes("}") || str.includes("#")|| str.includes("//")){
    return true;
  }
  return false;
}
const ChatItem = (
    {content,role,}
    :
    {content:string;
        role:"user"|"assistant";
    }) => {
     const messageBlocks = extractCodeFromString(content);
  const auth= useAuth();
  return role === "assistant" ? (
  <Box 
  sx={{display: "flex",p:2,bgcolor:"#004d5612",my:2,gap:2}}
  >
    <Avatar sx={{ml:"0"}}>
        <img src="https://img.freepik.com/free-vector/chatbot-conversation-vectorart_78370-4107.jpg?t=st=1710060709~exp=1710064309~hmac=7a04263fb6fd90b66e5e7d6c7bbd22205072c8f47686515c8ba1b4eb21987bef&w=740"
         alt="logo"
         width={"30px"} />
    </Avatar>
    <Box>
       {!messageBlocks && (<Typography sx={{fontSize:"20px"}}>{content}</Typography>
       )}
       {messageBlocks 
       &&
       messageBlocks.length
        && 
        messageBlocks.map((block)=> isCodeBlock(block) ? 
        <SyntaxHighlighter style={coldarkDark} language='javascript' >
          {block}
        </SyntaxHighlighter>:
        <Typography sx={{fontSize:"20px"}}>{block}</Typography>
        )} 
    </Box>
  </Box>) : (
    <Box 
    sx={{display: "flex",p:2,bgcolor:"#004d56",gap:2,my:2}}
    >
      <Avatar sx={{ml:"0", bgcolor:"#000",color:"#fff"}}>
      {auth?.user?.name[0]}{auth?.user?.name.split(" ")[1][0]}
      </Avatar>
      <Box>
       {!messageBlocks && (<Typography sx={{fontSize:"20px"}}>{content}</Typography>
       )}
       {messageBlocks 
       &&
       messageBlocks.length
        && 
        messageBlocks.map((block)=> isCodeBlock(block) ? 
        <SyntaxHighlighter style={coldarkDark} language='javascript' >
          {block}
        </SyntaxHighlighter>:
        <Typography sx={{fontSize:"20px"}}>{block}</Typography>
        )} 
    </Box>
    </Box>
  );
}

export default ChatItem