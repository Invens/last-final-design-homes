'use client'
// import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React, { useState, useEffect } from 'react'
import Header from '../../components/Navbar/Header'
import Footer from '../../components/Footer/Footer'
import Link from 'next/link'
import ProgressBar from '../../components/Progressbar'
// import Card from './Card'
import MyForm from '../../components/MyForm'
import Omsairam from '../../components/Navbar/Omsairam'
import Image from 'next/image'
const Page = ({}) => {
  const [categoryDataArray, setCategoryDataArray] = useState<any[]>([])
  const categoryFolderMapping: Record<number, string> = {
    106: 'mandir',
    107: 'chest-of-drawers',
    108: 'bar-units',
    109: 'side-tables',
    110: 'foldable-beds',
    111: 'foyer-cabinets',
    112: 'bathroom-vanities',
    69:   'crockery-units',
    70:  'glass-partition',
    67: 'dressers',
    65: 'wardrobe',
    68: 'tv-unit-designs',
    64: 'kitchen-designs',
    66: 'vanities',
    102: 'shoes-rack'





  }
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const timestamp = Date.now()
        const categoryIds = [64, 106, 107,102, 66, 108, 109, 110, 111, 112, 69, 70,67,65,68 ] // Add the category IDs you want to fetch

        // Fetch category data
        const categoryPromises = categoryIds.map(async (categoryId) => {
          const response = await fetch(
            `https://api.designindianwardrobe.com/api/categories/${categoryId}?timestamp=${timestamp}`
          )
          if (response.ok) {
            const data = await response.json()
            return data
          } else {
            console.error(
              `Error fetching data for category ${categoryId}:`,
              response.statusText
            )
            return {}
          }
        })

        const categoryDataArray = await Promise.all(categoryPromises)

        // Fetch image data for each category
        const imageDataPromises = categoryDataArray.map(
          async (categoryData) => {
            const imageResponse = await fetch(
              `https://api.designindianwardrobe.com/api/images/${categoryData.id}?timestamp=${timestamp}`
            )
            if (imageResponse.ok) {
              const imageData = await imageResponse.json()
              // Assuming you want only one image per category
              const selectedImage = imageData[0]
              return selectedImage
            } else {
              console.error(
                `Error fetching image for category ${categoryData.id}:`,
                imageResponse.statusText
              )
              return {}
            }
          }
        )

        const imageDataArray = await Promise.all(imageDataPromises)

        // Combine category data with corresponding image data
        const mergedDataArray = categoryDataArray.map(
          (categoryData, index) => ({
            ...categoryData,
            image: imageDataArray[index],
          })
        )

        setCategoryDataArray(mergedDataArray)
      } catch (error) {
        console.error('Error during fetch:', error)
      }
    }

    fetchCategoryData()
  }, [])

  return (
    <>
    <head>
    <title>Modular Interiors | Modular Kitchens & Wardrobe Brand India</title>

<meta name="description" content ="Our brand is the largest manufacturers of modular interiors, we are top dealers for modular kitchens, wardrobes across Delhi, gurgaon, noida & India." />


<meta name="Author" content="Design Indian Homes" />
<meta name="Generator" content="www.designindianhomes.com" />
<meta name="Language" content="en" />
<meta name="robots" content="index, follow" />
<meta name="Copyright" content="©www.designindianhomes.com" />
<meta name="Designer" content="Design Indian Homes Unit" />
<meta name="Publisher" content="www.designindianhomes.com" />
<meta name="Distribution" content="Global" />
<meta name="Rating" content="general" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="canonical" href="https://designindianhomes.com/modular-interior-design-ideas/"/>
<meta name="googlebot" content="index, follow" />
<meta name="Yahoobot" content="index, follow" />
<meta name="MSNbot" content="Index, Follow" />
<meta name="allow-search" content="yes" />
<meta name="country" content="India"/>
<meta name="contactNumber" content="+91-98-99-26-49-78"/>
<meta name="dc.language" content="english"/>
<meta name="geo.region" content="IN-DL" />
<meta name="geo.placename" content="Delhi" />
<meta property="og:url" content="https://designindianhomes.com/modular-interior-design-ideas/" />
<meta property="og:title" content="Modular Interiors | Modular Kitchens & Wardrobe Brand India" />
<meta property="og:description" content="Our brand is the largest manufacturers of modular interiors, we are top dealers for modular kitchens, wardrobes across Delhi, gurgaon, noida & India" />

    </head>
      <ProgressBar />
      <Header />
      <Omsairam />
      <div className="mt-24 lg:mt-36 mb-16 mx-auto sm:mx-16">
        <div className="p-4  ">
          <span className="text-green-500 text-sm">
            <Link href="/">Home</Link>
          </span>{' '}
          / <span className="text-gray-600 text-sm">Modular Interiors</span>
        </div>

        <div className="flex items-center bg- p-4">
          <div className="w-1 h-8 rounded bg-green-500 mr-2"></div>
          <h1 className="text-3xl font-bold">Modular Interiors</h1>
        </div>
        <p className="text-gray-700 text-sm px-7">
          We make your Modular Interiors look good, just as you dress up to look
          up, we are your modular interiors Makeover Specialist. All Our Modular
          Interiors are very affordable and we have more than 1000+ wardrobe
          designs to showcase, book a site visit with us and see the design
          magic, and we assure you 100% guaranteed quotes across Delhi NCR, we
          stake claim since past 9 years, that you bring us any Quote and we
          offer you Flat 7% off. Check out our designs for best Wardrobe Ideas
          and Inspirations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 mt-16">
          {categoryDataArray.map((categoryData) => (
            <div
              key={categoryData.id}
              className="bg-white rounded-md shadow-md p-6"
            >
              {categoryData.image && (
                <Link
                  href={`/modular-interiors/${
                    categoryFolderMapping[categoryData.id]
                  }`}
                >
                  <Image
                    width={1000}
                    height={1000}
                    src={`https://api.designindianwardrobe.com/uploads/${categoryData.image.filename}`}
                    alt={categoryData.image.filename}
                    style={{
                      width: '450px',
                      height: '200px',
                      borderRadius: '10px',
                    }}
                  />
                </Link>
              )}
              <h2 className="text-base font-semibold mt-4">
                {categoryData.name}
              </h2>
              <p className="text-gray-700 mb-4">{categoryData.description}</p>
            </div>
          ))}
        </div>
      </div>

      

      <Footer />
    </>
  )
}
export default Page
