'use client'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Marquee from 'react-fast-marquee'

import 'react-before-after-slider-component/dist/build.css'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import useMedia from 'use-media'
import CarouselBeforeAfter from './CarouselBefore'
import BrandImageSlider from './BrandsCarousel'
// import CarouselBeforeAfter from '@/components/Collection/CarousalBefore'

// import BrandImageSlider from '@/components/Collection/BrandsCarousel'


const falshResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 264 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 264 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
}
const StructureImageUrl = [
  //First image url
  {
    url: '/images/structural/str1.jpg',
  },
  {
    url: '/images/structural/str2.jpg',
  },
  {
    url: '/images/structural/str3.jpg',
  },
  {
    url: '/images/structural/str4.jpg',
  },
  {
    url: '/images/structural/str5.jpg',
  },
  {
    url: '/images/structural/str6.jpg',
  },
]

const flasherslider = [
  {
    id: 0,
    firstImage:
      'https://source.unsplash.com/a-kitchen-with-blue-cabinets-and-a-black-refrigerator-zFGBEikZoRg',
    secondImage:
      'https://source.unsplash.com/a-ladder-and-buckets-of-paint-in-a-room-under-construction-XXanshmt5so',
  },
  {
    id: 1,
    firstImage:
      'https://source.unsplash.com/a-kitchen-with-blue-cabinets-and-a-black-refrigerator-zFGBEikZoRg',
    secondImage:
      'https://source.unsplash.com/a-ladder-and-buckets-of-paint-in-a-room-under-construction-XXanshmt5so',
  },
  {
    id: 2,
    firstImage:
      'https://source.unsplash.com/a-kitchen-with-blue-cabinets-and-a-black-refrigerator-zFGBEikZoRg',
    secondImage:
      'https://source.unsplash.com/a-ladder-and-buckets-of-paint-in-a-room-under-construction-XXanshmt5so',
  },
  {
    id: 3,
    firstImage:
      'https://source.unsplash.com/a-kitchen-with-blue-cabinets-and-a-black-refrigerator-zFGBEikZoRg',
    secondImage:
      'https://source.unsplash.com/a-ladder-and-buckets-of-paint-in-a-room-under-construction-XXanshmt5so',
  },
  {
    id: 4,
    firstImage:
      'https://source.unsplash.com/a-kitchen-with-blue-cabinets-and-a-black-refrigerator-zFGBEikZoRg',
    secondImage:
      'https://source.unsplash.com/a-ladder-and-buckets-of-paint-in-a-room-under-construction-XXanshmt5so',
  },
  {
    id: 5,
    firstImage:
      'https://source.unsplash.com/a-kitchen-with-blue-cabinets-and-a-black-refrigerator-zFGBEikZoRg',
    secondImage:
      'https://source.unsplash.com/a-ladder-and-buckets-of-paint-in-a-room-under-construction-XXanshmt5so',
  },
  {
    id: 6,
    firstImage:
      'https://source.unsplash.com/a-kitchen-with-blue-cabinets-and-a-black-refrigerator-zFGBEikZoRg',
    secondImage:
      'https://source.unsplash.com/a-ladder-and-buckets-of-paint-in-a-room-under-construction-XXanshmt5so',
  },
]

const KitchenImageUrl = [
  //First image url
  {
    url: '/images/kitchen/k1.avif',
  },
  {
    url: '/images/kitchen/k2.avif',
  },
  {
    url: '/images/kitchen/k3.avif',
  },
  {
    url: '/images/kitchen/k4.avif',
  },
  {
    url: '/images/kitchen/k5.avif',
  },
  {
    url: '/images/kitchen/k6.avif',
  },
]

const InteriorImageUrl = [
  //First image url
  {
    url: '/images/interior/int1.avif',
  },
  {
    url: '/images/interior/int2.avif',
  },
  {
    url: '/images/interior/int3.avif',
  },
  {
    url: '/images/interior/int4.avif',
  },
  {
    url: '/images/interior/int5.avif',
  },
  {
    url: '/images/interior/int6.avif',
  },
]

const WardrobeImageUrl = [
  //First image url
  {
    url: '/images/wardrobe/complete-modular-kitchens-wardrobe-renovation-services-in-delhi-gurgaon-noida-india (1).jpg',
  },
  {
    url: '/images/wardrobe/complete-modular-kitchens-wardrobe-renovation-services-in-delhi-gurgaon-noida-india (2).jpg',
  },
  //Second image url
  {
    url: '/images/wardrobe/largest-collection-of-modular-kitchens-wardrobes-designs-in-delhi-gurgaon-noida-india (5).jpg',
  },
  //Third image url
  {
    url: '/images/wardrobe/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (2).jpg',
  },

  //Fourth image url

  {
    url: '/images/wardrobe/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (6).jpg',
  },

  {
    url: '/images/wardrobe/larg/complete-modular-kitchens-wardrobe-renovation-services-in-delhi-gurgaon-noida-india (3).jpg',
  },
]

const containerStyle = {
  position: 'relative',
  height: 'fit-content', // Adjust as needed
  width: 'fit-content', // Adjust as needed
  display: 'inline-block', // Ensure the container only takes the size of its content
}

const textContainerStyle = {
  zIndex: '1', // Ensure text is above the background image
  textAlign: 'center', // Center the text
  position: 'relative', // Position the text within the container
}

const backgroundImageStyle = {
  position: 'absolute', // Position the image behind the text
  top: '0',
  left: '0',
  width: '100%', // Set the width to 100%
  height: '100%', // Set the height to 100%
  objectFit: 'cover', // Ensure the image covers the container
  opacity: '1', // Adjust the opacity as needed
}

const TruncatedText = () => {
  const [showFullText, setShowFullText] = useState(false)

  const toggleFullText = () => {
    setShowFullText(!showFullText)
  }

  return (
    <div className=" text-center">
      <div className={` ${showFullText ? 'my-8' : 'my-2'}`}>
        {showFullText ? (
          <div className="mb-6 text-left sm:mx-12 mx-4">
            <div className="mb-2 text-left">
              <p>
                <span className="text-4xl font-bold">D</span>esign Indian Homes
                is India&apos;s top Interior, Architectural & Modular Interior
                Brand serving across Delhi, Gurgaon, Noida & NCR. It is the most
                sought out by Homemakers, Architects, Interior Designers,
                Developers & just anyone who needs an Affordable Interior
                Makeover, Renovation Services, Architectural Services, Modular
                Kitchen, Wardrobe, Vanities, TV Units, Living works, Bathroom Or
                Just a peaceful Turnkey Work by Our Team. We are serving End to
                End Interiors & Modular Interiors across Delhi, Gurgaon, Noida,
                Faridabad & across NCR.
              </p>
            </div>
            Our Brand Design Indian Homes was established in 2007, we are a
            professional team of certified architects, interior remodelers, and
            also happen to be Largest manufacturers of Modular Kitchens,
            Wardrobes, Tv units, Crockery units, Bookshelves, and just anything
            residential or commercial. We are delivering affordable top-quality
            Interiors, Architectural Solutions, Modular Kitchens, Wardrobes, Tv
            Units, Bookshelves, Shoeracks, Crockery Units, etc & executing end
            to end projects for our Clients. We are the Largest Manufacturers of
            Modular Kitchens, Wardrobes & TV Units across New Delhi - Gurgaon -
            Noida NCR; we have multiple modular manufacturing facilities across
            North India and are associated with more than 900+ Architects,
            Interior Designers, developers and Builders along with our thousands
            of direct clients across New Delhi - NCR. <br />
            We have over 5000+ interior designs and can cater to any custom
            requirements for our clients and associates. Delivering the most
            Affordable Luxury is our Principle, and we work with utmost
            integrity and complete transparency. <br />
            Due to the Goodwill built by the brand and faith of our clients, we
            are the most referred to modular interior Brand in Delhi - Gurgaon -
            Noida and across India. All our interior designs, architectural
            concepts, modular kitchen designs, wardrobe designs, tv units
            designs, or any modular kitchens are planned to perfection as per
            the design requirements. We create smooth, crisp, and meticulous
            designs for your residence & also are top modular kitchen & modular
            wardrobe manufacturers with a precision timing in delivery,
            extensive warranty and a lifelong relation with our Brand. <br />
            Our Modular Interior brand is also the top Modular brand in Delhi -
            NCR India, and we are honored with the prestigious award of the Top
            Modular brand in India by the Timber Wood Society of India. <br />
            This is all due to the Hard work put in by our architectural
            designers, our installers, our supervisors, our management and our
            entire Team which works tirelessly 24/7 in delivering top-notch
            modular kitchen designs to our clients across New Delhi - India.{' '}
            <br />
            <div className="my-8 text-left">
              <p className="mb-2">
                We have the largest Modular Interior facilities and are serving
                extensively with the most affordable solutions for the following
                services:
              </p>

              <ul className="list-disc pl-6 mb-4">
                <li>Modular Kitchens</li>
                <li>Wardrobes</li>
                <li>TV Units</li>
                <li>Vanities</li>
              </ul>

              <ul className="list-disc pl-6 mb-4">
                <li>Crockery Units</li>
                <li>Shoe Racks</li>
                <li>Bookshelves</li>
                <li>Partitions</li>
              </ul>

              <ul className="list-disc pl-6 mb-4">
                <li>Studies & Bar Units</li>
                <li>Mandir Units</li>
                <li>End To End Interiors</li>
                <li>Complete Structures</li>
              </ul>

              <ul className="list-disc pl-6 mb-4">
                <li>Luxury Interiors & Residences</li>
                <li>Luxury Kitchens And Wardrobes</li>
                <li>
                  Italian - German - Swedish - Danish - Spanish Modular Kitchens
                  & Wardrobes
                </li>
              </ul>
            </div>
            <br />
            We assure you 100% Guaranteed Quotes across New Delhi - NCR for any
            type of Interior Works, Architectural Works, renovation works,
            Modular Kitchens, Wardrobes, TV units, or just any Modular Works,
            custom interior works, or architectural consultancy works. We have
            the most affordable modular interiors and serve all clients with
            perfect understanding of the requirements. <br />
            We also assure you to bring us any quotes and assure you flat 7%
            less on any offerings by any vendor across New Delhi - NCR. <br />
            Connect with the Largest Interior, Architectural, Modular Kitchens &
            Wardrobes Brand Across New Delhi - NCR - India. <br />
            We are the Top Awarded Largest manufacturers for Modular Kitchens &
            Wardrobes across Delhi - NCR & have been rated as the TOP Interior &
            Architectural Brand by The Architectural Congress India and Real
            Wood Societies since 2016. <br />
          </div>
        ) : (
          <div className="mb-2 text-left sm:mx-12 mx-4">
            <p className="text-left">
              <span className="text-4xl font-bold">D</span>esign Indian Homes is
              India&apos;s top Interior, Architectural & Modular Interior Brand
              serving across Delhi, Gurgaon, Noida & NCR. It is the most sought
              out by Homemakers, Architects, Interior Designers, Developers &
              just anyone who needs an Affordable Interior Makeover, Renovation
              Services, Architectural Services, Modular Kitchen, Wardrobe,
              Vanities, TV Units, Living works, Bathroom Or Just a peaceful
              Turnkey Work by Our Team. We are serving End to End Interiors &
              Modular Interiors across Delhi, Gurgaon, Noida, Faridabad & across
              NCR.
            </p>
          </div>
        )}
      </div>

      {/* Read More / Read Less button */}
      <button
        className={`border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg cursor-pointer transition duration-300 ${
          showFullText ? 'text-blue-500 cursor-pointer' : ''
        }`}
        onClick={toggleFullText}
      >
        {showFullText ? 'Read Less' : 'Read More'}
      </button>
    </div>
  )
}

const Collection = () => {
  const isLargeScreen = useMedia({ minWidth: '768px' })
  console.log(isLargeScreen)
  const brand = [
    {
      id: 1,
      img: '/images/brands/b1.png',
    },
    {
      id: 2,
      img: '/images/brands/b2.png',
    },
    {
      id: 3,
      img: '/images/brands/b3.png',
    },
    {
      id: 4,
      img: '/images/brands/b4.png',
    },
    {
      id: 5,
      img: '/images/brands/b5.png',
    },
    {
      id: 6,
      img: '/images/brands/b6.png',
    },
    {
      id: 7,
      img: '/images/brands/b7.png',
    },
    {
      id: 8,
      img: '/images/brands/b8.png',
    },
    {
      id: 9,
      img: '/images/brands/b9.png',
    },
    {
      id: 10,
      img: '/images/brands/b10.png',
    },
    {
      id: 11,
      img: '/images/brands/b1.png',
    },
    {
      id: 12,
      img: '/images/brands/b2.png',
    },

    {
      id: 13,
      img: '/images/brands/b3.png',
    },
    {
      id: 14,
      img: '/images/brands/b4.png',
    },
  ]

  const data = [
    {
      id: 1,
      img: '/images/brands/c1.png',
    },
    {
      id: 2,
      img: '/images/brands/c2.png',
    },
    {
      id: 3,
      img: '/images/brands/c3.png',
    },
    {
      id: 4,
      img: '/images/brands/c4.png',
    },
    {
      id: 5,
      img: '/images/brands/c5.png',
    },
    {
      id: 6,
      img: '/images/brands/c6.png',
    },
    {
      id: 7,
      img: '/images/brands/c7.png',
    },
    {
      id: 8,
      img: '/images/brands/c8.png',
    },
    {
      id: 9,
      img: '/images/brands/c9.png',
    },
    {
      id: 10,
      img: '/images/brands/c10.png',
    },
    {
      id: 11,
      img: '/images/brands/c1.png',
    },
    {
      id: 12,
      img: '/images/brands/c2.png',
    },

    {
      id: 13,
      img: '/images/brands/c3.png',
    },
    {
      id: 14,
      img: '/images/brands/c4.png',
    },
  ]

  const aniRef = useRef()
  const { scrollYProgress } = useScroll({
    target: aniRef,
  })

  const translateXright = useTransform(scrollYProgress, [1, 0], [200, -200])
  const translateXleft = useTransform(scrollYProgress, [1, 0], [-200, 200])

  const translateXrightMob = useTransform(scrollYProgress, [1, 0], [400, -400])
  const translateXleftMob = useTransform(scrollYProgress, [1, 0], [-400, 400])

  const translateXrightWithSpring = useSpring(translateXright, {
    stiffness: 200,
    damping: 40,
  })
  const translateXleftWithSpring = useSpring(translateXleft, {
    stiffness: 200,
    damping: 40,
  })

  const translateXrightWithSpringMob = useSpring(translateXrightMob, {
    stiffness: 10,
    damping: 10,
  })
  const translateXleftWithSpringMob = useSpring(translateXleftMob, {
    stiffness: 10,
    damping: 10,
  })

  const videoVariants = {
    initial: {
      y: 30,
      x: 0,
      opacity: 0,
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  }

  const imagesVariants = {
    initial: {
      y: 30,
      x: 0,
      opacity: 0,
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = document.querySelector('video')
    video.addEventListener('load', () => {
      setIsPlaying(true)
    })
  }, [])

  return (
    <>
      <div id="fry">
        <div style={containerStyle} className="mt-8">
          <div style={textContainerStyle}>
            <h3 className="sm:text-4xl text-xl font-bold">
              INDIA’S NO.1 INTERIOR & ARCHITECTURAL BRAND
            </h3>
          </div>
          <img
            src="https://www.onlygfx.com/wp-content/uploads/2022/03/simple-gold-brush-stroke-banner-5.png"
            alt="Paint Brush"
            style={backgroundImageStyle}
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <TypeAnimation
          sequence={[
            'TOP KITCHEN & CLOSET BRAND ',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            ' LARGEST KITCHEN DEALERS',
            1000,
            'MODULAR KITCHEN & CLOSET',
            1000,
            'LARGEST ARCHITECTURAL BRAND',
            1000,
            'TOP AWARDED INTERIORS',
            1000,
          ]}
          style={{ fontSize: '55px' }}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>

      <div className="main-hero mt-5">
        <div className="cover">
          <div className="box a">
            <h1>
              OUR WORK
              <br />
              CENTERS ON RESULTS
            </h1>
          </div>
          <div className="box b">
            <h1>
              {' '}
              OUR STYLE
              <br />
              IS TO DELIVER SMILES
            </h1>{' '}
          </div>
        </div>
      </div>

      <section className="outter hero-video">
        <div className="videoBox mt-3 rounded-xl">
          <motion.video
            loop
            autoPlay
            muted
            playsInline
            width={1600}
            height={550}
            className="rounded-xl shadow-md mx-auto sm:w-[90%]"
            variants={videoVariants}
            initial="initial"
            whileInView="animate"
            poster='/designindianhomes-video-poster.png'
          >
            <source
              src="https://ik.imagekit.io/hlsvvxksxg/video-interior-designer-company-in-delhi-gurgaon-noida-india%20(1).webm?updatedAt=1708376524924"
              type="video/mp4"
              
            />
            Your browser does not support the video tag.
          </motion.video>
        </div>
        <div className="callout">
          <h3 className="bg-transparent text-sm md:text-4xl">
            Looking for Interiors or Modular Works
          </h3>
          <br />
          <a
            className=" button hover:bg-white"
            href="/book-a-interior-design-visit"
          >
            Connect with us
          </a>
        </div>
      </section>

      <div className="my-12">
        <TruncatedText />
      </div>

      <Marquee style={{ backgroundColor: ' yellow ' }} className="my-6">
        <div className="marquee">
          <h3>
            Top Interior, Architectural & Modular Kitchen - Wardrobe Brand in
            Delhi - NCR - India
          </h3>
        </div>
      </Marquee>
      <div
        className="w-full overflow-hidden mx-auto text-center my-8"
        ref={aniRef}
      >
        <motion.h2
          className="md:text-[76px] text-xl  text-center uppercase sm:my-8 mt-8 whitespace-nowrap"
          style={
            isLargeScreen
              ? {
                  x: translateXleftWithSpringMob,
                  fontFamily: 'Roboto, sans-serif',
                }
              : {
                  x: translateXleftWithSpring,
                  fontFamily: 'Roboto, sans-serif',
                }
          }
        >
          <span className="font-[50]"> welcome to </span>
          <span
            style={{
              fontWeight: 900,
              WebkitTextStroke: '2px black',
              letterSpacing: '2px',
            }}
          >
            affordable luxury
          </span>

          <span className="font-[100]"> welcome to </span>
          <span
            style={{
              fontWeight: 900,
              WebkitTextStroke: '2px black',
              letterSpacing: '2px',
            }}
          >
            affordable luxury
          </span>

          <span className="font-[100]"> welcome to </span>
          <span
            style={{
              fontWeight: 900,
              WebkitTextStroke: '2px black',
              letterSpacing: '2px',
            }}
          >
            affordable luxury
          </span>
        </motion.h2>
        <motion.h2
          className="md:text-[76px] text-xl  text-center uppercase pr-2 sm:my-8 mb-8 whitespace-nowrap"
          style={
            isLargeScreen
              ? {
                  x: translateXrightWithSpringMob,
                  fontFamily: 'Roboto, sans-serif',
                }
              : {
                  x: translateXrightWithSpring,
                  fontFamily: 'Roboto, sans-serif',
                }
          }
        >
          <span className="font-[50]"> welcome to </span>
          <span
            style={{
              fontWeight: 900,
              WebkitTextStroke: '2px black',
              letterSpacing: '2px',
            }}
          >
            affordable luxury
          </span>

          <span className="font-[100]"> welcome to </span>
          <span
            style={{
              fontWeight: 900,
              WebkitTextStroke: '2px black',
              letterSpacing: '2px',
            }}
          >
            affordable luxury
          </span>

          <span className="font-[100]"> welcome to </span>
          <span
            style={{
              fontWeight: 900,
              WebkitTextStroke: '2px black',
              letterSpacing: '2px',
            }}
          >
            affordable luxury
          </span>
        </motion.h2>
      </div>

      <div className="container mx-auto ">
        <section className="newz">
          <div className="flex flex-wrap">
            <div className=" mb-4" id="news">
              {/* <section class="bordered bordersec"></section>
              <div className="main-hero">
                <div className="cover">
                  <div className="box ai"></div>
                  <div className="box bi"></div>
                </div>
              </div>
            </div> */}

              {/* <div className="w-[150%%] overflow-hidden" ref={aniRef}>
          <motion.h2
            className="md:text-6xl font-extrabold text-md  text-center overflow-hidden uppercase mt-8"
            style={
              isLargeScreen
                ? { x: translateXleftWithSpringMob }
                : { x: translateXleftWithSpring }
            }
          >
            <span className="text-red-500">Dive Deep</span>{' '}
            <span className="italic font-light">into </span>
            <span className="italic font-light">the World of </span>{' '}
            <b className="text-red-500">DIH</b>
          </motion.h2>
          <motion.h2
            className="md:text-6xl font-extrabold text-md  text-center  overflow-hidden uppercase mb-8"
            style={
              isLargeScreen
                ? { x: translateXrightWithSpringMob }
                : { x: translateXrightWithSpring }
            }
          >
            <span className="text-red-500">Dive Deep</span>{' '}
            <span className="italic font-light">into </span>
            <span className="italic font-light">the World of </span>{' '}
            <b className="text-red-500">DIH</b>
          </motion.h2>
        </div> */}

              <Link href="/luxe">
                <motion.video
                  loop
                  autoPlay
                  playsInline
                  muted
                  controls={isPlaying}
                  src="video/lux.mp4"
                  alt=""
                  height={10}
                  width={1500}
                  className="rounded shadow-md my-6 max-[600px]:mb-10"
                  id="seek"
                  variants={videoVariants}
                  initial="initial"
                  whileInView="animate"
                />
              </Link>

              <section class="bordered bordersec"></section>
              {/* <div className="main-hero">
                <div className="cover">
                  <div className="box ai"></div>
                  <div className="box bi"></div>
                </div>
              </div> */}
              <div className="flex justify-center items-center sm:my-16 my-8">
                <div style={containerStyle}>
                  <div
                    style={textContainerStyle}
                    className="flex justify-center "
                  >
                    <h1 className="sm:text-4xl text-xl font-bold text-center">
                      Our Exclusive Content
                    </h1>
                  </div>
                  <img
                    src="https://www.onlygfx.com/wp-content/uploads/2022/03/simple-gold-brush-stroke-banner-5.png"
                    alt="Paint Brush"
                    style={backgroundImageStyle}
                  />
                </div>
              </div>

              <motion.video
                loop
                autoPlay
                muted
                controls={isPlaying}
                width={1500}
                height={550}
                playsInline
                className="rounded shadow-md"
                style={{}}
                variants={videoVariants}
                initial="initial"
                whileInView="animate"
              >
                <source src="/video/dkivid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </motion.video>
              {/* 
            <video loop autoPlay controls={isPlaying} src="video/vid21.mp4" alt="" height={10} width={1500}
              className="rounded shadow-md"


            /> */}
            </div>
            <motion.div
              className="imagesContainer flex flex-wrap justify-center"
              variants={imagesVariants}
              initial="initial"
              whileInView="animate"
            >
              {/* Image 1 */}
              <motion.div
                className="md:w-1/2 lg:w-1/3 mb-4"
                variants={imagesVariants}
                id="news"
              >
                <Image
                  height={350}
                  width={700}
                  className="rounded shadow-md"
                  src="/images/qwer.png"
                  alt=""
                />
              </motion.div>

              {/* Image 2 */}
              <motion.div
                className="md:w-1/2 lg:w-1/3 mb-4"
                variants={imagesVariants}
                id="news"
              >
                <Image
                  height={350}
                  width={700}
                  className="rounded shadow-md"
                  src="/images/qwert.png"
                  alt=""
                />
              </motion.div>

              {/* Image 3 */}
              <motion.div
                className="md:w-1/2 lg:w-1/3 mb-4"
                variants={imagesVariants}
                id="news"
              >
                <Image
                  height={350}
                  width={700}
                  className="rounded shadow-md"
                  src="/images/qwerty.png"
                  alt=""
                />
              </motion.div>

              {/* Image 4 */}
              <motion.div
                className="md:w-1/2 lg:w-1/3 mb-4"
                variants={imagesVariants}
                id="news"
              >
                <Image
                  height={350}
                  width={700}
                  className="rounded shadow-md"
                  src="/images/asd.png"
                  alt=""
                />
              </motion.div>

              {/* Image 5 */}
              <motion.div
                className="md:w-1/2 lg:w-1/3 mb-4"
                variants={imagesVariants}
                id="news"
              >
                <Image
                  height={350}
                  width={700}
                  className="rounded shadow-md"
                  src="/images/asdf.png"
                  alt=""
                />
              </motion.div>

              {/* Image 6 */}
              <motion.div
                className="md:w-1/2 lg:w-1/3 mb-4"
                variants={imagesVariants}
                id="news"
              >
                <Image
                  height={350}
                  width={700}
                  className="rounded shadow-md"
                  src="/images/talk.png"
                  alt=""
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* before and after */}

        <CarouselBeforeAfter />
        {/* ------------ */}
      </div>

      <div className="container mx-auto sm:my-16 my-8 bg-[#d8f1c7] p-8">
        <h1 className="text-3xl font-bold sm:mb-16 mb-8 text-center">
          Why Design Indian Homes?
        </h1>
        <div id="" className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          <div className="flex flex-col items-center text-center">
            <Image
              width={100}
              height={100}
              src="/images/icon/icons8-on-time-delivery-53.png"
            />
            <p>On time Delivery</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              width={100}
              height={100}
              src="/images/icon/icons8-home-50.png"
            />
            <p>1609+ Happy Homes</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              width={100}
              height={100}
              src="/images/icon/icons8-structure-26.png"
            />
            <p>81+ Inhouse Architects & Interior Pro</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              width={100}
              height={100}
              src="/images/icon/icons8-construction-building-96.png"
            />
            <p>End To End Interiors & Structure Building</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              width={100}
              height={100}
              src="/images/icon/icons8-warranty-64.png"
            />
            <p>Warranty Direct from Source</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              width={100}
              height={100}
              src="/images/icon/icons8-engineer-50.png"
            />
            <p>Professional Personnel</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              width={100}
              height={100}
              src="/images/icon/icons8-construction-building-96.png"
            />
            <p>In-House Modular Manufacturing</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              width={100}
              height={100}
              src="/images/icon/icons8-check-50.png"
            />
            <p>Multiple Quality Checks</p>
          </div>
        </div>
      </div>

      <section class="bordered bordersec pt-16"></section>

      {/* ------------------------------------------------ */}
      <div className="z-10 text-center text-2xl sm:text-4xl sm:py-16 py-12 font-bold">
        {/* <h1 className="sm:-mb-16">Connect With Us</h1> */}
        <div className="flex justify-center items-center sm:my-8">
          <div style={containerStyle}>
            <div style={textContainerStyle} className="flex justify-center ">
              <h1 className="sm:text-4xl text-xl font-bold text-center">
                Connect With Us
              </h1>
            </div>
            <img
              src="https://www.onlygfx.com/wp-content/uploads/2022/03/simple-gold-brush-stroke-banner-5.png"
              alt="Paint Brush"
              style={backgroundImageStyle}
            />
          </div>
        </div>
      </div>

      <div className="section1 relative">
        {/*------------------------------------------ */}
        <div className="main1">
  <svg id="rotatingText1" viewBox="0 0 200 200" width={200} height={200}>
    <defs>
      <path
        id="circle"
        d="M 100, 100
           m -75, 0
           a 75, 75 0 1, 0 150, 0
           a 75, 75 0 1, 0 -150, 0"
      ></path>
    </defs>
    {/* Place the image at the center of the circle */}
    <image href="/images/left.gif" width={50} height={50} x="75" y="75" />
    <text width={400}>
      <textPath
        alignmentBaseline="top"
        xlinkHref="#circle"
        className="text"
      >
        The Best Home Interior Brand of India -
      </textPath>
    </text>
  </svg>
</div>


        {/* ------------------------------- */}
        <motion.section
          variants={imagesVariants}
          initial="initial"
          whileInView="animate"
        >
          <motion.div className="card" variants={imagesVariants}>
            <a
              href="https://wa.me/9899264978"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="grin">
                <article className="mainz">
                  <h2>Connect on</h2>
                  <h1>Whatsapp</h1>
                </article>
                <section className="sidez">
                  <Image src="/images/whatsapp-icon.svg" width={0} height={0} />
                </section>
              </div>
            </a>
          </motion.div>

          <motion.div className="card" variants={imagesVariants}>
            <Link href="/book-visit">
              <div className="grin">
                <article className="mainz ">
                  <h2>Book An</h2>
                  <h1>Appointment</h1>
                </article>
                <section className="sidez">
                  <Image src="/images/marker-icon.svg" width={0} height={0} />
                </section>
              </div>
            </Link>
          </motion.div>

          <motion.div className="card" variants={imagesVariants}>
            <Link href="/schedule-videocall">
              <div className="grin">
                <article className="mainz ">
                  <h2>Schedule A</h2>
                  <h1>Video Call</h1>
                </article>
                <section className="sidez">
                  <Image src="/images/video-icon.svg" width={0} height={0} />
                </section>
              </div>
            </Link>
          </motion.div>
        </motion.section>
      </div>
      {/* ------------------------------------------ */}

      <div className="mt-24">
        <hr className="border-t-[1px] border-red-500 w-full mb-20 my-24" />
        {/* <h1>Best Trending Kitchens</h1> */}
        <div className="flex justify-center items-center my-8">
          <div style={containerStyle}>
            <div style={textContainerStyle} className="flex justify-center ">
              <h1 className="sm:text-4xl text-xl font-bold text-center">
                Best Trending Kitchens
              </h1>
            </div>
            <img
              src="https://www.onlygfx.com/wp-content/uploads/2022/03/simple-gold-brush-stroke-banner-5.png"
              alt="Paint Brush"
              style={backgroundImageStyle}
            />
          </div>
        </div>
      </div>

      <div className="parent">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {KitchenImageUrl.map((imageUrl, index) => {
            return (
              <div className="slidering" key={index}>
                <img src={imageUrl.url} alt="movie" />
              </div>
            )
          })}
        </Carousel>
        <div className="flex justify-center items-center ">
          <button className=" bg-green-400 hover:bg-green-600 text-lg py-3 px-6 mb-12 rounded-full hover:text-white  font-bold ">
            Check Out Our Collections
          </button>
        </div>
      </div>

      <div className="mt-24">
        {/* <h1>Best Trending Wardrobes</h1> */}
        <hr className="border-t-[1px] border-red-500 w-full mb-20 my-24" />
        <div className="flex justify-center items-center my-8">
          <div style={containerStyle}>
            <div style={textContainerStyle} className="flex justify-center ">
              <h1 className="sm:text-4xl text-xl font-bold text-center">
                Best Trending Wardrobes
              </h1>
            </div>
            <img
              src="https://www.onlygfx.com/wp-content/uploads/2022/03/simple-gold-brush-stroke-banner-5.png"
              alt="Paint Brush"
              style={backgroundImageStyle}
            />
          </div>
        </div>
      </div>

      <div className="parent">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {WardrobeImageUrl.map((imageUrl, index) => {
            return (
              <div className="slidering" key={index}>
                <img src={imageUrl.url} alt="kitchen" />
              </div>
            )
          })}
        </Carousel>
        <div className="flex justify-center items-center ">
          <button className=" bg-green-400 hover:bg-green-600 text-lg py-3 px-6 mb-12 rounded-full hover:text-white  font-bold ">
            Check Out Our Collections
          </button>
        </div>
      </div>

      <div className=" mt-24">
        {/* <h1>Best Trending Interiors</h1> */}
        <hr className="border-t-[1px] border-red-500 w-full mb-20 my-24" />
        <div className="flex justify-center items-center my-8">
          <div style={containerStyle}>
            <div style={textContainerStyle} className="flex justify-center ">
              <h1 className="sm:text-4xl text-xl font-bold text-center">
                Best Trending Interiors
              </h1>
            </div>
            <img
              src="https://www.onlygfx.com/wp-content/uploads/2022/03/simple-gold-brush-stroke-banner-5.png"
              alt="Paint Brush"
              style={backgroundImageStyle}
            />
          </div>
        </div>
      </div>

      <div className="parent">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {InteriorImageUrl.map((imageUrl, index) => {
            return (
              <div className="slidering" key={index}>
                <img src={imageUrl.url} alt="kitchen" />
              </div>
            )
          })}
        </Carousel>

        <div className="flex justify-center items-center ">
          <button className=" bg-green-400 hover:bg-green-600 text-lg py-3 px-6 mb-12 rounded-full hover:text-white  font-bold ">
            Check Out Our Collections
          </button>
        </div>
      </div>

      <div className=" mt-24">
        {/* <h1>Best Trending Structures</h1> */}
        <hr className="border-t-[1px] border-red-500 w-full mb-20 my-24" />

        <div className="flex justify-center items-center my-8">
          <div style={containerStyle}>
            <div style={textContainerStyle} className="flex justify-center ">
              <h1 className="sm:text-4xl text-xl font-bold text-center">
                Best Trending Structures
              </h1>
            </div>
            <img
              src="https://www.onlygfx.com/wp-content/uploads/2022/03/simple-gold-brush-stroke-banner-5.png"
              alt="Paint Brush"
              style={backgroundImageStyle}
            />
          </div>
        </div>
      </div>

      <div className="parent">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {StructureImageUrl.map((imageUrl, index) => {
            return (
              <div className="slidering" key={index}>
                <img src={imageUrl.url} alt="kitchen" />
              </div>
            )
          })}
        </Carousel>
        <div className="flex justify-center items-center ">
          <button className=" bg-green-400 hover:bg-green-600 text-lg py-3 px-6 mb-12 rounded-full hover:text-white  font-bold ">
            Check Out Our Collections
          </button>
        </div>
      </div>

      <div
        className="flex flex-col items-center md:flex-row justify-center p-10 gap-6 mt-10"
        id="bg"
      >
        <h1 className="font-bold text-2xl">Stay safe. Design virtually.</h1>
        <br />
        <div className="text-center">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '40%', height: 'auto' }}
            src="/images/icon/working.png"
            alt=""
            className="w-60 h-70 mx-auto"
          />
          <h1 className="font-bold text-center">Contactless Experience</h1>
          <p className="text-sm">
            No stepping out. Design your home interiors from the safety and
            comfort of your home.
          </p>
        </div>

        <div className="text-center mt-4 md:mt-0">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '50%', height: 'auto' }}
            src="/images/icon/interior-design.png"
            alt=""
            className="w-60 h-70 mx-auto"
          />
          <h1 className="font-bold text-center">Live 3D Design</h1>
          <p className="text-sm">
            Explore life-like 3D designs online that are made for your floor
            plan.
          </p>
        </div>
        <div className="text-center mt-4 md:mt-0">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '50%', height: 'auto' }}
            src="/images/icon/badge.png"
            alt=""
            className="w-60 h-70 mx-auto"
          />
          <h1 className="font-bold text-center">Online Expertise</h1>
          <p className="text-sm">
            Connect with our 600+ designers virtually and explore designs
            online.
          </p>
        </div>
        <div className="text-center mt-4 md:mt-0">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '65%', height: 'auto' }}
            src="/images/icon/payment.png"
            alt=""
            className="w-60 h-70 mx-auto"
          />
          <h1 className="font-bold text-center">Instant Pricing</h1>
          <p className="text-sm">
            Enjoy complete price transparency and stay within budget.
          </p>
        </div>
      </div>

      <section class="bordered bordersec"></section>
      {/* <div className="main-hero">
        <div className="cover">
          <div className="box ai"></div>
          <div className="box bi"></div>
        </div>
      </div> */}

      <div className="">
        {/* <h1>Brands you will find in our products</h1> */}
        <div className="flex justify-center items-center sm:my-8 sm:mb-24 mb-20">
          <div style={containerStyle} className="mt-16">
            <div style={textContainerStyle} className="flex justify-center ">
              <h1 className="sm:text-4xl text-xl font-bold text-center">
                Brands you will find in our products
              </h1>
            </div>
            <img
              src="https://www.onlygfx.com/wp-content/uploads/2022/03/simple-gold-brush-stroke-banner-5.png"
              alt="Paint Brush"
              style={backgroundImageStyle}
            />
          </div>
        </div>
      </div>
      {/* <div className="slider">
      
        <div className="slide-track mb-16">
          {brand.map((item, index) => (
            <div key={index} className="slide">
              <Image
                src={item.img}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '120%', height: '75px' }}
              />
            </div>
          ))}
        </div>
      </div> */}
      <div className="brands">
        <BrandImageSlider brandImages={brand} />
      </div>

      <div className="flex items-center justify-c">
      <div className="w-1/6 main2">
  <svg id="rotatingText" viewBox="0 0 200 200" width={200} height={200}>
    <defs>
      <path
        id="circle"
        d="M 100, 100
           m -75, 0
           a 75, 75 0 1, 0 150, 0
           a 75, 75 0 1, 0 -150, 0"
      ></path>
    </defs>
    {/* Group for the image (static) */}
    <g>
      <image href="/images/left.gif" width={50} height={50} x="75" y="75" />
    </g>
    {/* Group for the text (rotating along the circle) */}
    <g transform="rotate(-90, 100, 100)">
      <text width={400}>
        <textPath
          alignmentBaseline="top"
          xlinkHref="#circle"
          className="text"
        >
          No.1 Architectural Brand in India
        </textPath>
      </text>
    </g>
  </svg>
</div>

        <div className="w-full">
          {/* <h1 className=" mr-[15%] text-center mx-auto">
            Our Corporate Presence
          </h1> */}
          <div className="flex justify-center items-center sm:my-8">
            <div style={containerStyle} className="mr-[15%]">
              <div style={textContainerStyle} className="flex justify-center ">
                <h1 className="sm:text-4xl text-xl font-bold text-center   mx-auto">
                  Our Corporate Presence
                </h1>
              </div>
              <img
                src="https://www.onlygfx.com/wp-content/uploads/2022/03/simple-gold-brush-stroke-banner-5.png"
                alt="Paint Brush"
                style={backgroundImageStyle}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="slider">
        <div className="slide-track">
          {data.map((item, index) => (
            <div key={index} className="slide">
              <Image
                src={item.img}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '120%', height: '75px' }}
              />
            </div>
          ))}
        </div>
      </div> */}
      <div className="brands">
        <BrandImageSlider brandImages={data} />
      </div>
    </>
  )
}

export default Collection