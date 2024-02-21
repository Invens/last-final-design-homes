'use client'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import Image from 'next/image'
export default function TitlebarBelowMasonryImageList() {
  const [screenSize, setScreenSize] = useState('')

  const updateScreenSize = () => {
    if (window.matchMedia('(min-width: 1280px)').matches) {
      setScreenSize('lg')
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      setScreenSize('md')
    } else {
      setScreenSize('sm')
    }
  }

  useEffect(() => {
    // Initial screen size determination
    updateScreenSize()

    // Watch for changes in screen size using matchMedia
    const mediaQuery = window.matchMedia('(min-width: 768px)')

    const handleMediaQueryChange = (event) => {
      updateScreenSize() // Update screen size when media query changes
      console.log('Screen Width:', window.innerWidth)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    // Cleanup the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  let col = 3
  if (screenSize === 'sm') {
    col = 2
  }
  return (
    <MaxWidthWrapper className="my-16 mb-24">
      <h1 className="text-4xl text-center mb-12">
        Design Indian Homes{' '}
        <span className="text-[#95805a] italic">Offerings</span>
      </h1>
      {/* <Box sx={{ width: '100%', height: 450, overflowY: 'scroll' }} */}

      <Box
        sx={{
          width: '100%',
          height: 450,
          overflowY: 'scroll',
        }}
        className="sectiondemo"
      >
        <ImageList
          cols={col} // Adjust the number of columns for mobile view
          gap={8}
          sx={{
            '@media (min-width: 600px)': {
              cols: 2, // Set the number of columns for larger screens
            },
          }}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <Image
              width={1000}
              height={1000}
                srcSet={`${item.img}?w=248&h=268&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&h=268&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                className="rounded-lg"
              />
              {/* <ImageListItemBar
                position="below"
                title={item.title}
                className="text-3xl"
              /> */}
              <h2 className="text-xl text-center text-[#95805a] font-[200]">
                {item.title}
              </h2>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </MaxWidthWrapper>
  )
}

const itemData = [
  {
    img: '/images/spacesaving.png',
    title: 'Bed',
    author: 'swabdesign',
  },
  {
    img: '/images/luxe/luxe1.jpeg',
    title: 'Books',
    author: 'Pavel Nekoranec',
  },
  {
    img: '/images/luxe/luxe2.jpeg',
    title: 'Sink',
    author: 'Charles Deluvio',
  },
  {
    img: '/images/luxe/luxe3.jpeg',
    title: 'Kitchen',
    author: 'Christian Mackie',
  },
  {
    img: '/images/luxe/luxe4.jpeg',
    title: 'Blinds',
    author: 'Darren Richardson',
  },
  {
    img: '/images/luxe/luxe5.jpeg',
    title: 'Chairs',
    author: 'Taylor Simpson',
  },
  {
    img: '/images/luxe/luxe6.jpeg',
    title: 'Laptop',
    author: 'Ben Kolde',
  },
  {
    img: '/images/luxe/luxe7.jpeg',
    title: 'Doors',
    author: 'Philipp Berndt',
  },
  {
    img: '/images/luxe/luxe8.jpeg',
    title: 'Coffee',
    author: 'Jen P.',
  },
  {
    img: '/images/luxe/luxe9.jpeg',
    title: 'Storage',
    author: 'Douglas Sheppard',
  },
  {
    img: '/images/luxe/luxe10.jpeg',
    title: 'Candle',
    author: 'Fi Bell',
  },
  {
    img: '/images/luxe/luxe11.jpeg',
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
  },
]
