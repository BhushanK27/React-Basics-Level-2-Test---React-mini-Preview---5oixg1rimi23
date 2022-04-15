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
        <label for="contenInput">Content </label>
        <input type="text" value={text} id='contentInput' onChange={(e)=> setText(e.target.value)}></input>
        <br/>
        <label for="paddingInput">Padding </label>
        <input type="number" value={padding} id='paddingInput' onChange={(e) => setPadding(e.target.value)}></input>
        <br/>
        <label for="fontSizeInput">Font Size </label>
        <input type="number" value={font} id='fontSizeInput' onChange={(e) => setFont(e.target.value)}></input>
        <br/>
      </div>
 
 {/* render Preview component here */}
      <Preview fontSize={font} content={text} padding={padding} />
    </div>
  )
}


export default App;
