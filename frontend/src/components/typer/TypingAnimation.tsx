import React from 'react'
import { TypeAnimation } from 'react-type-animation'
const TypingAnimation = () => {
  return (
    <div>
  <TypeAnimation
    preRenderFirstString={true}
    sequence={[
      500,
      'Welcome to MKR-GPT😎', // initially rendered starting point
      1000,
      'MY own AI Chatbot🤖',
      1000,
      'Built using OpenAI API💻',
      1000,
      'What would you like to search🌐',
      1500,
    ]}
    speed={50}
    style={{ fontSize: '60px',color:'#fff', display:"inline-block", textShadow:"1px 1px 20px #000" }}
    repeat={Infinity}
  />
</div>
  )
}

export default TypingAnimation