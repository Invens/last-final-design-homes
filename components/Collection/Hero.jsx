'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Marquee from 'react-fast-marquee'
import dynamic from 'next/dynamic'

const TruncatedText = dynamic(() => import('./TruncatedText'))

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

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

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true)
  }

  return (
    <div className="">
      <div id="fry">
        <div className="relative mt-4">
          <div className="relative z-10 text-center">
            <h3 className="sm:text-4xl text-lg font-bold">
              INDIA’S NO.1 INTERIOR & ARCHITECTURAL BRAND
            </h3>
          </div>
          <Image
            width={1000}
            height={1000}
            src="/images/simple-gold-brush-stroke-banner-5.png"
            alt="Paint Brush"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <TypeAnimation
          sequence={[
            'TOP KITCHEN & CLOSET BRAND ',
            1000,
            ' LARGEST KITCHEN DEALERS',
            1000,
            'MODULAR KITCHEN & CLOSET',
            1000,
            'LARGEST ARCHITECTURAL BRAND',
            1000,
            'TOP AWARDED INTERIORS',
            1000,
          ]}
          style={{ fontSize: '40px' }}
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
            </h1>
          </div>
        </div>
      </div>

      <section className="relative max-w-[95%] w-full mx-auto my-6">
        <div className="relative mt-3 rounded-xl overflow-hidden h-[550px] sm:w-[90%] mx-auto">
          {!isVideoLoaded && (
            <Image
              src="/images/thumbnail-hero.png"
              alt="Video Thumbnail"
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-md"
            />
          )}
          <video
            loop
            autoPlay
            muted
            playsInline
            width={1600}
            height={550}
            className={`rounded-xl shadow-md w-full h-full absolute top-0 left-0 object-cover ${
              isVideoLoaded ? 'block' : 'hidden'
            }`}
            variants={videoVariants}
            initial="initial"
            whileInView="animate"
            preload="metadata"
            onLoadedData={handleVideoLoaded}
          >
            <source
              src="/video/video-interior-designer-company-in-delhi-gurgaon-noida-india.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="callout text-center mt-6">
          <h3 className="bg-transparent text-sm md:text-4xl">
            Looking for Interiors or Modular Works
          </h3>
          <br />
          <a
            className="button hover:bg-white inline-block text-white py-2 px-4 rounded"
            href="/book-a-interior-design-visit"
          >
            Connect with us
          </a>
        </div>
      </section>

      <div className="my-12">
        <TruncatedText />
      </div>

      <Marquee style={{ backgroundColor: 'yellow' }} className="my-6">
        <div className="marquee">
          <h3>
            Top Interior, Architectural & Modular Kitchen - Wardrobe Brand in
            Delhi - NCR - India
          </h3>
        </div>
      </Marquee>
    </div>
  )
}

export default Hero
