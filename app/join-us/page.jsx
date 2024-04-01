import React from 'react'
import Header from '../../components/Navbar/Header'
import Omsairam from '../../components/Navbar/Omsairam'
import Footer from '../../components/Footer/Footer'
import Form from './form'
import ContactForm from '../../components/ContactForm/page'
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
        <h1 className="text-5xl font-extrabold text-center mb-8 mx-auto">
        Join The Largest Interior And Architectural Brand - Delhi - NCR - India 
        </h1>
        <p className="uppercase text-md font-bold text-center mb-16">
        We Invite freshers and Proficient Architects, Interior Designers & Supervisors to Associate with us on multi-varied ways. Join The Top Modular Interiors, Architectural & End to End Interiors Brand and Be a Part of the Largest Growing Community. You can join our Team ( As per Vacancy ) or on Freelance basis as per current requirements & Openings. You can also join us for any joint project venture or just on consultancy basis as well. 
        Refer us and Get Rewarded.
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
