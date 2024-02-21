'use client'
import React, { useState, useRef } from 'react'
import Header from '../../../components/Navbar/Header'
import Footer from '../../../components/Footer/Footer'
import Head from 'next/head'
import Link from 'next/link'
import ProgressBar from '../../../components/Progressbar'
import Tabs from '../Tabs'
import Nav from 'react-bootstrap/Nav'
import Omsairam from '../../../components/Navbar/Omsairam'
import HomesSlider from './HomesSlider'
<<<<<<< HEAD
import Modal from 'react-modal' // Import react-modal
import { ChevronRight, ChevronLeft } from 'lucide-react'
import './HomesSlider.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
=======
import Image from 'next/image'
>>>>>>> ee716a2168edaa1250728d17b60bf72e9427ea40

const Card = ({ project, handleImageClick }) => {
  return (
    <div
      onClick={() => handleImageClick(project.id)}
      className="max-w-sm rounded overflow-hidden shadow-lg relative cursor-pointer"
    >
      <div className="relative h-56">
        {' '}
        <Image
        width={1000}
        height={1000}
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const [showSlider, setShowSlider] = useState(false)
  const [images, setImages] = useState<Array<{ id: number; filename: string }>>(
    []
  )

  const sliderRef = useRef(null)
  //   console.log('images: ', projects[initialProject].images)
  //   console.log(currentProjectIndex)
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    initialSlide: currentImageIndex,
  }

  const handleImageClick = (index: number) => {
    setProjectIndex(index)
    setShowSlider(true)
  }

  const handleCloseSlider = () => {
    setShowSlider(false)
  }

  const handleNext = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % tempData[projectIndex].images.length
    )
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
    // onNextSlide() // Call the onNextSlide callback
  }

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + tempData[projectIndex].images.length) %
        tempData[projectIndex].images.length
    )
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
    // onPrevSlide() // Call the onPrevSlide callback
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted!')
  }
  const handleWhatsapp = (e) => {
    e.preventDefault()
    console.log('whatsapp')
  }
  const handleInstagram = (e) => {
    e.preventDefault()
    console.log('instagram')
  }

  const handleFacebook = (e) => {
    e.preventDefault()
    console.log('facebook')
  }

    const nextProject = () => {
      setProjectIndex((prevIndex) => (prevIndex + 1) % tempData.length)
      // setImagesArray(projects[currentProjectIndex].images)
      setCurrentImageIndex(0)
      console.log('currentProjectIndex', projectIndex)
      console.log('imagesArray', tempData[projectIndex].images)
    }
    const prevProject = () => {
      setProjectIndex(
        (prevIndex) => (prevIndex - 1 + tempData.length) % tempData.length
      )
      // setImagesArray(projects[currentProjectIndex].images)
      setCurrentImageIndex(0)
      console.log('currentProjectIndex', projectIndex)
      console.log('imagesArray', tempData[projectIndex].images)
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

      {/* Modal for slider */}
      <Modal
        isOpen={showSlider}
        onRequestClose={handleCloseSlider}
        contentLabel="Image Slider Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="relative z-10">
          <button
            onClick={handleCloseSlider}
            className="absolute top-0 right-0 text-gray-600 hover:text-red-600 focus:outline-none bg-red-200 sm:bg-transparent hover:bg-red-200 rounded-full p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Your card component or other content */}
        <div className="h-full flex flex-col justify-between rounded-lg">
          {/* top section with slider and image */}
          <div className="h-[90%] w-full flex flex-col md:flex-row items-center justify-center rounded-t-lg ">
            {/* Image slider content */}
            <div className="relative md:w-3/5 w-full h-full overflow-hidden">
              {/* Replace the following div with your image slider component */}
              <div className=" ">
                <Slider {...sliderSettings} ref={sliderRef}>
                  {tempData[projectIndex].images.map((image, index) => (
                    <div key={index} className="overflow-hidden">
                      <img
                        src={image}
                        alt={index}
                        className="w-full object-cover rounded-sm"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black font-black text-2xl px-4 text-white p-2 rounded-full hover:bg-transparent hover:text-black hover:border-solid hover:border-2 hover:border-black"
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black font-black text-2xl px-4 text-white p-2 rounded-full hover:bg-transparent hover:text-black hover:border-solid hover:border-2 hover:border-black"
              >
                &gt;
              </button>
            </div>

            {/* Form content */}
            <div className="md:w-2/5 w-full h-full overflow-auto flex justify-center">
              <div className="h-auto md:p-4 md:mx-4">
                {/* This div will enable scrolling if the content exceeds the modal height */}
                <div className="h-auto overflow-y-auto">
                  <form
                    className="w-full max-w-md p-2 rounded-lg shadow-md overflow-y-auto"
                    method="post"
                    onSubmit={handleSubmit}
                  >
                    <h2 className="sm:text-xl text-lg font-bold py-4 text-gray-900">
                      {tempData[projectIndex].heading}
                    </h2>
                    <h2 className="sm:text-lg text-md pt-2 text-gray-600">
                      Our Designer will call you to help with your Interior
                      Requirements .
                    </h2>
                    <div className="flex items-center my-2">
                      <h2 className="flex-1 text-md py-2 text-center text-black uppercase">
                        Book a Visit Today
                      </h2>
                    </div>
                    {/* social share  */}
                    <div className="border-t border-b rounded-lg -mx-2 my-4">
                      <p className="mt-2 ml-2">Share this Design</p>
                      <div className="social-share my-4 flex gap-4 items-center ">
                        <button
                          type="button"
                          onClick={handleWhatsapp}
                          className="w-8 h-8 rounded-full overflow-hidden focus:outline-none mx-2 transition duration-300 ease-in-out transform hover:scale-110 active:scale-95"
                        >
                          <img
                            src="/images/gallery/whatsapp.png"
                            alt="Button 1"
                            className="w-full h-full object-cover"
                          />
                        </button>
                        <button
                          type="button"
                          onClick={handleInstagram}
                          className="w-8 h-8 rounded-full overflow-hidden focus:outline-none mx-2 transition duration-300 ease-in-out transform hover:scale-110 active:scale-95"
                        >
                          <img
                            src="/images/gallery/instagram.png"
                            alt="Button 2"
                            className="w-full h-full object-cover"
                          />
                        </button>
                        <button
                          type="button"
                          onClick={handleFacebook}
                          className="w-8 h-8 rounded-full overflow-hidden focus:outline-none mx-2 transition duration-300 ease-in-out transform hover:scale-110 active:scale-95"
                        >
                          <img
                            src="/images/gallery/facebook.png"
                            alt="Button 3"
                            className="w-full h-full object-cover"
                          />
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-evenly my-4 mt-6">
                      <div className="flex flex-col w-20 rounded-3xl border-[1px] p-2 border-gray-600">
                        <img
                          src="/images/gallery/top.png"
                          alt=""
                          className="w-12 self-center"
                        />
                        <p className="text-[8px] text-center text-gray-700">
                          Top
                          <br /> Quality
                        </p>
                      </div>

                      <div className="flex justify-content-center flex-col w-20 rounded-3xl border-[1px] p-2 border-gray-600">
                        <img
                          src="/images/gallery/guarantee.png"
                          alt=""
                          className="w-12 self-center"
                        />
                        <p className="text-[8px] text-center text-gray-700">
                          7 year <br /> warranty
                        </p>
                      </div>
                      <div className="flex flex-col w-20 rounded-3xl border-[1px] p-2 border-gray-600">
                        <img
                          src="/images/gallery/save.png"
                          alt=""
                          className="w-12 self-center"
                        />
                        <p className="text-[8px] text-center text-gray-700">
                          Affordable Prices
                        </p>
                      </div>
                      <div className="flex flex-col w-20 rounded-3xl border-[1px] p-2 border-gray-600">
                        <img
                          src="/images/gallery/fast-delivery.png"
                          alt=""
                          className="w-12 self-center"
                        />
                        <p className="text-[8px] text-center text-gray-700">
                          25 Day
                          <br /> Delivery
                        </p>
                      </div>
                    </div>
                    <div className="my-8">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 p-2 w-full border-b border-gray-300 text-sm focus:outline-none rounded-md"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="my-8">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 p-2 w-full border-b border-gray-300 text-sm focus:outline-none rounded-md"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="my-8">
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        className="mt-1 p-2 w-full border-b border-gray-300 text-sm focus:outline-none rounded-md"
                        placeholder="Enter your mobile number"
                        required
                      />
                    </div>
                    <div className="my-8">
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="mt-1 p-2 w-full border-b border-gray-300 text-sm focus:outline-none rounded-md"
                        placeholder="Enter your address"
                        required
                      />
                    </div>
                    <div className="my-8">
                      <select
                        id="Interest"
                        name="Interest"
                        className="mt-1 p-2 w-full border-b border-gray-300 text-sm focus:outline-none rounded-md"
                        required
                      >
                        <option
                          className="text-gray-400"
                          value=""
                          disabled
                          selected
                        >
                          Interested in
                        </option>
                        <option value="Complete Modular Interiors">
                          Complete Modular Interiors
                        </option>
                        <option value="End to End Interiors">
                          End to End Interiors
                        </option>
                        <option value="Architectural Consultancy">
                          Architectural Consultancy
                        </option>
                        <option value="Modular Kitchens">
                          Modular Kitchens
                        </option>
                        <option value="Wardrobes">Wardrobes</option>
                        <option value="Living or Bedroom Renovation">
                          Living or Bedroom Renovation
                        </option>
                        <option value="Bathroom or Balcony Renovation">
                          Bathroom or Balcony Renovation
                        </option>
                        <option value="Commercial Interiors">
                          Commercial Interiors
                        </option>
                        <option value="Luxury Interiors">
                          Luxury Interiors
                        </option>

                        {/* Add more options as needed */}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="mb-8 bg-green-500 hover:bg-green-600 hover:shadow-lg text-white py-3 px-6 rounded-md  w-full"
                    >
                      Book Design Session
                    </button>
                    <hr />
                    <div>
                      <button
                        type="button"
                        className="border-[1px] border-black bg-white hover:bg-gray-200 hover:shadow-lg py-6  px-2 rounded-md  w-full text-gray-700 my-8 flex justify-between items-center"
                      >
                        <img
                          src="/images/gallery/calculator.png"
                          alt="Calc"
                          className="w-8 h-8 mr-2"
                        />
                        <span className="mr-auto">
                          Calculate your renovation cost
                        </span>
                        <span>
                          <ChevronRight />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* section bottom with buttons */}
          <div className="h-[10%] w-full flex flex-row justify-between rounded-b-lg  mt-4">
            <button
              onClick={prevProject}
              className="px-4 py-2 flex items-center text-xs rounded-full border-2 border-blue-300 hover:bg-blue-500 hover:text-white"
            >
              <ChevronLeft className="w-6 h-6 mr-2" /> Previous project
            </button>
            <button
              onClick={nextProject}
              className="px-4 py-2 flex items-center text-xs rounded-full border-2 border-blue-300 hover:bg-blue-500 hover:text-white"
            >
              Next project <ChevronRight className="w-6 h-6 ml-2" />
            </button>
          </div>
        </div>
      </Modal>

      <Footer />
    </>
  )
}

export default Page
