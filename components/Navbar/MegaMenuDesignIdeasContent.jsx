'use client'
import React from 'react'
import Link from 'next/link'
import './Designidea.css'
import './Omsai.css'
const MegaMenuDesignIdeasContent = ({ handleMouseLeave }) => (
  <div className="">
    <div
      className="bg-white shadow-2xl rounded-sm flex gap-[50px] justify-center absolute w-full pb-8  h-auto text-black"
      onMouseLeave={handleMouseLeave}
      style={{ marginTop: '96px' }}
    >
      <div>
        <Link href="/modular-interiors">
          <h3 className="text-base font-bold hover:text-green-700 uppercase border-b-4 border-green-500 ">Modular Interior </h3>
        </Link>
        <ul className="text-sm space-y-2 mt-2">

          <Link href="/modular-kitchen-designs">
            <li>Modular Kitchens</li>
          </Link>
          <Link href="/wardrobe-designs">
            <li>Wardrobes</li>
          </Link>
          <Link href="/vanity-designs">
            {' '}
            <li>Vanities </li>
          </Link>
          <Link href="/dressers-designs">
            <li>Dressers</li>
          </Link>
          <Link href="/tv-unit-designs">
            <li>TV Units</li>
          </Link>
          <Link href="/crockery-unit-designs">
            {' '}
            <li>Crockery Units</li>
          </Link>
          <Link href="/glass-partition-designs">
            <li>Glass Partitions</li>
          </Link>
          <Link href="/lacquer-glass-wardrobe-designs">
            <li>Lacquer Glass Wardrobe Designs</li>
          </Link>
          <Link href="/mandir-designs">
            <li>Mandir</li>
          </Link>
          <Link href="/bar-unit-designs">
            <li>Bar</li>
          </Link>
          <Link href="/side-table-designs">
            <li>Side Tables</li>
          </Link>

          <Link href="/interior/residential-Offices-designs">
            <li>Home Office</li>
          </Link>
          <Link href="/foyer-area-designs">
            <li>Foyer Cabinets</li>
          </Link>
          <Link href="/homes-by-design-indian-homes">
            <li>Homes by Design Indian Homes</li>
          </Link>
          <button className="bg-green-600 text-white text-m py-3 px-6 rounded-full mt-6">
            <Link href="/get-free-estimate-by-top-interior-brand-in-dehli-gurgaon-noida-india">
              Get Free Estimate
            </Link>
          </button>
        </ul>
      </div>

      <div>
        <Link href="/interior">
          <h3 className="text-base font-bold border-b-4 border-green-500 ">Interior Design </h3>
        </Link>
        <ul className="text-sm list mt-2">

          <Link href="/1bhk-apartment-interior-designs">
            <li>1BHK residence interior designs</li>
          </Link>
          <Link href="/2bhk-apartment-interior-designs">
            {' '}
            <li>2BHK Residence interior designs</li>
          </Link>
          <Link href="/3bhk-apartment-interior-designs">
            {' '}
            <li>3BHK Residence interior designs</li>
          </Link>
          <Link href="/4bhk-apartment-interior-designs">
            <li>4BHK Residence interior designs</li>
          </Link>
          <Link href="/villa-interior-designs">
            {' '}
            <li>Villa interior designs</li>
          </Link>
          <Link href="/farmhouse-interior-designs">
            <li>Farmhouse interior designs</li>
          </Link>
          <Link href="/penthouse-interior-designs">
            <li>Penthouse interior designs</li>
          </Link>
          <Link href="/studio-apartment-interior-designs">
            <li>studio apartment interior designs</li>
          </Link>
          <Link href="/bungalow-interior-designs">
            {' '}
            <li>Bunglow interior designs</li>
          </Link>
          <Link href="/duplex-interior-designs">
            {' '}
            <li>Duplex Residence interior designs</li>
          </Link>
          <Link href="/cottage-interior-designs">
            <li>Cottage interior designs</li>
          </Link>
          <button className="bg-green-600 text-white text-sm py-3 px-6 rounded-full mt-6">
            <Link href="/homes-by-design-indian-homes">
              Homes By Design Indian Homes
            </Link>
          </button>

        </ul>
        <button className="bg-green-600 text-white text-m py-3 px-6 rounded-full mt-6">
          <Link href="/magazine">
            Interior Digest Magazine
          </Link>
        </button>
      </div>

      <div>
        <Link href="/interior-design-ideas">
          <h3 className="text-base font-bold border-b-4 border-green-500 ">
            End to End Interior{' '}
          </h3>
        </Link>
        <ul className="text-sm list mt-2">

          <Link href="/wooden-polishing">
            <li>Wooden Polishing</li>
          </Link>
          <Link href="/wooden-flooring-designs">
            {' '}
            <li>Wooden Flooring</li>
          </Link>
          <Link href="/vertical-gardens-designs">
            {' '}
            <li>Vertical Gardens</li>
          </Link>
          <Link href="/upvc-windows-designs">
            {' '}
            <li>UPVC Windows</li>
          </Link>
          <Link href="/tiling-designs">
            {' '}
            <li>Tiling Designs</li>
          </Link>
          <Link href="/sofa-designs">
            {' '}
            <li>Sofa Designs</li>
          </Link>
          <Link href="/kitchen-lightening-designs">
            {' '}
            <li>Kitchen Lightening</li>
          </Link>
          <Link href="/plumbing-works-interiors">
            {' '}
            <li>Plumbings</li>
          </Link>
          <Link href="/glass-partition-designs">
            {' '}
            <li>Glass Partitions</li>
          </Link>
          <Link href="/ceiling-designs">
            {' '}
            <li>ceilings</li>
          </Link>
          <Link href="/wall-panelling">
            {' '}
            <li> Wall Panelling</li>
          </Link>
          <Link href="/exterior-cladding-designs">
            {' '}
            <li>Exterior Cladding</li>
          </Link>
          <Link href="/wood-door-designs">
            {' '}
            <li>Doors</li>
          </Link>
          <Link href="/electric-works-interiors">
            {' '}
            <li>Electric Works</li>
          </Link>
          <Link href="/beds-designs">
            {' '}
            <li>Beds</li>
          </Link>
          <Link href="/paint-works-interiors">
            <li>Paints</li>
          </Link>
          <Link href="/complete-end-to-end-interior-works">
            {' '}
            <li>End to End Interiors</li>
          </Link>
          <Link href="/commercial-interior-works-interiors">
            {' '}
            <li>Commercial Interiors</li>
          </Link>

        </ul>
      </div>

      <div>
        <Link href="/architectural-designs"> <h3 className="text-base font-bold border-b-4 border-green-500 ">Architectural Designs </h3>
        </Link>
        <ul className="text-sm list mt-2">

          <Link href="/architectural-consultancy">
            <li>Architectural Consultancy</li>
          </Link>
          <Link href="/top-architects-in-india">
            <li>End to End Architectural Services</li>
          </Link>
          <Link href="/architectural-brand-in-india">
            <li>Architectural Designing and Planning</li>
          </Link>
          <Link href="/commercial-architectural-delhi-india">
            <li>Commercial Architectural Services</li>
          </Link>
          <Link href=""></Link>
        </ul>
        <ul className="text-sm list">
          <Link href="/selected-homes">
            <h3 className="text-lg font-bold border-b-4 border-green-500 mt-2">Selected Homes</h3>
          </Link>
          <div className='mt-2'>
          <Link href="/astounding-lobby-area-designs">
            <li>Astounding Lobby Areas</li>
          </Link>

          <Link href="/artistic-bedroom-designs">
            <li>Artistic Bedroom</li>
          </Link>

          <Link href="/comforting-balcony-area-designs">
            <li>Comfort balcony Area</li>
          </Link>

          <Link href="/soulful-kids-room-designs">
            <li>Soulful kids Room</li>
          </Link>

          <Link href="/relaxed-walk-in-wardrobe-designs">
            <li>Relaxed Walk in Wardrobe</li>
          </Link>

          <Link href="/handsome-modular-wardrobe-designs">
            <li>Handsome Modular Wardrobe</li>
          </Link>

          <Link href="/exquisite-bathroom-remodel-designs">
            <li>Exquisite Bathroom</li>
          </Link>

          <Link href="/chilled-party-bar-unit-designs">
            <li>Chilled Out Bar & Party Areas</li>
          </Link>
          <Link href="/blissful-parents-room-designs-ideas">
            <li>Blissful Parents Rooms</li>
          </Link>
          <Link href="/spellbinding-living-room-designs">
            <li>Spellbinding Living Rooms</li>
          </Link>
          <Link href="/delicious-modular-kitchen-designs">
            <li>Delicious Kitchens</li>
          </Link>
          <Link href="/mesmerizing-modern-home-interiors">
            <li>Mesmerising Modern Interiors</li>
          </Link>
          <Link href="/wholesome-modern-interiors-designs">
            <li>Wholesome Modern Interiors</li>
          </Link>
          </div>
        </ul>
      </div>

      <div>
      <Link href="/home-renovation-service"> <h3 className="text-base font-bold border-b-4 border-green-500 ">Home Renovation Services</h3>
          </Link>
        <ul className="text-sm list mt-2">
       
          <Link href="/structural-renovation-services">
            <li>Structural Renovation</li>
          </Link>
          <Link href="/interior-renovation-services">
            <li>Interior Renovation</li>
          </Link>
          <Link href="/bedroom-renovation-services">
            <li>Bedroom Renovation</li>
          </Link>
          <Link href="/lounge-renovation-services">
            <li>Lounge Renovation</li>
          </Link>
          <Link href="/bathroom-renovation-services">
            <li>Bathroom Renovation</li>
          </Link>
          <Link href="/terrace-renovation-services">
            <li>Terrace Renovation</li>
          </Link>
          <Link href="/living-room-renovation-services">
            <li>Living room Renovation</li>
          </Link>
          <Link href="/modular-kitchen-renovation-services">
            <li>Modular kitchen Renovation</li>
          </Link>
          <Link href="/wardrobe-renovation-services">
            <li>Wardrobe Renovation</li>
          </Link>
          <Link href="/mandir-renovation-services">
            <li>Mandir Renovation</li>
          </Link>
          <Link href="/gym-spa-renovation-services">
            <li>GYM & Spas Renovation</li>
          </Link>
          <Link href="/hotel-renovation-services">
            <li>Hotel Renovation</li>
          </Link>
          <Link href="/farmhouse-renovation-services">
            <li>Farmhouse Renovation</li>
          </Link>
          <Link href="/banquet-renovation-services">
            <li>Banquet Renovation</li>
          </Link>
          <Link href="/villa-renovation-services">
            <li>Villa Renovation</li>
          </Link>
        </ul>
      </div>
    </div>
  </div>
)

export default MegaMenuDesignIdeasContent