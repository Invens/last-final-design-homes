// pages/locations/[...location].js

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const LocationTemplate = ({ location }) => {
  const router = useRouter()
  const { location } = router.query

  return (
    <div>
      <h1>{location}</h1>
      {/* Render common data using locationData */}
      {/* Example: <p>{locationData.someProperty}</p> */}
    </div>
  )
}

export async function getStaticPaths() {
  // Fetch all locations dynamically, e.g., from an API or a database
  const locations = ['alaknanda', 'anand-lok', 'ashok-vihar' /* ... */]

  const paths = locations.map((location) => ({
    params: { location: [location] },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // Fetch data for the specific location using params.location[0]
  // Example: const locationData = await fetch(/api/location/${params.location[0]}).then((response) => response.json());

  // Mock data for demonstration purposes
  const locationData = { someProperty: 'Some value' }

  return {
    props: {
      locationData,
    },
  }
}

export default LocationTemplate
