export default function ThemeToggle(props) {
    

    return (
        <label className="flex items-center  cursor-pointer text-sm animate-fade animate-delay-1000 " > {/* Added 'text-sm' for smaller font size */}
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#93d8e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
            <input name="toggle"  type="checkbox" onChange={props.toggle} checked={props.darkTheme} className="toggle theme-controller" style={{ transform: 'scale(0.7)', borderColor: '#93d8e2', backgroundColor: '#93d8e2'  }} /> 
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#93d8e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>
    )
}
