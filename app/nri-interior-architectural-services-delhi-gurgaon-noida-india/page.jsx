import React from 'react'
import Header from '../../components/Navbar/Header'
import Omsairam from '../../components/Navbar/Omsairam'
import Footer from '../../components/Footer/Footer'
import Form from './form'
import ContactForm from '../../components/ContactForm/page'
import Image from 'next/image'
const ScheduleChatSection = () => {
  return (
    <section
      className="relative"
      style={{
        backgroundImage: 'url("images/footer_BG_01.jpg")',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        height: '400px',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.51)',
        backgroundBlendMode: 'darken',
      }}
    >
      <div className="text-center mx-auto text-white">
        <h1 className="text-4xl">
        “ Get Custom Interiors / Modular Interiors/ Architectural Services <br/> at Most Affordable Prices with Our Team. “
        </h1>
        <br />
        <a
          href="https://api.whatsapp.com/send?phone=9899264978&amp;text=MODULAR KITCHEN DELHI - INDIA | MODULAR KITCHEN MANUFACTURERS"
          className="schedule-btn font-bold bg-yellow-400 text-gray-900 py-2 px-4 rounded-full hover:bg-yellow-500"
        >
          SCHEDULE A CHAT
        </a>
      </div>
    </section>
  )
}

const page = () => {
  return (
    <>
      <Omsairam />
      <Header />
      <div className=" mt-[140px] lg:mt-36 mb-16">
        <div>
          <Image
          src=""
          />
        </div>
        <section className="relative h-[200px] sm:h-[400px] bg-cover bg-center flex items-center justify-center ">
      {/* Replace 'your-image.jpg' with the actual path to your background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute z-10 text-white text-center">
        <h1 className="sm:text-4xl text-2xl font-bold"> A Comfort Work Experience for NRI&apos;s & Sr Citizens </h1>
        {/* You can add more content or customize styling here */}
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          // Replace 'your-image.jpg' with the actual path to your background image
          backgroundImage: 'url("/images/getQuote.jpg")',
        }}
      ></div>
    </section>
        <p className="uppercase text-md font-bold text-center mb-16 mt-8">
        At The Design Indian Homes Brand, we make sure to provide a smooth, Hassle-free experience for our Clients residing abroad or those who are seniors. We make sure to give them daily based site reports, video calls and all approvals are taken beforehand for smooth transition of materials. All Our sites have dedicated supervisors, who are very proficient in their works and work with clients on a Hands-On Approach. 
        A Carefree and Reliable Work Experience .. ! Isn&apos;t.....
        </p>
      </div>
      <div className="bg-amber-50">
        <Form />
      </div>
      <ScheduleChatSection />
      <ContactForm />
      <Footer />
    </>
  )
}

export default page
