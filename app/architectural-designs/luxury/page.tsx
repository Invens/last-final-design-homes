'use client'

import Header from '../../../components/Navbar/Header'
import Footer from '../../../components/Footer/Footer'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import ProgressBar from '../../../components/Progressbar'
import Tabs from '../Tabs'
import Nav from 'react-bootstrap/Nav'
import Omsairam from '../../../components/Navbar/Omsairam'
import Image from 'next/image'
const Page = ({}) => {
  const [images, setImages] = useState<Array<{ id: number; filename: string }>>(
    []
  )
  useEffect(() => {
    const categoryIds = [44] // Add the category IDs you want to fetch
    const fetchImages = async () => {
      try {
        const timestamp = Date.now()
        const response = await fetch(
          `https://api.designindianwardrobe.com/api/images/${categoryIds}?timestamp=${timestamp}`
        )
        if (response.ok) {
          const data = await response.json()
          setImages(data)
        } else {
          console.error('Error fetching images:', response.statusText)
        }
      } catch (error) {
        console.error('Error during fetch:', error)
      }
    }

    fetchImages()
  }, [])

  return (
    <>
      <ProgressBar />
      <Omsairam />
      <Header />

      <div className="mt-24 lg:mt-36 mb-16 mx-auto sm:mx-16">
        {/* breadcrumb */}
        <div className="p-4  ">
          <span className="text-green-500 text-sm">
            <Link href="/">Home</Link>
          </span>{' '}
          /{' '}
          <span className="text-green-500 text-sm">
            <Link href="/interior-design-ideas">Architectural Designs</Link>
          </span>{' '}
          / <span className="text-gray-600 text-sm">Luxury</span>
        </div>

        {/* tabs */}

        <Tabs id={4} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 mt-16">
          {images.map((image) => (
            <Image
              width={1000}
              height={1000}
              key={image.id}
              src={`https://api.designindianwardrobe.com/uploads/${image.filename}`}
              alt={image.filename}
              style={{ width: '450px', height: '250px', borderRadius: '10px' }}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Page
