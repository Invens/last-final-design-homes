import React from 'react'
import Header from '../../components/Navbar/Header'
import Omsairam from '../../components/Navbar/Omsairam'
import ContactForm from '../../components/ContactForm/page'
import Footer from '../../components/Footer/Footer'
import Form from './form'
import ScheduleChatSection from '../../components/schedule-chat/page'

const FullWidthSection = () => {
  return (
    <section className="relative h-[200px] sm:h-[400px] bg-cover bg-center flex items-center justify-center mt-16 lg:mt-36 xl:mt-24">
      {/* Replace 'your-image.jpg' with the actual path to your background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute z-10 text-white text-center">
        <h1 className="sm:text-4xl text-2xl font-bold">SCHEDULE A VISIT TODAY</h1>
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
  )
}



const page = () => {
  return (
    <>
      <Omsairam />
      <Header />
      <FullWidthSection />
      <div className="bg-amber-50 pt-8 sm:pt-16 pb-8 p-8s sm:p-16">
        <h1 className="sm:text-4xl text-2xl font-bold text-center mb-8">
          SCHEDULE A VISIT WITH US ANYTIME
        </h1>
        <p className=" text-center mb-16">
          At Design Indian Homes, we have made it a habit to deliver high quality End to End Interiors, Architectural Solutions, Modular Interiors like Modular kitchens, Wardrobes, Vanities, Tv Units, Interiors, etc across New Delhi, Gurgaon, Noida, Faridabad across PAN India at the most affordable quotes.
          By Our Organized structure of working, we are The Most Trusted and Tested Brand of  Architects, Interior Designers, Township Developers, Builders across New Delhi - NCR - Pan India.
          Give us a chance to serve you TODAY. !
        </p>
      </div>
      <Form />
      <ScheduleChatSection />
      {/* <ContactForm /> */}
      <Footer />
    </>
  )
}

export default page
