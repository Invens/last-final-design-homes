'use client'
import React, { useState } from 'react'
import { useTheme } from '../../app/themeContext'

const Page = () => {
  const { theme, toggleTheme } = useTheme()
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedColor, setSelectedColor] = useState('#fff')

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const handleColorSelect = (color) => {
    toggleTheme({ color })
    setSelectedColor(color)
    setShowDropdown(false)
  }

  return (
    <div className="flex flex-row gap-2 relative">
      <button
        className="w-4 h-4 border-2 border-black rounded-full"
        style={{ backgroundColor: selectedColor }}
        onClick={toggleDropdown}
      ></button>
      {showDropdown && (
        <div className="absolute flex flex-col gap-1 -top-4 -left-4 justify-center items-center bg-white border-2 border-black p-2 rounded-full">
          <button
            className="w-4 h-4 border-2 border-black rounded-full bg-white"
            style={{ backgroundColor: '#fff' }}
            onClick={() => handleColorSelect('#fff')}
          ></button>
          <button
            className="w-4 h-4 border-2 border-black rounded-full bg-white"
            style={{ backgroundColor: '#ffe855' }}
            onClick={() => handleColorSelect('#ffe855')}
          ></button>
          <button
            className="w-4 h-4 border-2 border-black rounded-full bg-white"
            style={{ backgroundColor: '#f54e07' }}
            onClick={() => handleColorSelect('#f54e07')}
          ></button>
          <button
            className="w-4 h-4 border-2 border-black rounded-full bg-white"
            style={{ backgroundColor: '#707070' }}
            onClick={() => handleColorSelect('#707070')}
          ></button>
        </div>
      )}
    </div>
  )
}

export default Page
