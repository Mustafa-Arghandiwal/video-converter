import React from 'react'
import './index.css';

export default function UploadBox(props) {


    const handleOnMouseMove = e => {
        const { currentTarget: target } = e
        const rect = target.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top

        target.style.setProperty("--mouse-x", `${x}px`)
        target.style.setProperty("--mouse-y", `${y}px`)
    }

    


    return (
        <div id='box' onMouseMove={handleOnMouseMove} className={`h-72 w-72 rounded-xl cursor-pointer relative border border-dashed border-gray-700  
            hover:scale-110 duration-300 animate-fade animate-delay-1000 `}
            style={{
                // backgroundColor: props.isDark ? 'rgba(255, 255, 255, 0.01)' : 'rgba(255, 255, 255, 0.01)'
            }}
        >

        </div>
    )
} 

// ${props.isDark ? 'light-torch': 'dark-torch'}