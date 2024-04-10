"use client"
import React, { useState } from 'react'
import Header from '../../components/Navbar/Header'
import Omsairam from '../../components/Navbar/Omsairam'
import ContactForm from '../../components/ContactForm/page'
import Footer from '../../components/Footer/Footer'
import Customer from './Customer'
import CustomerVideos from './CustomerVideos'
import ArchitectSpeak from './ArchitechSpeak'
import Link from 'next/link'
import Image from 'next/image';
import ScheduleChatSection from '../../components/schedule-chat/page'





const SectionWithImage = () => {
  const  [showPopup, setShowPopup] = useState(false);
  const togglePopup = () =>{
    setShowPopup(!showPopup);
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    pincode: '',
    agree: '',
  })
  const [btnText, setBtnText] = useState('Submit')
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('Submitting form...')
    setFormSubmitted(true)

    const formDataToSend = new FormData()
    for (const key in formData) {
      formDataToSend.append(key, formData[key])
    }

    try {
      console.log(
        'Form Data to Send:',
        Object.fromEntries(formDataToSend.entries())
      )
      console.log('Uploading data...')
      const response = await fetch(
        'https://m.designindianhomes.com/submitForm',
        {
          method: 'POST',
          body: formDataToSend,
        }
      )

    

      if (response.ok) {
        console.log('Form data submitted successfully!')
        console.log(
          'Form Data to Send:',
          Object.fromEntries(formDataToSend.entries())
        )
        setBtnText('Done')
      } else {
        console.error('Form data submission failed. Response:', response)
        setBtnText('Something Went Wrong')
      }
    } catch (error) {
      console.error('Error during form data submission:', error)
      setBtnText('Something Went Wrong')
    }

    setFormSubmitted(true)
  }

  const handleClose = () => {
    setFormSubmitted(false)
  }

  return (
    <div className="p-4 sm:p-16 bg-gray-300">
      <section className="flex flex-col md:flex-row items-center">
        <div className="lg:w-1/2 pr-8">
          <h2 className="text-3xl font-bold mb-4 text-center sm:text-left mx-auto">
            JOIN US - FREELANCE WITH US- REFER & EARNS WITH US- BE AN ASSOCIATE
            PARTNER WITH US
          </h2>
          <p className="text-gray-700 mb-4 text-center sm:text-left mx-auto">
            We&apos;re thrilled to know our customers loved the Design indian Homes
            experience. This truly keeps us going!
          </p>
          <div className='mb-12 flex justify-center'>
          
            <button className="bg-green-500 hover:bg-green-600 hover:text-white px-4 py-2 rounded-full shadow-lg" onClick={togglePopup}>
              CONNECT TODAY
            </button>
            {showPopup && (
            <div className=' bg-gray-800 bg-opacity-75'>
              <div className="fixed top-[80px] left-0  flex justify-center z-10 ">
                <div className="rounded">
                  <button onClick={togglePopup} className='absolute right-6 mt-8 rounded-full bg-red-700 text-white p-2 align-right' >Close</button>
                  <div className=' rounded-lg'>
                    {formSubmitted ? (
                      <div className="grid grid-cols-1 justify-items-center">
                        <p className="text-center text-lg">
                          Thank you for your submission!
                        </p>
                        <Image
                          alt='thank you'
                          src={
                            'https://img.freepik.com/free-vector/thank-you-placard-concept-illustration_114360-13436.jpg'
                          }
                          width={400}
                          height={300}
                        />
                        <h1 className="text-center font-bold">
                          {' '}
                          FOR ANY PRIORITY BOOKING OF DESIGN/PLANNING MEETING, DO CALL US OR
                          WHATSAPP US ON 9899264978, 9582827928
                        </h1>

                        <button
                          onClick={handleClose}
                          className="bg-gray-900 text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-700 hover:shadow"
                        >
                          Close
                        </button>
                      </div>
                    ) : (
                  
                    <form onSubmit={handleSubmit} className=" h-[55vh] bg-green-700  rounded-lg mt-[50px] m-[50px] p-4">
                      <h1 className=' text-left text-xl font-bold text-white'>Book with Us</h1>
                      <div >
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-medium text-white"
                        >
                          Full Name*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          onChange={handleChange}
                          className="mt-1 p-2 w-[50vw] h-7 bg-amber-50 border-b border-gray-500 focus:outline-none focus:border-blue-500 rounded-full"
                          required
                        />
                      </div>

                      <div className="mt-2">
                        <label
                          htmlFor="email"
                          className="block text-xs font-medium text-white"
                        >
                          Email ID*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          onChange={handleChange}
                          className="mt-1 p-2 w-[50vw] h-7 bg-amber-50 border-b border-gray-500 focus:outline-none focus:border-blue-500 rounded-full"
                          required
                        />
                      </div>

                      <div className="mt-2">
                        <label
                          htmlFor="number"
                          className="block text-xs font-medium text-white"
                        >
                          Mobile Number*
                        </label>
                        <input
                          type="tel"
                          id="number"
                          name="number"
                          onChange={handleChange}
                          className="mt-1 p-2 w-[50vw] h-7 bg-amber-50 border-b border-gray-500 focus:outline-none focus:border-blue-500 rounded-full"
                          required
                        />
                      </div>

                      <div className="mt-2">
                        <label
                          htmlFor="pincode"
                          className="block text-xs font-medium text-white"
                        >
                          Pincode*
                        </label>
                        <input
                          type="text"
                          id="pincode"
                          onChange={handleChange}
                          name="pincode"
                          className="mt-1 p-2 w-[50vw] h-7 bg-amber-50 border-b border-gray-500 focus:outline-none focus:border-blue-500 rounded-full"
                          required
                        />
                      </div>

                      <div className="mt-2">
                        <label htmlFor="agree" className="flex items-center">
                          <input
                            type="checkbox"
                            id="agree"
                            onChange={handleChange}
                            name="agree"
                            className="mr-2"
                          />
                          <span className="text-xs text-white w-[200px]">
                            Yes, I would like to receive important updates and
                            notifications on WhatsApp
                          </span>
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-3xl flex items-center justify-center hover:bg-blue-600 mt-4 sm:mt-0"
                      >
                        Book Free Site Visit
                      </button>
                    </form>
                   
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
        <div className="lg:w-1/2">
        <Image
              width={1000}
              height={1000}
            src="/images/reviews-mouthshut.jpg"
            alt="Description of your image"
            className="w-full rounded"
          />
        </div>
      </section>
    </div>
  )
}

const SocialReviews = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center mb-8">
        <h2 className="text-3xl font-bold">SOCIAL REVIEWS</h2>
      </section>

      <div className="flex flex-wrap justify-evenly">
        {/* Column 1 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex items-center">
        <Image
              width={1000}
              height={1000}
            src="/images/justDail.jpg"
            alt="Description for Image 1"
            className="w-2/3 h-auto rounded mr-4"
          />
          <Link
            target="_blank"
            href="https://www.justdial.com/Delhi/Design-Indian-Kitchen-Near-Dwarka-Sector-10-Metro-Station-Palam/011PXX11-XX11-141108151600-E1L5_BZDET/reviews"
          >
            <button className="bg-green-500 hover:bg-green-600 text-gray-600 hover:text-white px-4 py-2 rounded-full">
              View
            </button>
          </Link>
        </div>

        {/* Column 2 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex items-center">
        <Image
              width={1000}
              height={1000}
            src="/images/Sulekha.jpg"
            alt="Description for Image 2"
            className="w-2/3 h-auto rounded mr-4"
          />
          <Link
            target="_blank"
            href="https://www.sulekha.com/design-indian-kitchen-connaught-place-delhi-contact-address"
          >
            <button className="bg-green-500 hover:bg-green-600 text-gray-600 hover:text-white px-4 py-2 rounded-full">
              View
            </button>
          </Link>
        </div>

        {/* Column 3 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex items-center">
        <Image
              width={1000}
              height={1000}
            src="/images/facebookReview.jpg"
            alt="Description for Image 3"
            className="w-2/3 h-auto rounded mr-4"
          />
          <Link
            target="_blank"
            href="https://www.facebook.com/designindiankitchen"
          >
            <button className="bg-green-500 hover:bg-green-600 text-gray-600 hover:text-white px-4 py-2 rounded-full">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}


const page = () => {
  return (
    <>
      <Omsairam />
      <Header />
      <div className=" mt-[130px] lg:mt-36 mb-16 sm:mx-8">
        <h1 className="text-5xl font-extrabold text-center mb-8 mx-auto uppercase">
          Design Indian kitchen reviews
        </h1>
        <p className=" text-md font-bold text-center mb-16">
        Welcome to Our Review Page, Our Brand is the Most Loved Brand Across New Delhi - NCR, we are the most referred brand across the Town, check out reviews of our Parent Brand Design Indian Kitchen and check the Love Our Clients Shower on Us. We are trying harder each day to become more better than we were Today, and thus serve you in the most professional manner. Keep the Trust and BIG LOVE ❤️
        </p>
      </div>
      <CustomerVideos />
      <SectionWithImage />
      <SocialReviews />
      <ArchitectSpeak />
      <Customer />
      <ScheduleChatSection />
      {/* <ContactForm /> */}
      <Footer />
    </>
  )
}

export default page
