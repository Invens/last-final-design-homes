'use client'
import React, { useState, useEffect } from 'react'
import Header from '../../../components/Navbar/Header'
import Footer from '../../../components/Footer/Footer'
import Head from 'next/head'
import Link from 'next/link'
import ProgressBar from '../../../components/Progressbar'
import Tabs from '../Tabs'
import Nav from 'react-bootstrap/Nav'
import Omsairam from '../../../components/Navbar/Omsairam'
import HomesSlider from './HomesSlider'

const Card = ({ project, handleImageClick }) => {
  return (
    <div
      onClick={() => handleImageClick(project.id)}
      className="max-w-sm rounded overflow-hidden shadow-lg relative cursor-pointer"
    >
      <div className="relative h-56">
        {' '}
        <img
          className="absolute h-full w-full object-cover"
          src={project.images[0]}
          alt={project.heading}
        />
        <div className="absolute top-0 left-0 bg-gray-800 px-2 py-1 text-white text-sm font-semibold rounded-tr rounded-bl">
          Total Images: {project.images.length}
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.heading}</div>
        <p className="text-gray-700 text-base">{project.desc}</p>
      </div>
    </div>
  )
}

const Page = ({}) => {
  const tempData = [
    {
      id: 0,
      heading: 'Our Project 1',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, asperiores?',
      images: [
        'https://api.designindianwardrobe.com/uploads/tv-unit-designs-in-delhi-gurgaon-noida-india%20(1).jpeg',
        'https://api.designindianwardrobe.com/uploads/tv-unit-designs-in-delhi-gurgaon-noida-india%20(1).jpg',
        'https://api.designindianwardrobe.com/uploads/tv-unit-designs-in-delhi-gurgaon-noida-india%20(2).jpg',
      ],
    },
    {
      id: 1,
      heading: 'Our Project 2',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, asperiores?',
      images: [
        'https://api.designindianwardrobe.com/uploads/tv-unit-designs-in-delhi-gurgaon-noida-india%20(3).jpg',
        'https://api.designindianwardrobe.com/uploads/tv-unit-designs-in-delhi-gurgaon-noida-india%20(4).jpg',
      ],
    },
    {
      id: 2,
      heading: 'Our Project 3',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, asperiores?',
      images: [
        'https://api.designindianwardrobe.com/uploads/bathroom-vanities-dealers-and-manufacturers-in-delhi-gurgaon-noida-india%20(1).jpeg',
        'https://api.designindianwardrobe.com/uploads/bathroom-vanities-dealers-and-manufacturers-in-delhi-gurgaon-noida-india%20(4).jpg',
        'https://api.designindianwardrobe.com/uploads/bathroom-vanities-dealers-and-manufacturers-in-delhi-gurgaon-noida-india%20(2).jpeg',
        'https://api.designindianwardrobe.com/uploads/bathroom-vanities-dealers-and-manufacturers-in-delhi-gurgaon-noida-india%20(3).jpg',
      ],
    },
  ]
  const [projectIndex, setProjectIndex] = useState(0)
  const [showSlider, setShowSlider] = useState(false)
  const [images, setImages] = useState<Array<{ id: number; filename: string }>>(
    []
  )
  // useEffect(() => {
  //   const categoryIds = [68] // Add the category IDs you want to fetch
  //   const fetchImages = async () => {
  //     try {
  //       const timestamp = Date.now()
  //       const response = await fetch(
  //         `https://api.designindianwardrobe.com/api/images/${categoryIds}?timestamp=${timestamp}`
  //       )
  //       if (response.ok) {
  //         const data = await response.json()
  //         setImages(data)
  //       } else {
  //         console.error('Error fetching images:', response.statusText)
  //       }
  //     } catch (error) {
  //       console.error('Error during fetch:', error)
  //     }
  //   }

  //   fetchImages()
  // }, [])
  const handleImageClick = (index: number) => {
    setProjectIndex(index)
    setShowSlider(true)
  }

  const handleCloseSlider = () => {
    setShowSlider(false)
  }

  return (
    <>
      <ProgressBar />
      <Omsairam />
      <Header />

      <div className="mt-32 lg:mt-64 mb-16 mx-auto mx-8 sm:mx-16">
        {/* breadcrumb */}
        <div className="p-4  ">
          <span className="text-green-500 text-sm">
            <Link href="/">Home</Link>
          </span>{' '}
          /{' '}
          <span className="text-green-500 text-sm">
            <Link href="/design-ideas">Design ideas</Link>
          </span>{' '}
          / <span className="text-gray-600 text-sm">Our Homes</span>
        </div>

        {/* tabs */}
        <Tabs id={7} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 mt-16">
          {tempData.map((project) => (
            <Card
              key={project.id}
              project={project}
              handleImageClick={handleImageClick}
            />
          ))}
        </div>
      </div>
      {showSlider && (
        <HomesSlider
          projects={tempData}
          initialProject={projectIndex}
          onClose={handleCloseSlider}
          onNextSlide={() =>
            setProjectIndex((prevIndex) => (prevIndex + 1) % images.length)
          }
          onPrevSlide={() =>
            setProjectIndex(
              (prevIndex) => (prevIndex - 1 + images.length) % images.length
            )
          }
        />
      )}
      <Footer />
    </>
  )
}

export default Page
