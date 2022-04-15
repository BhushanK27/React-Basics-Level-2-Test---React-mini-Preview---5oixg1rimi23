import React,{useState} from 'react'
// import { useState } from 'react/cjs/react.production.min';
import '../styles/App.css';
import { Preview } from './Preview';
const App = () => {
const [text, setText] = useState("hello world")
const[font,setFont]=useState(10);
const[padding,setPadding]=useState(5);
  return (
    <div id="main">
      <div>
        {/* add input elememnts inside here */}
        Content 
        <input type={"text"} value={text} id='contentInput' onChange={(e)=> setText(e.target.value)}></input>
        <br/>
        Padding 
        <input type={"number"} value={padding} id='paddingInput' onChange={(e) => setPadding(e.target.value)}></input>
        <br/>
        Font Size 
        <input type={"number"} value={font} id='fontSizeInput' onChange={(e) => setFont(e.target.value)}></input>
        <br/>
      </div>
 
 {/* render Preview component here */}
      <Preview fontSize={font} content={text} padding={padding} />
    </div>
  )
}


export default App;
