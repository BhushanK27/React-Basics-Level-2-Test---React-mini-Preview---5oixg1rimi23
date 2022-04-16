import React,{useState,useEffect} from 'react'
import '../styles/App.css';
import { Preview } from './Preview';
const App = () => {
const [text, setText] = useState("hello world")
const[font,setFont]=useState(10);
const[padding,setPadding]=useState(5);

const[fontSize,setFontSize]=useState({fontSize:`${font}px`})
const[pad,setPad]=useState({padding:`${padding}px`});

function handleInput(event)
{
  if (event.target.id === 'contentInput')
  {
    setText(event.target.value);
  }
  else if(event.target.id ==='fontSizeInput')
  {
    setFont(event.target.value);
    
  }
  else if(event.target.id === 'paddingInput') 
  {
    setPadding(event.target.value);
    
  }
}

useEffect(() => {
  setFontSize(
    { fontSize: `${font}px` }
  )
  setPad(
    { padding: `${padding}px` }
  )
  
}, [font,padding])


  return (
    <div id="main">
      <div>
        {/* add input elememnts inside here */}
        {/* <label htmlFor='contentInput'>Content</label>
        <input type={'text'} value={text} id='contentInput' onChange={(e)=> setText(e.target.value)}></input>
        <br/>
        <label htmlFor='paddingInput'>Padding</label>
        <input type={'number'} value={padding} id='paddingInput' onChange={(e) => setPadding(e.target.value)}></input>
        <br/>
        <label htmlFor='fontSizeInput'>Font Size</label>
        <input type={'number'} value={font} id='fontSizeInput' onChange={(e) => setFont(e.target.value)}></input>
        <br/> */}
        <label htmlFor='contentInput'>Content</label>
        <input type={'text'} value={text} id='contentInput' onChange={(event) => handleInput(event)}></input>
        <br />
        <label htmlFor='paddingInput'>Padding</label>
        <input type={'number'} value={padding} id='paddingInput' onChange={(event) => handleInput(event)}></input>
        <br />
        <label htmlFor='fontSizeInput'>Font Size</label>
        <input type={'number'} value={font} id='fontSizeInput' onChange={(event) => handleInput(event)}></input>
        <br />
      </div>
 
 {/* render Preview component here */}
      {/* <Preview fontSize={font} content={text} padding={padding} /> */}
      <Preview fontSize={fontSize.fontSize} content={text} padding={pad.padding} />
    </div>
  )
}


export default App;
