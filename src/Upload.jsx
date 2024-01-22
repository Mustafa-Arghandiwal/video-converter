import React from 'react'
export default function Upload() {

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

        }, 20);
    }

    return (
        <section className="font-spaceMono  border grid place-items-center">
            <h1 className="mt-32 text-6xl font-bold  tracking-wide transition-transform transform hover:scale-105
            text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-300
            " onMouseOver={hyperlex}>
                {title }
            </h1>
        
        </section>
    )
}