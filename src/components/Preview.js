import React from 'react';

export const Preview = ({fontSize,content,padding}) =>{
    return (
        <div id="preview" style={{padding,fontSize}}>
            {/* <div id="preview" style={{ padding: `${padding}px`, fontSize: `${fontSize}px` }}> */}
        {/* {console.log(fontSize)}
        {console.log(padding)} */}
            {content}
        </div>
    )
}