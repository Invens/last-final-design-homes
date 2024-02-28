'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Marquee from 'react-fast-marquee'
import { motion} from 'framer-motion'

import dynamic from 'next/dynamic'
const TruncatedText = dynamic(() => import('./TruncatedText'))
const Hero = () => {
   

 

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

  return (
    <div>
      <div id="fry">
        <div style={containerStyle} className="mt-8">
          <div style={textContainerStyle}>
            <h3 className="sm:text-4xl text-xl font-bold">
              INDIA’S NO.1 INTERIOR & ARCHITECTURAL BRAND
            </h3>
          </div>
          <Image
            width={0}
            height={0}
            src="/images/simple-gold-brush-stroke-banner-5.png"
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
            preload="metadata" 
          >
            <source
              src="https://ik.imagekit.io/hlsvvxksxg/video-interior-designer-company-in-delhi-gurgaon-noida-india%20(1).mp4?updatedAt=1708375803011"
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
    </div>
  )
}
// Hero.ssr = false
export default Hero