import React from 'react'
import UploadBox from './UploadBox'
export default function Main(props) {

    const [title, setTitle] = React.useState("VIDEO TO SONG: IT WON'T BE LONG")
    // const [title, setTitle] = React.useState("HYPERLEXED")
    
    const hyperlex = (event) => {
        console.log('hi')
        const letters = "ABCDEFGHI JKLMNOPQRSTUVWXYZ:'"
        let iterations = 0

        const interval = setInterval(() => {

            
            const splittedTitle = title.split("")
            const randomTitle = splittedTitle.map((letter, index) => {
                if (index < iterations) {
                    return title[index]
                }
                return letters[Math.floor(Math.random() * 29)]
            })
            .join("")
            setTitle(randomTitle)
            
            if(iterations >= randomTitle.length) clearInterval(interval)
            iterations += 1 / 3

        }, 50);
    }

    React.useEffect(() => {
        hyperlex();
    }, []);
    return (
        <section className="font-spaceMono h-screen  flex flex-col items-center gap-14 " style={{backgroundColor: props.isDark ? '#1a202c' : '#f8fafc', transition: 'background-color 0.7s ease'}}>
            <h1 className="mt-32 text-6xl font-bold cursor-default  tracking-tight border select-none
            text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-pink-800
            " >
                {title }
            </h1>

            <div className='flex justify-center gap-24  '>
            
                <UploadBox isDark={props.isDark} />
                {/* <div className='border w-64 h-64 gap-14'></div> */}
            </div>
        
        </section>
    )
}