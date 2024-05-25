'use client'
import React, { useState } from 'react'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Image from 'next/image'

const AccordionSection = () => {
  const accordionData = [
    {
      id: 1,
      heading:
        'What are the Types of Interior & Architectural Services that you offer & Modular Kitchen - Wardrobes & Modular Interiors that you manufacture and how do you design them ?',
      content:
        'We are the largest brand for interiors and architectural works, with over 27+ Architects & 61 interior designers working round the clock on varied projects across the city. Apart from that We are manufacturing mostly all types of Modular Kitchens & Wardrobes along with complete modular interiors, be it any type or design of modular kitchen or wardrobes like normal hinged, sliding 2 doors or 3 or 4, slide and fold closets, exclusive lacquer glass, custom bespoke wardrobes & Kitchens. We design it as per specifications after a Site Visit is Booked across New Delhi - NCR. Book a Site Visit Today. We have a dedicated inhouse Modular Interior Team to Plan and Design your Modular Kitchens and Wardrobes along with certified architects and interior designers working on projects. We have over 2500+ types of materials to choose from.',
    },
    {
      id: 2,
      heading:
        'Do you Guys visit the Residences across Delhi - NCR for Modular Interior & End to End Interiors and Architectural Service Requirements? Or is it restricted to some specific areas.',
      content:
        'Yes, we do as that is a prerequisite, without a basic site visit it is not possible to understand requirements and give any insight, we recommend booking a site visit, getting a layout ready by our Team and then visit our boutique office for material selections. Our Team members do visit across Delhi - NCR at a very minor adjustable charge or We also do a Dedicated architectural visit, and we are also doing PAN - India, but that depends on the project requirements. Connect with us to Know More.',
    },
    {
      id: 3,
      heading:
        'What are the other services that you do apart from wardrobes, as we do need other interior services as well. ?',
      content:
        'We are doing Complete End to End Interiors, Architectural Services, Modular Interiors like, Modular Kitchens, TV Units, Partitions, Shoe Racks, Bar Units, Storage units like chest of drawers, side tables, crockery units, bar units, wall niche units, Mandirs, Glass Partitions, Complete End to End Interiors, Complete Architectural Services including any Structural Engineering Works. We have a team of 27 architects, interior designers working round the clock on projects across Delhi - NCR. Apart from that we are associated with more than 950+ architects, interior designers, builders, decor vendors across North India. Check out Our Official Website for Top Modular Modular Kitchens & Wardrobe works www.designindiankichen.com & www.designindianwardrobe.com . ',
    },
    {
      id: 4,
      heading:
        'Can we know what all brands are associated with you ( for hardware etc ) , or are you doing everything using a single brand.',
      content:
        'We are regional partners for more than 42 Brands, scroll & check the section ( Brands you will find in our products ). Check Below the Exclusive Brands you will find in our Interiors, Modular Kitchens, Modular Wardrobes and other Modular Interior items we manufacture in-house.',
    },
    {
      id: 5,
      heading:
        'How can we understand that the quality and pricing you offer is correct with the market prices?',
      content:
        'It has been more than 16 years we have been in the market and since more than 11 years we have been running a policy that, BRING us any quotes across North India and we assure you FLAT 7% less on that. This is the price commitment we offer, henceforth our quotes offered have 100% written guarantee across the Town. This is all due to our extensively spread team members, professional & certified architects, interior designers, project managers, our In-House Manufacturing Units, controlled production planning, bulk purchases, being distributors of multiple top brands and our organized structure of turnkey planning and delivering materials enables us to give you better prices than any vendor across the City. Connect with Us Today. ',
    },
    {
      id: 6,
      heading:
        'Do you have your own End to End Interior Team, Architectural Team or Modular Interiors Manufacturing unit, Installation team, Design center, Supervisory teams, Project managers or is it all outsourced from 90% of companies nowadays?',
      content:
        'Everything is In-House, right from interior teams, architects, design team & production units, to design team, to installation team, to project managers to supervisors. We do not facilitate with any 3rd party services or outsourcing any type of our services.',
    },
    {
      id: 7,
      heading:
        'Is it better to get a custom built wardrobe for my residence or order something online due to very cheap prices available?',
      content:
        'This is an important point, where we must understand differences between the materials used, a set static design by online sales companies and material used by our Brand. This plays a major role, if the purpose of usage is short term & temporary we can offer better prices than any online source using similar materials. But if looking for a permanent fixture or some detailed design, for that we suggest you to understand the materials specifications and the custom requirements and then make a call. ',
    },
    {
      id: 8,
      heading:
        'How can we trust that what you design is what you will deliver?',
      content:
        'Well, Life is all about trusting and being trusted. Our Customer deliveries speak volumes, we are a brand based on integrity and hard work, right from our visit stage, to our design and planning stage to the quotes and till the date of delivery, everything will be clean and transparent. Whatever is promised will be delivered, rather something extra. We are God Fearing Bunch of Folks, sorry God Loving and Sin Fearing, just trying to make your life and HOME Clutter Free. haha',
    },
    {
      id: 9,
      heading:
        'How can we check your reviews or see your Live projects online, where its not 3d pictures but Live installation and final handover goin on?',
      content:
        'Regarding that, we request you visit our Reels sections on instagram, Facebook, Youtube as per below links or right side floating tab links and also visit our boutique office in Connaught Place. Whenever you connect with us, We would be having  some Live sites going on along with final handovers, you can always get regular Videos from those sites. SO why Delay,  Book a Site Visit with Us TODAY.',
    },
    {
      id: 10,
      heading:
        'What are the Price ranges of wardrobes in Delhi - NCR, right from the basic to the most luxurious product.',
      content:
        'End to End Interiors & Modular Kitchens quotes completely depend on material selections and specifications. Architectural services are custom and vary depending on the scope of works, hence it varies from project to project. We have Modular Wardrobes, TV Units, Vanities, etc starting from Rs 1150 - Rs 9500 per sqft. It all depends on the material specification and selections as mentioned. Just Connect with us to know more. We assure you Lowest Quotes Across New Delhi - NCR, this is our written guarantee.',
    },
    {
      id: 11,
      heading:
        'Have you worked for any Corporate in Past or are currently working on any projects?',
      content:
        'Since past years we have been associated with multiple Corporates and worked on their projects as mentioned. Kindly check our section of Our Corporate Presence, to check where we have done projects.',
    },
    // Add more tabs as needed
  ]

  const [expanded, setExpanded] = useState(null)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null)
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
    <div className="m-4 sm:m-16">
      {/* <h2 className="text-3xl mb-4">
        FAQs About <span className="font-extrabold">Design Indian Homes</span>
      </h2> */}
      <div className="flex justify-center items-center sm:my-24 my-8">
        <div style={containerStyle}>
          <div style={textContainerStyle} className="flex justify-center ">
            <h1 className="sm:text-4xl text-xl font-bold text-center">
              FAQs About{' '}
              <span className="font-extrabold">Design Indian Homes</span>
            </h1>
          </div>
          <Image
            width={1000}
            height={1000}
            src="/images/simple-gold-brush-stroke-banner-5.png"
            alt="Paint Brush"
            style={backgroundImageStyle}
          />
        </div>
      </div>

      {accordionData.map((tab) => (
        <Accordion
          className="shadow-md my-4"
          key={tab.id}
          expanded={expanded === tab.id}
          onChange={handleChange(tab.id)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            // Apply conditional color based on the expanded state
            className={expanded === tab.id ? 'text-green-500' : ''}
          >
            <h4 className="text-md font-bold p-2 text-green-500">{tab.id}</h4>
            <h6 className="text-sm font-bold p-2">{tab.heading}</h6>
          </AccordionSummary>
          <AccordionDetails>
            <p className="px-8 text-sm -pt-4">{tab.content}</p>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}

export default AccordionSection
