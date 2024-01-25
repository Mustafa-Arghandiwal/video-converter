import React from 'react'
import './index.css';
import { FaUpload } from "react-icons/fa6";

export default function UploadBox(props) {

    const [file, setFile] = React.useState()

    const handleFile = event => {
        setFile(event.target.files[0])
    }


    const handleOnMouseMove = e => {
        const { currentTarget: target } = e
        const rect = target.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top

        target.style.setProperty("--mouse-x", `${x}px`)
        target.style.setProperty("--mouse-y", `${y}px`)
    }




    return (
        <div id='box' onMouseMove={handleOnMouseMove} className='h-72 w-72 rounded-xl  relative shadow-2xl 
            hover:scale-110 duration-300 animate-fade animate-delay-1000 grid place-items-center p-3'
            style={{
                // backgroundColor: props.isDark ? 'rgba(255, 255, 255, 0.01)' : 'rgba(255, 255, 255, 0.01)'
            }}
        >


            {!file ?
                <div className='z-10'>
                    <input id='fileInput' className=' hidden' type='file' onChange={handleFile} />
                    <label htmlFor='fileInput' className='z-20 flex items-center gap-2 cursor-pointer border border-cyan-600  p-2 rounded-xl bg-transparent
                hover:scale-110 duration-150'>
                        <FaUpload className='text-cyan-600' />
                        <p className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-400'>UPLOAD</p>
                    </label>

                </div>

                :

                <div className='z-10 text-wrap w-11/12 flex flex-col gap-2'>
                    <p className='animate-fade animate-delay-100 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500'><span className='font-bold'>Name:</span> {(file.name).replace(/\.[^/.]+$/, '')}</p>
                    <p className='animate-fade animate-delay-200 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500'><span className='font-bold'>Type:</span> {(file.type).split('/')[(file.type).split('/').length - 1]}</p>
                    <p className='animate-fade animate-delay-300 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500'><span className='font-bold'>Size:</span> {(file.size / 1024 / 1024).toFixed(2)} MB</p>

                </div>


            }






        </div>
    )
}

// ${props.isDark ? 'light-torch': 'dark-torch'}