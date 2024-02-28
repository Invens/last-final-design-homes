'use client';
import React, { useState, useRef, useEffect } from 'react';
import Header from '../../../components/Navbar/Header';
import Footer from '../../../components/Footer/Footer';
import Head from 'next/head';
import Link from 'next/link';
import ProgressBar from '../../../components/Progressbar';
import Tabs from '../Tabs';
import Nav from 'react-bootstrap/Nav';
import Omsairam from '../../../components/Navbar/Omsairam';
import Modal from 'react-modal';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import './HomesSlider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import axios from 'axios';
const Card = ({ project, handleImageClick }) => {
  if (!project.images || project.images.length === 0) {
    // Render a placeholder or loading state if images are not available
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
       
      </div>
    );
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
        <Image src={"https://cdn-icons-png.flaticon.com/512/11159/11159801.png"} height={30} width={30} alt='project-image' className='h-[20] w-[20]'/>   {project.images.length}
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-sm mb-2">{project.name}</div>
        {/* <p className="text-gray-700 text-base">{project.description}</p> */}
      </div>
    </div>
  );
};

const Page = ({}) => {
  const [projects, setProjects] = useState([]);
  const [projectIndex, setProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImage, setPrevImage] = useState('');
  const [nextImage, setNextImage] = useState('');
  const [prevProjectName, setPrevProjectName] = useState('');
  const [nextProjectName, setNextProjectName] = useState('');
  const [showSlider, setShowSlider] = useState(false);

  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    initialSlide: currentImageIndex,
  };

  const handleImageClick = (index) => {
    setProjectIndex(index);
    setShowSlider(true);
  };

  const handleCloseSlider = () => {
    setShowSlider(false);
  };

  const handleNext = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % projects[projectIndex]?.images?.length
    );
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + projects[projectIndex]?.images?.length) %
        projects[projectIndex]?.images?.length
    );
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const nextProject = () => {
    setProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setCurrentImageIndex(0);
  };

  const prevProject = () => {
    setProjectIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
    setCurrentImageIndex(0);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsResponse = await axios.get('https://api.designindianwardrobe.com/api/projects');
  
        if (projectsResponse.status === 200) {
          const projectsData = projectsResponse.data;
  
          // Fetch images for each project using Axios
          const projectsWithImages = await Promise.all(
            projectsData.map(async (project) => {
              try {
                const imagesResponse = await axios.get(`https://api.designindianwardrobe.com/api/projects/images/${project.id}`);
  
                if (imagesResponse.status === 200) {
                  const imagesData = imagesResponse.data;
                  return { ...project, images: imagesData };
                } else {
                  console.error(`Error fetching images for project ${project.id}:`, imagesResponse.statusText);
                  return project;
                }
              } catch (error) {
                console.error(`Error during image fetch for project ${project.id}:`, error.message);
                return project;
              }
            })
          );
  
          setProjects(projectsWithImages);
        } else {
          console.error('Error fetching projects:', projectsResponse.statusText);
        }
      } catch (error) {
        console.error('Error during fetch:', error.message);
      }
    };
  
    fetchProjects();
  }, []);
  useEffect(() => {
    const prevIndex = (projectIndex - 1 + projects.length) % projects.length;
    const prevProjectImages = projects[prevIndex]?.images || [];
    const prevProjectFirstImage = prevProjectImages[0]?.filename || '';
    setPrevImage(prevProjectFirstImage);
    setPrevProjectName(projects[prevIndex]?.name || '');

    const nextIndex = (projectIndex + 1) % projects.length;
    const nextProjectImages = projects[nextIndex]?.images || [];
    const nextProjectFirstImage = nextProjectImages[0]?.filename || '';
    setNextImage(nextProjectFirstImage);
    setNextProjectName(projects[nextIndex]?.name || '');
  }, [projectIndex, projects]);

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
            className="absolute top-0 right-0 text-gray-600 hover:text-red-600 focus:outline-none bg-red-200 sm:bg-transparent p-2"
          >
            Close
          </button>
        </div>

        <Slider ref={sliderRef} {...sliderSettings}>
  {projects[projectIndex]?.images.map((image, index) => (
    
    <div key={index} className="slider-image-container">
      <Image
  src={`https://api.designindianwardrobe.com/uploads/project-upload/${image.filename}`}
  alt={projects[projectIndex]?.name}
  width={400}
  height={400}
  objectFit="contain"
  className='h-[400px] w-[800px] rounded-lg'
/>

    </div>
  ))}
</Slider>


        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
          <div
            onClick={handlePrev}
            className="cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center"
          >
            <ChevronLeft size={40} />
            <span className="text-black text-lg font-bold ml-2">Previous</span>
          </div>
          <div
            onClick={handleNext}
            className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center"
          >
            <span className="text-black text-lg font-bold mr-2">Next</span>
            <ChevronRight size={40} />
          </div>
        </div>

        <div className="absolute top-1/2 left-0 right-0 flex items-center justify-between px-4">
          <div
            onClick={prevProject}
            className="cursor-pointer flex items-center mt-[200px]"
          >
            <ChevronLeft size={30} />
            <span className="text-black text-sm font-bold ml-2 ">
              {prevProjectName}
            </span>
          </div>
          <div
            onClick={nextProject}
            className="cursor-pointer flex items-center mt-[200px]"
          >
            <span className="text-black text-sm font-bold ml-2 ">
              {nextProjectName}
            </span>
            <ChevronRight size={30} />
          </div>
        </div>
      </Modal>

      <Footer />
    </>
  );
};

export default Page;
