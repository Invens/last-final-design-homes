'use client'
import React, { useState, useRef, useEffect } from 'react'
import Header from '../../../components/Navbar/Header'
import Footer from '../../../components/Footer/Footer'
import Head from 'next/head'
import Link from 'next/link'
import ProgressBar from '../../../components/Progressbar'
import Tabs from '../Tabs'
import Nav from 'react-bootstrap/Nav'
import Omsairam from '../../../components/Navbar/Omsairam'
import Modal from 'react-modal'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import './HomesSlider.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

const Card = ({ project, handleImageClick }) => {
  if (!project.images || project.images.length === 0) {
    // Render a placeholder or loading state if images are not available
    return <div className="max-w-sm rounded overflow-hidden shadow-lg"></div>
  }

  return (
    <div
      onClick={() => handleImageClick(project.id)}
      className="max-w-sm rounded overflow-hidden shadow-lg relative cursor-pointer"
    >
      <div className="relative h-56 rounded-lg">
        {' '}
        <Image
          width={1000}
          height={1000}
          className="absolute h-full w-full object-cover"
          src={`https://api.designindianwardrobe.com/uploads/project-upload/${project.images[0].filename}`}
          alt={project.heading}
        />
        <div className="absolute flex gap-2 top-0 left-0 bg-gray-700 px-2 py-1 text-white text-sm font-semibold rounded-tr rounded-bl">
          <Image
            src={'https://cdn-icons-png.flaticon.com/512/11159/11159801.png'}
            height={30}
            width={30}
            alt="project-image"
            className="h-[20] w-[20]"
          />{' '}
          {project.images.length}
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-sm mb-2">{project.name}</div>
        {/* <p className="text-gray-700 text-base">{project.description}</p> */}
      </div>
    </div>
  )
}

const Page = ({}) => {
  const [projects, setProjects] = useState([])
  const [projectIndex, setProjectIndex] = useState(0)
  const [projectName, setProjectName] = useState('')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [prevImage, setPrevImage] = useState('')
  const [nextImage, setNextImage] = useState('')
  const [prevProjectName, setPrevProjectName] = useState('')
  const [nextProjectName, setNextProjectName] = useState('')
  const [showSlider, setShowSlider] = useState(false)

  console.log('projects: ', projects)
  console.log('projectIndex : ', projectIndex)

  const sliderRef = useRef(null)

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

  const handleImageClick = (index) => {
    setProjectIndex(index)
    setShowSlider(true)
  }

  const handleCloseSlider = () => {
    setShowSlider(false)
  }

  const handleNext = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % projects[projectIndex]?.images?.length
    )
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + projects[projectIndex]?.images?.length) %
        projects[projectIndex]?.images?.length
    )
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }

  const nextProject = () => {
    setProjectIndex((prevIndex) => (prevIndex + 1) % projects.length)
    setCurrentImageIndex(0)
  }

  const prevProject = () => {
    setProjectIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    )
    setCurrentImageIndex(0)
  }

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsResponse = await fetch(
          'https://api.designindianwardrobe.com/api/projects'
        )
        if (projectsResponse.ok) {
          const projectsData = await projectsResponse.json()

          // Fetch images for each project
          const projectsWithImages = await Promise.all(
            projectsData.map(async (project) => {
              const imagesResponse = await fetch(
                `https://api.designindianwardrobe.com/api/projects/images/${project.id}`
              )
              if (imagesResponse.ok) {
                const imagesData = await imagesResponse.json()
                return { ...project, images: imagesData }
              } else {
                console.error(
                  `Error fetching images for project ${project.id}:`,
                  imagesResponse.statusText
                )
                return project
              }
            })
          )

          setProjects(projectsWithImages)
        } else {
          console.error('Error fetching projects:', projectsResponse.statusText)
        }
      } catch (error) {
        console.error('Error during fetch:', error)
      }
    }

    fetchProjects()
  }, [])

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

  useEffect(() => {
    const prevIndex = (projectIndex - 1 + projects.length) % projects.length
    const prevProjectImages = projects[prevIndex]?.images || []
    const prevProjectFirstImage = prevProjectImages[0]?.filename || ''
    setPrevImage(prevProjectFirstImage)
    setPrevProjectName(projects[prevIndex]?.name || '')

    const nextIndex = (projectIndex + 1) % projects.length
    const nextProjectImages = projects[nextIndex]?.images || []
    const nextProjectFirstImage = nextProjectImages[0]?.filename || ''
    setNextImage(nextProjectFirstImage)
    setNextProjectName(projects[nextIndex]?.name || '')
    setProjectName(projects[projectIndex - 1]?.name || '')
  }, [projectIndex, projects])

  console.log('prevImage', prevImage)
  console.log('nextImage', nextImage)

  return (
    <>
      <ProgressBar />
      <Omsairam />
      <Header />

      <div className="mt-24 lg:mt-36 mb-16 mx-auto sm:mx-16">
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

        <Tabs id={7} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 mt-16">
          {projects.map((project) => (
            <Card
              key={project.id}
              project={project}
              handleImageClick={handleImageClick}
            />
          ))}
        </div>
      </div>

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
          <div className="h-[85%] w-full flex flex-col md:flex-row items-center justify-center rounded-t-lg ">
            {/* Image slider content */}
            <div className="relative md:w-3/5 w-full h-full overflow-hidden">
              {/* Replace the following div with your image slider component */}
              <div className=" ">
                <Slider {...sliderSettings} ref={sliderRef}>
                  {projects[projectIndex]?.images.map((image, index) => (
                    <div key={index} className="overflow-hidden">
                      <Image
                        src={`https://api.designindianwardrobe.com/uploads/project-upload/${image.filename}`}
                        alt={projects[projectIndex]?.name}
                        width={1000}
                        height={1000}
                        objectFit="contain"
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
              <div className="h-auto  md:mx-4">
                {/* This div will enable scrolling if the content exceeds the modal height */}
                <div className="h-auto overflow-y-auto">
                  <form
                    className="w-full max-w-md p-2 rounded-lg shadow-md overflow-y-auto"
                    method="post"
                    onSubmit={handleSubmit}
                  >
                    <h2 className="sm:text-lg text-md font-bold p-0 text-gray-900">
                      {projectName}
                    </h2>
                    {/* <h2 className="sm:text-lg text-md pt-2 text-gray-600">
                      Our Designer will call you to help with your Interior
                      Requirements .
                    </h2> */}
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
                          <Image
                            width={1000}
                            height={1000}
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
                          <Image
                            width={1000}
                            height={1000}
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
                          <Image
                            width={1000}
                            height={1000}
                            src="/images/gallery/facebook.png"
                            alt="Button 3"
                            className="w-full h-full object-cover"
                          />
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-evenly my-4 mt-6">
                      <div className="flex flex-col w-20 rounded-3xl border-[1px] p-2 border-gray-600">
                        <Image
                          width={1000}
                          height={1000}
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
                        <Image
                          width={1000}
                          height={1000}
                          src="/images/gallery/guarantee.png"
                          alt=""
                          className="w-12 self-center"
                        />
                        <p className="text-[8px] text-center text-gray-700">
                          7 year <br /> warranty
                        </p>
                      </div>
                      <div className="flex flex-col w-20 rounded-3xl border-[1px] p-2 border-gray-600">
                        <Image
                          width={1000}
                          height={1000}
                          src="/images/gallery/save.png"
                          alt=""
                          className="w-12 self-center"
                        />
                        <p className="text-[8px] text-center text-gray-700">
                          Affordable Prices
                        </p>
                      </div>
                      <div className="flex flex-col w-20 rounded-3xl border-[1px] p-2 border-gray-600">
                        <Image
                          width={1000}
                          height={1000}
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
                        <option value="Luxury Interiors">
                          Luxury Interiors
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
                        <Image
                          width={1000}
                          height={1000}
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
          <div className="h-[15%] w-full flex flex-row justify-between rounded-b-lg my-2 mb-4">
            <div className="flex  mr-4 pl-0">
              <button
                onClick={prevProject}
                className="sm:px-4 py-2 flex items-center text-xs sm:text-sm "
              >
                <ChevronLeft className="w-6 h-6 sm:mr-2" />

                <Image
                  width={1000}
                  height={1000}
                  src={`https://api.designindianwardrobe.com/uploads/project-upload/${prevImage}`}
                  alt="Description of the image"
                  className="sm:mr-2 w-8 sm:w-10 h-8 sm:h-10"
                />
                <span className="ml-2 truncate  w-24 md:w-60 overflow-hidden ">
                  {prevProjectName}
                </span>
              </button>
            </div>
            <div className="flex ml-4 pr-0">
              <button
                onClick={nextProject}
                className="sm:px-4 py-2 flex items-center text-xs sm:text-sm "
              >
                <span className="mr-2 truncate w-24 md:w-60 overflow-hidden">
                  {nextProjectName}
                </span>
                <Image
                  width={1000}
                  height={1000}
                  src={`https://api.designindianwardrobe.com/uploads/project-upload/${nextImage}`}
                  alt="Description of the image"
                  className="sm:mr-2 w-8 sm:w-10 h-8 sm:h-10"
                />

                <ChevronRight className="w-6 h-6 sm:ml-2" />
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <Footer />
    </>
  )
}

export default Page
