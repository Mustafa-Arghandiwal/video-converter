import React from 'react';
import logo from './assets/vid.svg'
import { IoMdPerson } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import ThemeToggle from './ThemeToggle.jsx';


export default function Header(props) {
    // const [isDark, setIsDark] = React.useState(true)

    // function ChangeTheme() {
    //     setIsDark(prevIsDark => !prevIsDark)
    // }


    return (
        <header className="font h-28 flex items-center justify-between  gap-2 px-1 sm:px-1 lg:px-10  shadow-xl" style={{backgroundColor: props.isDark ? '#1a202c' : '#f8fafc', transition: 'background-color 0.3s ease'}}> 
        <div className='flex justify-center gap-2 items-center select-none'>

            <img src={logo} alt='logo' className='h-14 sm:h-14 md:h-24 lg:h-28 animate-fade animate-delay-300'/>
            <a href='/' className='text-xl sm:text-xl md:text-2xl lg:text-3xl text-nowrap font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-pink-600
             animate-fade animate-delay-500
             drop-shadow-2xl
            '>MY VIDEO CONVERTER</a>
        </div>

        <ul className='flex items-center flex-col sm:flex-row   gap-1 md:gap-10 lg:gap-10 mr-0 lg:mr-10  '>
            <li className='flex items-center gap-1  p-2 rounded-md ' style={{
                        transition: 'background-color 0.3s ease', // Optional: Add a smooth transition effect
                     }}
                     onMouseOver={(e) => { e.currentTarget.style.backgroundColor = props.isDark ? '#2d3748' : '#e2e8f0'; }}
                     onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'initial'; }}>
                <IoMdPerson size={25}  className='animate-fade animate-delay-700 text-cyan-600 '/>
                <a href='/' className='flex items-center gap-1 animate-fade animate-delay-700 text-nowrap
                    font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500'
                    
                    >
                        Sign in</a>
            </li>

            
                <ThemeToggle idDark={props.isDark} toggleTheme={props.toggleTheme} />


            {/* <li className='flex items-center gap-2'>
                <FaGithub size={25} className='animate-fade animate-delay-300 text-cyan-200'/>
                <a href='/' className='flex items-center gap-1 animate-fade animate-delay-1000
                    font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-pink-300'>
                        My Github</a>
            </li> */}
            
        </ul>
        </header>
    )
}