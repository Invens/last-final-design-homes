'use client'
// import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React, { useState, useEffect } from 'react'
import Header from '../../components/Navbar/Header'
import Footer from '../../components/Footer/Footer'
import Head from 'next/head'
import Link from 'next/link'
import ProgressBar from '../../components/Progressbar'
// import Card from './Card'
import MyForm from '../../components/MyForm'
import Omsairam from '../../components/Navbar/Omsairam'

import Image from 'next/image'

const Card = ({ image, heading, description }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src={image} alt="Card Image" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{heading}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  </div>
);
const cardsData = [
 
  { image: 'image-url-1.jpg', heading: 'Card 1', description: 'Description for Card 1' },
  { image: 'image-url-1.jpg', heading: 'Card 1', description: 'Description for Card 1' },
  { image: 'image-url-1.jpg', heading: 'Card 1', description: 'Description for Card 1' },
  { image: 'image-url-1.jpg', heading: 'Card 1', description: 'Description for Card 1' },
  { image: 'image-url-1.jpg', heading: 'Card 1', description: 'Description for Card 1' },
  { image: 'image-url-1.jpg', heading: 'Card 1', description: 'Description for Card 1' },

];
const Page = ({}) => {
 

 
  return (
    <>
      <ProgressBar />
      <Header />
      <Omsairam />
      <div className="mt-24 lg:mt-36 mb-16 mx-auto sm:mx-16">
        <Head>
          <title>
            Modular Interiors | Modular Kitchens & Wardrobe Brand India
          </title>
          <meta
            name="description"
            content="Our brand is the largest manufacturers of modular interiors, we are top dealers for modular kitchens, wardrobes across Delhi, gurgaon, noida & India."
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
            href="https://designindianhomes.com/modular-interior-design-ideas/
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
            content="https://designindianhomes.com/modular-interior-design-ideas/"
          />
          <meta
            property="og:title"
            content="Modular Interiors | Modular Kitchens & Wardrobe Brand India"
          />
          <meta
            property="og:description"
            content="Our brand is the largest manufacturers of modular interiors, we are top dealers for modular kitchens, wardrobes across Delhi, gurgaon, noida & India"
          />
        </Head>
        <div className="p-4  ">
          <span className="text-green-500 text-sm">
            <Link href="/">Home</Link>
          </span>{' '}
          / <span className="text-gray-600 text-sm">Design ideas</span>
        </div>

        <div className="flex items-center  p-4">
          <div className="w-1 h-8 rounded bg-green-500 mr-2"></div>
          <h1 className="text-3xl font-bold">Home Interior Design</h1>
        </div>
        <p className="text-gray-700 text-sm px-7">
          We bring you carefully-curated interior design ideas, to give your
          home a brand new look. Explore exclusive interior designs and trends
          that are every bit inspirational as they are practical. Our team of
          interior designers have put together ideas across kitchen, bedroom,
          living room and more, to help you pick a design that will best suit
          your home interior requirements.
        </p>

         <div className="flex flex-wrap justify-center">
    {cardsData.map((card, index) => (
      <Card key={index} {...card} />
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
