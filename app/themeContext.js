'use client'
// context/ThemeContext.js
import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('#fff') // Initial theme color

  useEffect(() => {
    document.documentElement.style.setProperty('--theme-color', theme)
  }, [theme])

  const toggleTheme = ({color}) => {
    // Add your color options here
    const colorOptions = ['#fff', '#ffe855', '#ffe855', '#707070']
    const currentIndex = colorOptions.indexOf(theme)
    const nextIndex = (currentIndex + 1) % colorOptions.length
    setTheme(color)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
