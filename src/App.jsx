import React from 'react'
import Header from './Header.jsx'
import Main from './MainContent.jsx'
export default function App() {
  const [isDark, setIsDark] = React.useState(true)

    function changeTheme() {
        setIsDark(prevIsDark => !prevIsDark)
    }
  return (
    <>
    <Header isDark={isDark} toggleTheme={changeTheme}/>
    <Main isDark={isDark} toggleTheme={changeTheme}/>
    </>

  )
}