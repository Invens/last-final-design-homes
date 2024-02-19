'use client'
import React, { useRef, useEffect } from 'react'
import Marquee from 'react-fast-marquee'
const Omsairam = () => {
  return (
    <div
      className="bg-black font-bold text-white h-[30px]"
      style={{ zIndex: '10000', position: 'fixed', width: '100%', top: 0 }}
    >
      <h1
        className="text-center  text-white font-bold "
        style={{ fontSize: '8px' }}
      >
        <a href="https://devotionalindia.com" target="_blank">
          ॐ साईं राम
        </a>
      </h1>

      <div className="bg-black w-full ">
        <Marquee
          className="text-xs w-full whitespace-no-wrap h-[20px] bg-black"
          direction="left"
          speed={50}
          // style={{
          //   width: '100%',
          //   whiteSpace: 'nowrap',
          //   height: '20px',
          //   backgroundColor: 'black',
          // }}
        >
          <div className="inline-block">
            {' '}
            🙂 Largest Manufacturing Brand Across Noida - Delhi - NCR 🙂 Bring
            Us any Quote & Take Flat 7% Off. 100% Guaranteed Quotes for all
            Modular Kitchens & Wardrobes.
          </div>
        </Marquee>
      </div>
    </div>
  )
}

export default Omsairam
