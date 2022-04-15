import React from 'react';

export const Preview = ({fontSize,content,padding}) =>{
    return (
        <div id="preview" style={{padding:`${padding}px`,fontSize:`${fontSize}px`}}>
            {content}
        </div>
    )
}