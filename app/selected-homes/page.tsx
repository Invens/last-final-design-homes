'use client'
// import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React, { useState, useEffect } from 'react'
import Header from '../../components/Navbar/Header'
import Footer from '../../components/Footer/Footer'
import Link from 'next/link'
import ProgressBar from '../../components/Progressbar'
// import Card from './Card'
import Head from 'next/head'
import MyForm from '../../components/MyForm'
import Omsairam from '../../components/Navbar/Omsairam'
import Image from 'next/image'
const Page = ({}) => {
  const [categoryDataArray, setCategoryDataArray] = useState<any[]>([])
  const categoryFolderMapping: Record<number, string> = {
    113: 'astounding-lobby-area-designs',
    114: 'artistic-bedroom-designs',
    115: 'comforting-balcony-area-designs',
    116: 'soulful-kids-room-designs',
    117: 'relaxed-walk-in-wardrobe-designs',
    118: 'handsome-modular-wardrobe-designs',
    119: 'exquisite-bathroom-remodel-designs',
    120: 'chilled-party-bar-unit-designs',
    121: 'blissful-parents-room-designs-ideas',
    122: 'spellbinding-living-room-designs',
    123: 'delicious-modular-kitchen-designs',
    124: 'mesmerizing-modern-home-interiors',
    125: 'wholesome-modern-interiors-designs',
    // Add more mappings as needed
  }
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const timestamp = Date.now()
        const categoryIds = [
          113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125,
        ] // Add the category IDs you want to fetch

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
      <ProgressBar />
      <Header />
      <Omsairam />
      <div className="mt-24 lg:mt-36 mb-16 mx-auto sm:mx-16">
        <Head>
          <title>
            Interior Design Ideas | Top Interior Design Company in India
          </title>

          <meta
            name="description"
            content="We are a team of interior designers & architects, we are designing interiors for homes, residences, apartments, farmhouses, villas, societies across Delhi NCR India"
          />

          <meta name="Author" content="Design Indian Homes" />
          <meta name="Generator" content="www.designindianhomes.com" />
          <meta name="Language" content="en" />
          <meta name="robots" content="index, follow" />
          <meta name="Copyright" content="©www.designindianhomes.com" />
          <meta name="Designer" content="Design Indian Homes Unit" />
          <meta name="Publisher" content="www.designindianhomes.com" />
          <meta name="Distribution" content="Global" />
          <meta name="Rating" content="general" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="canonical"
            href="https://designindianhomes.com/interior-design-ideas/
"
          />
          <meta name="googlebot" content="index, follow" />
          <meta name="Yahoobot" content="index, follow" />
          <meta name="MSNbot" content="Index, Follow" />
          <meta name="allow-search" content="yes" />
          <meta name="country" content="India" />
          <meta name="contactNumber" content="+91-98-99-26-49-78" />
          <meta name="dc.language" content="english" />
          <meta name="geo.region" content="IN-DL" />
          <meta name="geo.placename" content="Delhi" />
          <meta
            property="og:url"
            content="https://designindianhomes.com/interior-design-ideas/"
          />
          <meta
            property="og:title"
            content="Interior Design Ideas | Top Interior Design Company in India"
          />
          <meta
            property="og:description"
            content="We are a team of interior designers & architects, we are designing interiors for homes, residences, apartments, farmhouses, villas, societies across Delhi NCR India"
          />
        </Head>
        <div className="p-4  ">
          <span className="text-green-500 text-sm">
            <Link href="/">Home</Link>
          </span>{' '}
          / <span className="text-gray-600 text-sm">selected-homes</span>
        </div>

        <div className="flex items-center b p-4">
          <div className="w-1 h-8 rounded bg-green-500 mr-2"></div>
          <h1 className="text-3xl font-bold">Selected Homes</h1>
        </div>
        <p className="text-gray-700 text-sm px-7">
          We bring you carefully-curated Artistic design ideas, to give your
          home a brand new look. Explore exclusive interior designs and trends
          that are every bit inspirational as they are practical. Our team of
          interior designers have put together ideas across kitchen, bedroom,
          living room and more, to help you pick a design that will best suit
          your home interior requirements.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 mt-16">
          {categoryDataArray.map((categoryData) => (
            <div
              key={categoryData.id}
              className="bg-white rounded-md shadow-md p-6"
            >
              {categoryData.image && (
                <Link
                  href={`/selected-homes/${
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

      <div className="bg-red-500 p-16 mb-16">
        <MyForm />
      </div>

      <Footer />
    </>
  )
}
export default Page
