'use client'
import React, { Component, useState, useEffect } from 'react'
import { SocialIcon } from 'react-social-icons'
import Image from 'next/image'
//import WaveGradient from '@/components/Navbar/WaveGradient'
import Link from 'next/link'
import './Gradient.css'
import { Tabs, Tab, Box, Container, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import Clock from 'react-clock'
import 'react-clock/dist/Clock.css'
import LocationsTabs from './LocationTabs'
import Bloomflower from './Bloomberg_flower/page'
// const ParagraphTab = ({ text }) => {
//   return <p className="text-lg text-black">{text}</p>
// }
// const LocationsTabs = () => {
//   const [value, setValue] = React.useState(0)

//   const handleChange = (event, newValue) => {
//     setValue(newValue)
//   }

//   const paragraphs = [
//     'Exclusive Lacquer Glass Wardrobe Designs Wardrobe – Wardrobe Dealers & Manufacturers in Ghitorni Wardrobe Designs – Wardrobe Dealers & Manufacturers in Golf Links Wardrobe Designs – Wardrobe Dealers & Manufacturers in Greater Kailash Wardrobe Designs – Wardrobe Dealers & Manufacturers in Greater Noida Wardrobe Designs – Wardrobe Dealers & Manufacturers in Green Park Wardrobe Designs – Wardrobe Dealers & Manufacturers in Gulmohar Park Wardrobe Designs – Wardrobe Dealers & Manufacturers in Gurgaon Wardrobe Designs – Wardrobe Dealers & Manufacturers in Hauz Khas Wardrobe Designs – Wardrobe Dealers & Manufacturers in Jaipur Wardrobe Designs – Wardrobe Dealers & Manufacturers in Janak Puri – Delhi Wardrobe Designs – Wardrobe Dealers & Manufacturers in Kalkaji Wardrobe Designs – Wardrobe Dealers & Manufacturers in Karol Bagh Wardrobe Designs – Wardrobe Dealers & Manufacturers in Mayur Vihar Wardrobe Designs – Wardrobe Dealers & Manufacturers in Meena Bagh Wardrobe Designs – Wardrobe Dealers & Manufacturers in Mehrauli Wardrobe Designs – Wardrobe Dealers & Manufacturers in Neeti Bagh Wardrobe Designs – Wardrobe Dealers & Manufacturers in Noida Wardrobe Designs – Wardrobe Dealers & Manufacturers in Panchsheel Wardrobe Designs – Wardrobe Dealers & Manufacturers in Punjabi Bagh Wardrobe Designs – Wardrobe Dealers & Manufacturers in Rajinder Nagar Wardrobe Designs – Wardrobe Dealers & Manufacturers in Rajouri Garden Wardrobe Designs – Wardrobe Dealers & Manufacturers in Rishikesh Wardrobe Designs – Wardrobe Dealers & Manufacturers in Sainik Farms Wardrobe Designs – Wardrobe Dealers & Manufacturers in Sarita Vihar Wardrobe Designs – Wardrobe Dealers & Manufacturers in Shanti Niketan Wardrobe Designs – Wardrobe Dealers & Manufacturers in Vaishali Wardrobe Designs – Wardrobe Dealers & Manufacturers in Vasant Kunj Wardrobe Designs – Wardrobe Dealers & Manufacturers in Vasant Vihar wardrobe-dealers-delhi-gurgaon-india wardrobe-designs-gallery-delhi-gurgaon-noida Wardrobe Dealers & Manufacturers in Safdarjung Enclave, Delhi Wardrobe Designs – Dealers & Manufacturers in New Friends Colony Wardrobe Designs – Dealers & Manufacturers in Pamposh Enclave Wardrobe Designs – Wardrobe Dealers & Manufacturers in Alaknanda – Delhi Wardrobe Designs – Wardrobe Dealers & Manufacturers in Anand Lok – Delhi Wardrobe Designs – Wardrobe Dealers & Manufacturers in Anand Niketan – Delhi Wardrobe Designs – Wardrobe Dealers & Manufacturers in Asiad Village – Delhi Wardrobe Designs – Wardrobe Dealers & Manufacturers in Chanakyapuri Wardrobe Designs – Wardrobe Dealers & Manufacturers in Chirag Delhi Wardrobe Designs – Wardrobe Dealers & Manufacturers in CR Park Wardrobe Designs – Wardrobe Dealers & Manufacturers in Defence Colony Wardrobe Designs – Wardrobe Dealers & Manufacturers in Delhi Wardrobe Designs – Wardrobe Dealers & Manufacturers in East of Kailash Wardrobe Designs – Wardrobe Dealers & Manufacturers in Faridabad',
//     'Mandir-manufacturers-delhi-gurgaon Modular Kitchen Dealers & Manufacturers in Alaknanda – New Delhi Modular Kitchen Dealers & Manufacturers in Anand Lok – New Delhi Modular Kitchen Dealers & Manufacturers in Anand Niketan – New Delhi Modular Kitchen Dealers & Manufacturers in Ashok Vihar – New Delhi Modular Kitchen Dealers & Manufacturers in Asiad Village – New Delhi Modular Kitchen Dealers & Manufacturers in Chanakyapuri – New Delhi Modular Kitchen Dealers & Manufacturers in Chirag Delhi – New Delhi Modular Kitchen Dealers & Manufacturers in Civil Lines Modular Kitchen Dealers & Manufacturers in CR Park – New Delhi Modular Kitchen Dealers & Manufacturers in Defence Colony Modular Kitchen Dealers & Manufacturers in Dehradun Modular Kitchen Dealers & Manufacturers in Dwarka – New Delhi Modular Kitchen Dealers & Manufacturers in East of Kailash – New Delhi Modular Kitchen Dealers & Manufacturers in Faridabad Modular Kitchen Dealers & Manufacturers in Greater Kailash – New Delhi Modular Kitchen Dealers & Manufacturers in Greater Noida Modular Kitchen Dealers & Manufacturers in Green Park – New Delhi Modular Kitchen Dealers & Manufacturers in Gulmohar Park – Delhi Modular Kitchen Dealers & Manufacturers in Gurgaon – Gurugram Modular Kitchen Dealers & Manufacturers in Haridwar Modular Kitchen Dealers & Manufacturers in Hauz Khas – New Delhi Modular Kitchen Dealers & Manufacturers in Jaipur Modular Kitchen Dealers & Manufacturers in Janak Puri – Delhi Modular Kitchen Dealers & Manufacturers in Kalindi Kunj – New Delhi Modular Kitchen Dealers & Manufacturers in Kalkaji – New Delhi Modular Kitchen Dealers & Manufacturers in Karol Bagh – Delhi Modular Kitchen Dealers & Manufacturers in Khan Market – New Delhi Modular Kitchen Dealers & Manufacturers in Mayur Vihar – New Delhi Modular Kitchen Dealers & Manufacturers in Meena Bagh Modular Kitchen Dealers & Manufacturers in Mehrauli – Delhi Modular Kitchen Dealers & Manufacturers in Model Town – New Delhi Modular Kitchen Dealers & Manufacturers in Neeti Bagh Modular Kitchen Dealers & Manufacturers in New Delhi Modular Kitchen Dealers & Manufacturers in New Friends Colony Modular Kitchen Dealers & Manufacturers in Noida Modular Kitchen Dealers & Manufacturers in Pamposh Enclave – Delhi Modular Kitchen Dealers & Manufacturers in Panchsheel – New Delhi Modular Kitchen Dealers & Manufacturers in Patel Nagar Modular Kitchen Dealers & Manufacturers in Pitam Pura – Delhi Modular Kitchen Dealers & Manufacturers in Preet Vihar – New Delhi Modular Kitchen Dealers & Manufacturers in Punjabi Bagh Modular Kitchen Dealers & Manufacturers in Rajinder Nagar Modular Kitchen Dealers & Manufacturers in Rajokri – New Delhi Modular Kitchen Dealers & Manufacturers in Rajouri Garden – New Delhi Modular Kitchen Dealers & Manufacturers in Rishikesh Modular Kitchen Dealers & Manufacturers in Safdarjung Enclave – New Delhi Modular Kitchen Dealers & Manufacturers in Sainik Farms – New Delhi Modular Kitchen Dealers & Manufacturers in Saket – New Delhi Modular Kitchen Dealers & Manufacturers in Sarita Vihar – New Delhi Modular Kitchen Dealers & Manufacturers in Shanti Niketan – New Delhi Modular Kitchen Dealers & Manufacturers in Vaishali – New Delhi Modular Kitchen Dealers & Manufacturers in Vasant Vihar – New Delhi',
//     'White Colour Modular Kitchen Designs Yellow Colour Modular Kitchen Designs in Delhi Gurgaon Noida India Silver Colour Modular Kitchen Designs Sky Blue Modular Kitchens Designs in Delhi Gurgaon Noida India Orange Modular Kitchen Designs in Delhi Gurgaon Noida India Pink Modular Kitchen Designs in Delhi Gurgaon Noida India Purple Modular Kitchen Design collection in Delhi and India Red Colour Modular Kitchen Designs Beige Colour Modular Kitchen designs in Delhi Gurgaon Noida India Black Modular Kitchen Designs in Delhi & India Blue Colour Modular Kitchens in Delhi Gurgaon Noida India Brown Colour Modular Kitchens in Delhi Gurgaon Noida India Cappuccino Cream colour modular kitchen designs in delhi india Charcoal Modular Kitchen Designs Colourful Modular Kitchen in Delhi gurgaon Noida India Green Colour Modular Kitchen Designs Grey Colour Modular Kitchen Designs in Delhi Maroon Modular Kitchen Designs in Delhi Gurgaon Noida India',
//   ]
//   const delhiLocations = [
//     'Pitampura',
//     'Shalimar Bagh',
//     'Ashok Vihar',
//     'Mukherji Nagar',
//     'Paschim Vihar',
//     'Yojana Vihar',
//     'Vigyan Vihar',
//     'Parparganj',
//     'Karol Bagh',
//     'Gulabi Bagh',
//     'Punjabi Bagh',
//     'Rajouri Garden',
//     'Tagore Garden',
//     'Vikas Puri',
//     'Uttam Nagar',
//     'Delhi Cantt',
//     'Janak Puri',
//     'Palam',
//     'Najafgarh',
//     'Dwarka',
//     'Dabri',
//     'Mayapuri',
//     'Hari Nagar',
//     'Tilak Nagar',
//     'Maya Enclave',
//     'Subhash Nagar',
//     'Ramesh Nagar',
//     'Chanakyapuri',
//     'Moti Bagh',
//     'Vasant Vihar',
//     'Vasant Kunj',
//     'Delhi - IIT',
//     'Hauz Khas',
//     'Munirka',
//     'Safdarjung',
//     'Green Park',
//     'Mahipalpur',
//     'Mehrauli',
//     'Badarpur',
//     'Niti Bagh',
//     'Chirag Delhi',
//     'Malviya Nagar',
//     'Saket',
//     'Sanik Farms',
//     'New Friends Colony',
//     'Defence Colony',
//     'Moti Nagar',
//     'Sarita Vihar',
//     'Mayur Vihar',
//     'Trilok Puri',
//     'New Ashok Nagar',
//     'Khan Market',
//     'Connaught Place',
//     'Chattarpur',
//     'Sultanpur',
//     'Sukhdev Vihar',
//     'Kalindi Kunj',
//     'Okhla',
//     'Govindpuri',
//     'Tughlakabad',
//     'New Delhi',
//     'Greater Kailash',
//     'Nehru Place',
//     'Ashram',
//     'Rk Puram',
//     'Rohini',
//     'South Extension',
//     'Civil Lines',
//     'Kohat Enclave',
//     'Bikaji Cama Place',
//     'Rajendra Nagar',
//     'Inderpuri',
//     'Naraina Vihar',
//     'Ghitorni',
//     'Guru Dhronacharya',
//     'Vinod Nagar',
//     'Sant Nagar',
//     'Harkesh Nagar',
//     'Jasola Vihar',
//     'Pragati Vihar',
//     'Arjan Garh',
//     'Aya Nagar Extension',
//     'Model Town',
//     'Karkarduma',
//     'East Azad Nagar',
//     'Gulmohar Park',
//     'Golf Links',
//     'Amrita Shergill Marg',
//     'Asiad Village',
//     'Rajokri',
//     'Kailash Colony',
//     'East of Kailash',
//     'Narela',
//     'Pamposh Enclave',
//     'Patel Nagar',
//     'Vaishali',
//     'Indirapuram',
//     'Nirman Vihar',
//     'Rangpuri',
//     'Shivaji Park',
//     'Madipur',
//     'Shastri Nagar',
//     'Partap Nagar',
//     'Rk Ashram Marg',
//     'Sanik Vihar',
//     'Mansarovar Park',
//     'Dilshad Garden',
//     'Vidhan Sabha',
//     'Vishwa Vidyalaya',
//     'GTB Nagar',
//     'Jagatpuri',
//     'Yamuna Vihar',
//     'Gautam Nagar',
//     'Lajpat Nagar',
//     'Vijay Nagar',
//     'Kirti Nagar',
//     'Mansarovar Garden',
//     'MG Road',
//     'Sunder Nagar',
//     'Friends Colony',
//     'Kalkaji',
//     'GK Enclave',
//     'Safdarjung Enclave',
//     'Gulmohar Park',
//     'Lodhi Colony',
//     'Aurobindo Marg',
//   ]
//   const gurgaonLocations = [
//     'Sushant Lok 1',
//     'Iffco Chowk',
//     'Dlf Phase 1',
//     'Dlf Phase 2',
//     'Iffcow Chowk',
//     'MG Road',
//     'Huda City',
//     'Palam Vihar',
//     'M3M Seirra',
//     'Arete our Homes',
//     'Shapoorji Pallonji Joy Ville',
//     'Dlf New Town Heights',
//     'Pyramid Urban Homes',
//     'Dlf the Ultima',
//     'Dlf the Crest',
//     'Ats Triumph',
//     'Emaar Palm Drive',
//     'Mapsko Mount',
//     'Palam Vihar',
//     'Dlf Regal Gardens',
//     'Breez Global Heights',
//     'Sobha City',
//     'Godrej Summit',
//     'Microtek Greenburg',
//     'Emaar Palm Hills',
//     'Godrej Habitat',
//     'Signature Global Superia',
//     'Emaar Gurgaon Greens',
//     'Emaar Marbella',
//     'Central Park Town Houses',
//     'Adani Aangan',
//     'Ireo Victory Valley',
//     'M3M Golf Estate',
//     'Tata Housing Development La Vida',
//     'Tulip Violet',
//     'Pyramid Urban',
//     'Bestech Park View Grand Spa',
//     'M3M Marina',
//     'Godrej 101',
//     'Dlf the Primus',
//     'Adani Brahma Samsara Vilasa',
//     'M3M Escala',
//     'Lotus Momz',
//     'Emaar Emerald Floors',
//     'Puri Diplomatic Greens',
//     'Emaar Emerald Floor Premier Phase 3',
//     'Vatika Lifestyle Homes',
//     'Tata Housing Development Primanti Uberluxe',
//     'Vatika City Homes',
//     'Chintels Serenity',
//     'Godrej Oasis',
//     'Puri EmraldBay',
//     'Aipl Zen Residences',
//     'Ats Tourmaline',
//     'Adani M2K Oyster Grande',
//     'M3M Woodshire',
//     'Central Park Flamingo',
//     'Pioneer Araya',
//     'Shree Vardhman Victoria',
//     'Paras Quartier',
//     'SS The Coralwood',
//     'Bestech Park View Sanskruti',
//     'Anant Raj Maceo',
//     'Green Court',
//     'M3M Natura',
//     'Tulip Lemon',
//     'Dlf Siris Estate',
//     'Mapsko Casa Bella',
//     'Spaze Privy AT4',
//     'Pioneer Presidia',
//     'ROF Ananda',
//     'Mahindra Luminare',
//     'Ireo Skyon',
//     'Concient HeritageMax',
//     'Vatika The Seven lamps',
//     'SS Almeria',
//     'Godrej Aria',
//     'DLF The Skycourt',
//     'Ashiana Anmol',
//     'Vatika Signature Villa',
//     'Signature Global Roselia2',
//     'BPTP Amstoria Country Floor',
//     'Eldeco Acclaim',
//     'Tata Housing Primanti',
//     'Emaar Palm Heights',
//     'Emaar Palm Select',
//     'Uppal Gurgaon 99',
//     'Pareena Om Apartment',
//     'Vatika Boulevard Heights and Residences',
//     'Emaar Palm Terraces',
//     'MeM Latitude',
//     'Tata Housing Gurgaon Gateway',
//     'Tulip Ace',
//     'Tulip Leaf',
//     'Vatika Gurgaon',
//     'Signature Orchard Avenue',
//     'M3M Merlin',
//     'Paras Irene',
//     'SS The Leaf',
//     'Emaar Emerald',
//     'Whitehousz Nirvana',
//     'Vatika Independent',
//     'Solutrean Caladium',
//     'Surendra Homes Dayanand Colony',
//     'GGR Ansal Esensia Homes',
//     'Surendra Alisha Homes',
//     'Central Park Resort',
//     'Mem One Key Residency3',
//     'M3M One Key Resiment',
//     'Lkrishna Homes',
//     'CGHS Peach Jasmine',
//     'CGHS Arzoo Apartment',
//     'The Cedar Estate',
//     'AKDA Mihir Apartments',
//     'KST Urban Universe',
//     'Luxury Floors, Gurgaon',
//     'Sobha International City',
//     'Ansal Heights',
//     'Dlf Exclusive Floors',
//     'Dlf Phase 3',
//     'Dlf Phase 4',
//     'Ivory Tulip',
//     'DLF Summit',
//     'Gurgaon Golf Course Extension',
//     'Gurgaon Golf Course Road',
//     'Belvedre Towers',
//     'Suncity',
//     'Ansal Esencia',
//     'Nirvana County - Deerwood Chase',
//     'Nirvana County - Espace',
//     'La Laguine Gurgaon',
//     'DLF Aralias',
//     'DLF Magnolias',
//     'The Camellias at DLF 5 Gurugram',
//     'India Bulls, Gurgaon',
//     'Dhoot Times Residency Gurgaon',
//     'Samriddhi Apartments, Gurgaon',
//     'Sector 22, Sector 23, Gurgaon',
//     'Ireo the Grand Arch',
//     'Orchid Petals',
//     'S.S Habiscus',
//     'Ireo The Corridor',
//     'Vatika city Homes',
//     'Tata Raisina Residence',
//     'Emaar MGF The Palm Drive',
//     'Vipul Green',
//     'Unitech Fresco , Nirvana Country',
//     'The Close South Nirvana Country',
//     'DlfThe Camilia',
//     'Vatik xpressions',
//     'Salcon The Varandas',
//     'DLF Park Place-Park Heights',
//     'DLF Magnolias',
//     'M3M Crown',
//     'Smart World one DXP',
//     'DLF the Arbour',
//     'White Land Aspen',
//     'M3M Golf Hills',
//     'Elan The Presidential',
//     'Tulip Monsella',
//     'Mahinder Luminas',
//     'Krisum Waterfall Residence',
//     'White land BlissnVilla',
//     'M3M Sky City',
//     'BPTP Terra',
//     'Trump Tower',
//     'Oxirich Chintamani',
//     'Saan Verdanta',
//     'Experion Windchant',
//     'GREEN COURT APARTMENTS',
//     'CRESCENT PARK, PHASE 3',
//     'THE CORRIDORS',
//     'M3M WOODSHIRE',
//     'MAPLE HEIGHTS',
//     'SOUTHEND FLOORS B BLOCK',
//     'SOUTH CITY-2 I BLOCK',
//     'CORONA OPTUS',
//     'SILVER OAKS CONDOMINIUM ASSOCIATION',
//     'UMANG - MONSOON BREEZE',
//     'ASHIANA ANMOL',
//     'THE VIEW',
//     'THE EDGE',
//     'THE CLOSE SOUTH',
//     'PARK VIEW SPA',
//     'UNIWORLD GARDEN',
//     'CHD AVENUE 71',
//     'JAL VAYU VIHAR SECTOR 30',
//     'BPTP PARK PRIME',
//     'THE PLAZA AT 106',
//     'APEX OUR HOMES PHASE 2',
//     'SHREE VARDHMAN MANTRA',
//     'PARK STREET A BLOCK',
//     'ROSEWOOD CITY D BLOCK',
//     'MARUTI VIHAR',
//     'WINTER HILL SEC 77',
//     'SWARNA JAYANTI',
//     'PYRAMID URBAN HOMES',
//     'ZARA AWAAS',
//     'RIDGEWOOD ESTATE',
//     'D2 BLOCK SOUTHCITY 2',
//     'TODAY BLOSSOMS 2',
//     'ARAVALI HOMES',
//     'TATVAM VILLAS',
//     'NINEX CITY',
//     'DEEVAN SOCIETY',
//     'JALVAYU TOWERS APARTMENT OWNERS ASSOCIATION',
//     'OUR HOMES',
//     'ADANI OYSTER GRANDE',
//     'ANTRIKSH HEIGHTS 1 & 2',
//     'DLF PINNACLE',
//     'BPTP FREEDOM PARK LIFE',
//     'VIPUL BELMONTE',
//     'THE CLOSE NORTH',
//     'ORCHID ISLAND',
//   ]
//   const noidaLocations = [
//     'Mahagun Mywood Phase 2',
//     'ATS Knightbridge',
//     'Arihant Arden',
//     'Cleo Country',
//     'Ace City',
//     'Mahugun Mantra',
//     'Trident Embassy',
//     'Gaursons Hi Tech 14th Avenue',
//     'Prateek Edific',
//     'Kinson Green Villa',
//     'ATS Pristine',
//     'Civitech Stadia',
//     'Ajnara Ambrosia',
//     'Mahagun Mezzaria',
//     'ExpressZenith',
//     'Indosam 75',
//     'Aastha Greens',
//     'Panchsheel Greens2',
//     'Shri Radha Sky Gardens',
//     'Strategic Royal Court',
//     'Gaursons Hi Tech Sports Wood',
//     'Amaarta Homes',
//     'Nirala Estate 2',
//     'Shri Radha Sky Park',
//     'Ajnara Le Garden',
//     'Devika Gold Homz',
//     'Supertech EcoVillage2',
//     'Laureate Parx Laureate',
//     'Panchsheel Pratishtha',
//     'The Antriksh Forest',
//     'Exotica Dreamville',
//     'Supertech The Romano',
//     'Nirala Aspire',
//     'Mahagun Mywoods',
//     'Gulshan Botnia',
//     'Antara Noida Phase1',
//     'Nirala Estate',
//     'Shri Radha Aqua Garden',
//     'Ska Greenarch',
//     'Anthem French Apartments',
//     'ACE Group Golfshire',
//     'RG Residency',
//     'Omaxe The Forest Spa',
//     'Dkrrish Green Beauty Farms',
//     'Novel Valley',
//     'Dasnac The Jewel of Noida',
//     'Mahagun Mantraa',
//     'Stellar One',
//     'Ratan Pearls',
//     'Jaypee The Kalypso Court',
//     'Urbtech Hilston',
//     'Jaypee The Imperial Court',
//     'Emenox La Solara',
//     'Gaursons Hi Tech Gaur Suites',
//     'Thv Heritage Floors',
//     'OM Villa',
//     'Rise Resort Residences Forest',
//     'Vihaan Homes',
//     'Galaxy Royale',
//     'Supertech SpiraStudios',
//     'AFOWO Raksha Addela',
//     'Apartment Type Test Project',
//     'Divyansh Flora',
//     'Alpine AIG Park Avenue',
//     'Addelia Raj Rakhsa Addela',
//     'VVIP Homes',
//     'Paras Tierea',
//     'Defence Enclave',
//     'Anandman Villas',
//     'Jaypee Greens Aman',
//     'Jaypee Kosmos',
//     'Golf City',
//     'Gardenia Gateway',
//     'Spertech North Eye',
//     'Amrapli Golf Homes',
//     'Parteek Wisteria',
//     'Stellar Jeevan',
//     'Ajnara Dafodil',
//     'Vijayant Enclave',
//     'Antriksh Golf City',
//     'Panchsheel Hynish',
//     '3C Lotus Boulevard',
//     'Future Rhythm Country',
//     'Mahagun Mirabell',
//     'Supreme Tower',
//     'Paramount Emotions',
//     'Amrapali Sapphire',
//     'Gulshan Bellina',
//     'Supertech Eco Village1',
//     'Amrapali Zodiac',
//     'Imperia H2O',
//     'Sam Palm Olympia',
//     'Supertech Eco Village 3',
//     'Maxblis White House',
//     'Ajnara Homes',
//     'Jaypee Krescent Homes',
//     'Supertech Crown Tower',
//     'Sikka Kaama Greens',
//     'Gardenia Glory',
//     'Alpha Saptrishi Vihar',
//     'Mahagun Mirabella Villa',
//     'Jaypee Kenington Park Apartments',
//     'Apex Buildcon Athena',
//     'Aims Green Avenue',
//     'Sunshine Helios',
//     'Supertech Ecociti',
//     'Amrapali Eden Park',
//     'Noida Authority LIG Flats',
//     'Supertech Cape Town',
//     'Pearls Gateway Towers',
//     'Madhuban Apartments',
//     'Victory Amara',
//     'Mahgun Maple',
//     'Amrapali Silicon City',
//     'Eldeco Aamantra',
//     'Hawelia Group Valencia',
//     'Exotica Fresco',
//     'Ajnara Grand Heritage',
//     'Prateek Stylome',
//     'Paramount Floraville',
//     'Urbtech Xaviers',
//     'Gaursons India Gaur City 2 16th Avenue',
//     'ATS One Hamlet',
//     'Amrapali Pan Oasis',
//     'Logix Blossom Greens',
//     'Dasnac Burj Noida',
//     'Elixir Harmony Apartment',
//     'Jaypee The Pavillion Court',
//     'Panchsheel Greens',
//     'The 3C Lotus Boulevard Espacia',
//     'Oxford Square',
//     'Nimbus Hyde Park',
//     'Luxury Homes',
//     'Griha Grihapravesh',
//     'Civitech Sampriti',
//     'Gulshan Vivante',
//     'Great Value Sahranam',
//     'JM Orchid',
//     'Assotech Celeste Towers',
//     'Purvanchal Saket Dham',
//     'TGB Meghdutam',
//     'Paras Seasons',
//     'Jaypee Green Aman',
//     'Sunworld Arista',
//     'Wave Magacity Sec 5 Greenwood Enclave',
//     'Jaypee Klassic Heights',
//     'Om Mahadev Apartment',
//     'Amrapali Platinum',
//     'The 3C Lotus Panache',
//     'The 3C Lotus Zing',
//     'Skytech Matrott',
//     'Nimbus The Golden Palms',
//     'JM Aroma',
//     'Jaypee Garden Isles',
//     'Aarcity Regency Park',
//     'Assotech Winsor Court',
//     'UCHDL Livork',
//     'Sector 15 Noida',
//     'Jalvayu Vihar',
//     'ATS Knightbridge',
//     'SKA Orion',
//     'Tata Eureka Park',
//     'Godrej Wood',
//     'Ace Starlit',
//   ]

//   const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
//     ({ theme }) => ({
//       textTransform: 'none',

//       marginRight: theme.spacing(1),
//       color: '#99adc9',
//       fontFamily: 'BioRhyme',

//       '&.Mui-selected': {
//         color: '#ffffff',
//       },
//       '&.Mui-focusVisible': {
//         backgroundColor: 'rgba(100, 95, 228, 0.32)',
//       },
//     })
//   )

//   return (
//     <div className="container mx-auto mt-8 p-0 ">
//       <div className="flex justify-center">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           variant="scrollable"
//           scrollButtons="auto"
//           className="text-center  w-fit" // Add this to center the text in tabs
//         >
//           <StyledTab
//             label="WARDROBE DESIGNS"
//             className="sm:text-xl text-xs font-[500] my-2"
//           />
//           <StyledTab
//             label="KITCHEN DESIGNS"
//             className="sm:text-xl text-xs font-[500] my-2"
//           />
//           <StyledTab
//             label="INTERIOR DESIGNS"
//             className="sm:text-xl text-xs font-[500] my-2"
//           />
//         </Tabs>
//       </div>
//       <h2 className="mt-4 text-lg text-black font-bold">LOCATIONS -</h2>
//       <Box width="100%" className="mt-2">
//         {value === 0 && <ParagraphTab text={paragraphs[0]} />}
//         {value === 1 && <ParagraphTab text={paragraphs[1]} />}
//         {value === 2 && <ParagraphTab text={paragraphs[2]} />}
//       </Box>
//     </div>
//   )
// }

const DesignDropdown = ({
  id,
  heading,
  links,
  openDropdown,
  setOpenDropdown,
}) => {
  const isOpen = openDropdown === id

  const toggleDropdown = () => {
    setOpenDropdown(isOpen ? null : id)
  }

  return (
    <div className="relative inline-block text-left">
      <button className="focus:outline-none" onClick={toggleDropdown}>
        <span className="cursor-pointer text-black hover:text-blue-700 font-bold">
          {heading}
        </span>
        <svg
          className={`ml-2 h-4 w-4 inline-block transform ${isOpen ? 'rotate-180' : ''
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="z-10 block mt-2 bg-[#87fff0] border rounded-lg shadow-md w-64">
          <ul>
            {links.map((link, index) => (
              <li
                key={index}
                className="py-2 px-4 hover:bg-[#4f9ecc] rounded-lg"
              >
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

const DesignIdeasDropdownContainer = () => {
  const [openDropdown, setOpenDropdown] = useState(null)
  const dropdownData = [
    {
      id: 1,
      heading: 'Design Ideas',
      links: [
        { label: 'Modular Kitchens', url: '/modular-kitchen-designs' },
        { label: 'Wardrobes', url: '/wardrobe-designs' },
        { label: 'Vanities', url: '/vanity-designs' },
        { label: 'Dressers', url: '/dressers-designs' },
        { label: 'TV Units', url: '/tv-unit-designs' },
        { label: 'Crockery Units', url: '/crockery-unit-designs' },
        { label: 'Glass Partitions', url: '/glass-partition-designs' },
        // Add other links as needed
      ],
    },
    {
      id: 2,
      heading: 'Interior',
      links: [
        {
          label: '1bhk residence interior designs',
          url: '/1bhk-apartment-interior-designs',
        },
        {
          label: '2bhk residence interior designs',
          url: '/2bhk-apartment-interior-designs',
        },
        {
          label: '3bhk residence interior designs',
          url: '/3bhk-apartment-interior-designs',
        },
        {
          label: '4bhk residence interior designs',
          url: '/4bhk-apartment-interior-designs',
        },
        { label: 'Villa interior designs', url: '/villa-interior-designs' },
        {
          label: 'Farmhouse interior designs ',
          url: '/farmhouse-interior-designs',
        },
        {
          label: 'Penthouse interior designs ',
          url: '/penthouse-interior-designs',
        },
        {
          label: 'Studio apartment interior designs ',
          url: '/studio-apartment-interior-designs',
        },
        {
          label: 'Bungalow interior designs ',
          url: '/bungalow-interior-designs',
        },
        {
          label: 'Duplex Residence interior Designs ',
          url: '/duplex-interior-designs',
        },
        { label: 'Cottage Interior Designs', url: '/cottage-interior-designs' },
      ],
    },
    {
      id: 3,
      heading: 'Architecture',
      links: [
        { label: 'Consultancy', url: '/architectural-consultancy' },
        { label: 'Designing & Planning', url: '/architectural-brand-in-india' },
        {
          label: 'End to End Structural Projects ',
          url: '/top-architects-in-india',
        },
        {
          label: 'Luxury Residences ',
          url: '/commercial-architectural-delhi-india',
        },
        { label: 'Renovations', url: '/home-renovation-services' },
      ],
    },
    {
      id: 4,
      heading: 'Modular Kitchen',
      links: [
        { label: 'Types of Modular Kitchen', url: '/modular-kitchen-types' },
        { label: 'Modular Kitchen Designs', url: '/modular-kitchen-designs' },
        {
          label: 'Luxury Modular Kitchen ',
          url: '/luxury-modular-kitchen-india',
        },
        {
          label: 'Kitchen Renovation ',
          url: '/modular-kitchen-renovation-services',
        },
        { label: 'Get Estimate ', url: '/GetQuotes' },
      ],
    },
    {
      id: 5,
      heading: 'Wardrobes',
      links: [
        { label: 'Types of Wardrobes ', url: '/types-of-wardrobe-designs' },
        { label: 'Luxury Wardrobes', url: '/luxury-wardrobe-designs-india' },
        { label: 'Wardrobe Designs', url: '/wardrobe-designs' },
        {
          label: 'Lacquer Glass Wardrobe Designs',
          url: '/lacquer-glass-wardrobe-designs',
        },
        {
          label: 'Wardrobe Renovation Services ',
          url: '/wardrobe-renovation-services',
        },
      ],
    },
    {
      id: 6,
      heading: 'Modular Interior',
      links: [
        { label: 'Mandir', url: '/mandir-designs' },
        { label: 'Chest of Drawers', url: '/chest-of-drawer-designs' },
        { label: 'Bar Units', url: '/Bar-unit-designs' },
        { label: 'Side Tables', url: '/side-table-designs' },
        { label: 'Foldable Beds ', url: '/foldable-area-designs' },
        { label: 'Foyer Cabinets ', url: '/foyer-area-designs' },
        { label: 'Bathroom Vanities ', url: '/vanity-designs' },
      ],
    },
    // Add data for other dropdowns
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 gap-y-8">
      {dropdownData.map((dropdown) => (
        <DesignDropdown
          key={dropdown.id}
          id={dropdown.id}
          heading={dropdown.heading}
          links={dropdown.links}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />
      ))}
    </div>
  )
}

// clock time

const AnalogClock = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date()), 1000)

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="analog-clock">
      <Clock value={date} renderNumbers={true} />
    </div>
  )
}

function Time() {
  const [liveTime, setLiveTime] = useState('')

  useEffect(() => {
    const updateLiveTime = () => {
      const currentTime = new Date().toLocaleTimeString()
      setLiveTime(currentTime)
    }

    // Update the time every second
    const intervalId = setInterval(updateLiveTime, 1000)

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <ul className="border-l-4 border-black pl-2">
        <li className="mb-2 font-bold">ORGANIZATION & INDUSTRIAL BUSINESS</li>
        <li className="mb-2 font-bold">OPERATED SINCE 2008.</li>
        <li className="mb-2 font-bold">ALL RIGHTS RESERVED.</li>
        <li className="mb-2 font-bold">ALL WRONGS REVERSED.</li>
        <li className="mb-2 font-bold">DATA PRIVACY</li>
        <li className="mb-2 mt-8">
          <AnalogClock />
        </li>
        <li className="mb-2 text-sm mt-4 ml-6">{liveTime}</li>
      </ul>
    </div>
  )
}

const LetsConnectForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  })
  const [btnText, setBtnText] = useState('Send Message')
  const [formSubmitted, setFormSubmitted] = useState(false);

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
    setFormSubmitted(true);

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

      console.log('Response status:', response.status)
      console.log('Response headers:', response.headers)
      console.log('Response body:', await response.text())

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
    setFormSubmitted(true);

  };
  const handleClose = () => {
    setFormSubmitted(false);
    // Add any additional logic you want to perform when closing the thank-you page
  };
  return (
    <>
      {formSubmitted ? (
        <div className='grid grid-cols-1 justify-items-center' >
          <p className='text-center text-lg'>Thank you for your submission!</p>
          <Image
            alt="thank you image"
            src={'/thank-you.png'}
            width={400}
            height={300}

          />
          <h1 className='text-center font-bold w-[200px]'> FOR ANY PRIORITY BOOKING OF DESIGN/PLANNING MEETING, DO CALL US OR WHATSAPP US ON 9899264978, 9582827928</h1>

          <button
            onClick={handleClose}
            className="bg-gray-900 text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-700 hover:shadow"
          >
            Close
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className="w-full mb-4 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500 py-2 px-4 rounded-md transition-all duration-300 bg-gradient-to-r from-teal-400 to-blue-500"
          />

          <br />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="w-full mb-4 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500 py-2 px-4 rounded-md transition-all duration-300 bg-gradient-to-r from-teal-400 to-blue-500"
          />

          <br />

          <input
            type="text"
            name="contactNumber"
            placeholder="Mobile Number"
            onChange={handleChange}
            required
            className="w-full mb-4 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500 py-2 px-4 rounded-md transition-all duration-300 bg-gradient-to-r from-teal-400 to-blue-500"
          />

          <br />

          <textarea
            name="message"
            placeholder="Message"
            onChange={handleChange}
            required
            className="w-full mb-8 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500 py-2 px-4 rounded-md transition-all duration-300 bg-gradient-to-r from-teal-400 to-blue-500"
          />

          <br />
          <button
            type="submit"
            // className="py-2 px-6 hover:text-white hover:bg-black"
            // style={{ border: "1px solid black" }}
            className="w-full rounded-full border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500 py-2 px-4 transition-all duration-300 bg-gradient-to-r from-lime-300 to-green-400"
          >
            {btnText}
          </button>
        </form>
      )}
    </>

  )
}

export class Footer extends Component {
  render() {
    return (
      <div className="flex justify-center w-full mx-0">
        <div className="gradient w-full flex flex-col justify-center items-center">
          <div className="mt-22 container">
            {/* <WaveGradient /> */}
            <div
              className="flex flex-col items-center justify-center bg-cover rounded-lg mb-12 h-[40vh] sm:h-[10vh] md:h-[100vh] h-1/2"
              style={{
                backgroundImage:
                  "url('/images/get-free-estimate.jpg')",
                backgroundSize: 'fit',
                backgroundRepeat: 'no-repeat',
                objectFit: 'cover',
              }}
            >
              <div className="relative  m-16">
                <Link href="/get-free-estimate-by-top-interior-brand-in-dehli-gurgaon-noida-india">
                  <h1 className="text-sm md:text-8xl font-bold text-center bg-white bg-opacity-50 p-4 rounded-full">
                    Get Your Estimates Free
                  </h1>
                </Link>
              </div>
              {/* <h1 className="text-md md:text-xl sm:my-4 text-center sm:p-4 bg-white rounded-md">
                LOVE ALL SERVER ALL
              </h1> */}
            </div>

            <div class="">
              <div class="text-black w-full flex items-center justify-center">
                <button class="w-full sm:mx-24 display-center run rounded-full border-dotted border-2 border-black py-12 mt-4 md:py-48 hover:bg-black hover:text-white">
                  <a href="tel:+919899264978" class="">
                    Call Us Today! <br />
                    <span class="button2 pb-4">
                      We can talk about how big this button is.
                    </span>
                  </a>
                </button>
              </div>
            </div>

            <h1 className="text-4xl md:text font-semibold text-center text-black pt-16">
              Know The Trinity Brands
            </h1>

            <div className="flex flex-col items-center md:flex-row justify-center gap-6 md:gap-32 w-full mt-5">
              {/* Brand 1 */}
              <a
                href="https://www.designindiankitchen.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-center flex flex-col items-center justify-center">
                  <Image src="/dkilogo.png" alt="" width={200} height={80} />
                  <p className="text-green-500 text-2xl font-medium">
                    Design Indian Kitchen
                  </p>
                </div>
              </a>

              {/* Brand 2 */}
              <a
                href="https://www.designindianhomes.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-center flex flex-col items-center justify-center">
                  <Image
                    src="/desig indian homes.gif"
                    alt=""
                    width={200}
                    height={80}
                  />
                  <p className="text-green-500 text-2xl font-medium">
                    Design Indian Home
                  </p>
                </div>
              </a>

              {/* Brand 3 */}
              <a
                href="https://www.designindianwardrobes.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-center flex flex-col items-center justify-center">
                  <Image
                    src="/footer-logo-multi.png"
                    alt=""
                    width={300}
                    height={80}
                  />
                  <p className="text-green-500 text-2xl font-medium">
                    Design Indian Wardrobe
                  </p>
                </div>
              </a>
            </div>

            {/* Features Section */}
            <div
              className="flex flex-col items-center md:flex-row justify-center    p-10 gap-6 mt-10 text-black"
              style={{ alignItems: 'center' }}
            >
              {/* Feature 1 */}
              <div className="text-center">
                <div className="flex justify-center">
                  <Image src="/warranty.png" alt="" width={108} height={80} />
                </div>

                <h1 className="font-bold text-center text-sm">
                  Flat 10 year warranty
                </h1>
                <p className="text-sm">
                  Choose interiors designed with superior quality material,
                  leaving no room for defects.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center mt-4 md:mt-0">
                <div className="flex justify-center">
                  <Image
                    src="/fast-delivery.png"
                    alt=""
                    width={128}
                    height={80}
                  />
                </div>

                <h1 className="font-bold text-center text-sm">
                  45-day delivery
                </h1>
                <p className="text-sm">
                  Get beautiful interiors for your new home in just 45 days.
                  That’s our delivery guarantee.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center mt-4 md:mt-0">
                <div className="flex justify-center">
                  <Image
                    src="/team-building.png"
                    alt=""
                    width={128}
                    height={80}
                  />
                </div>
                <h1 className="font-bold text-center text-sm">
                  600+ design experts
                </h1>
                <p className="text-sm">
                  Explore design ideas and co-create your dream home with our
                  experienced designers
                </p>
              </div>

              {/* Feature 4 */}
              <div className="text-center mt-4 md:mt-0">
                <div className="flex justify-center">
                  <Image
                    src="/customer-service.png"
                    alt=""
                    width={128}
                    height={80}
                  />
                </div>
                <h1 className="font-bold text-center text-sm">
                  Post-installation service
                </h1>
                <p className="text-sm">
                  Complete your design journey and get unwavering support from
                  our dedicated care team.
                </p>
              </div>
            </div>

            {/* Social Media and Copyright Section */}
            {/* add hr */}
            <hr className="mb-12 border-t-2 border-black" />
            <div className="flex flex-col md:flex-row justify-center gap-8  text-black">
              {/* Social Media Icons */}
              <div className="text-left">
                <Image
                  src="/desig indian homes.gif"
                  alt="footer logo"
                  width={128}
                  height={80}
                />
                <div className="flex gap-4 mt-4 hover">
                  <SocialIcon
                    network="twitter"
                    url="www.vimeo.com"
                    style={{ width: '2rem', height: '2rem' }}
                  />
                  <SocialIcon
                    network="facebook"
                    url="www.vimeo.com"
                    style={{ width: '2rem', height: '2rem' }}
                  />
                  <SocialIcon
                    network="instagram"
                    url="www.vimeo.com"
                    style={{ width: '2rem', height: '2rem' }}
                  />
                  <SocialIcon
                    network="linkedin"
                    url="www.vimeo.com"
                    style={{ width: '2rem', height: '2rem' }}
                  />
                </div>
                <p className="mt-8">
                  © Copyright <strong>Design Indian Homes</strong> 2023. <br />{' '}
                  All Rights Reserved
                </p>
              </div>

              <div className="px-0 mx-0">
                <DesignIdeasDropdownContainer />
              </div>

              <div>
                <Image
                  src="/homes-gif-logo-optimize.gif"
                  alt=""
                  width={300}
                  height={100}
                />
              </div>
            </div>
            <div>
              {/* <h1 className="text-6xl md:text-lg font-extrabold text-center my-16">
              WE ARE DELHI BASED
            </h1> */}
              <div className="flex flex-col md:flex-row justify-center gap-36 mt-16  text-black">
                <div>
                  <h1 className="text-4xl font-bold ">THE BRAND</h1>
                  <ul className="text-lg font-bold mt-4">
                    <li className="mb-2">
                      <Link href="/home-renovation-services">Renovation</Link>
                    </li>
                    <Link href="/virtual-interior-designing-meeting">
                      <li className="mb-2">Book a Virtual Meeting</li>
                    </Link>
                    <Link href="/about-best-interior-designers-architects">
                      <li> About Us</li>
                    </Link>
                    {/* <Link href="/largest-interior-designing-brand">
                      <li className="mb-2">The Team</li>
                    </Link> */}
                    <Link href="/collaborate-with-architects-interior-designers">
                      <li>Collaborate with Us</li>
                    </Link>
                    <Link href="/customer-reviews-interior-designs">
                      {' '}
                      <li className="mb-2">Reviews</li>
                    </Link>
                    <Link href="/interior-designing-plans-for-residences">
                      <li className="mb-2"> Our Packages </li>
                    </Link>
                    <Link href="/why-choose-the-best-interior-designers">
                      <li className="mb-2">Why Choose Us</li>
                    </Link>
                    <Link href="/join-the-largest-interior-designing-brand">
                      <li className="mb-2">Join As a Designer</li>
                    </Link>
                    <Link href="/book-with-top-interior-designers-architects">
                      <li className="mb-2">Book a Design Visit</li>
                    </Link>
                  </ul>
                </div>
                <div>
                  <h1 className="text-4xl font-bold">COLLABORATE</h1>
                  <ul className="text-lg font-bold mt-4">
                    <Link href="/join-us">
                      <li className="mb-2"> PARTNER WITH US</li>
                    </Link>
                    <Link href="/offer">
                      <li className="mb-2">REFER FOR REWARDS</li>
                    </Link>
                    <Link href="/join-us">
                      <li className="mb-2"> JOIN AS-A DESIGNER</li>
                    </Link>
                    <Link href="#">
                      <li className="mb-2">
                        FOR - ARCHITECTS & <br /> INTERIOR DESIGNERS
                      </li>
                    </Link>
                  </ul>
                </div>
                <div>
                  <h1 className="text-4xl font-bold">LETS CONNECT</h1>
                  <LetsConnectForm />
                </div>
              </div>

              <div
                className="flex flex-col md:flex-row justify-center text-black"
                style={{ gap: '110px', marginTop: '100px' }}
              >
                <div style={{ width: '300px' }}>
                  <h1 className="font-bold text-2xl uppercase">Contact Us</h1>
                  <div className="mt-8 text-sm">
                    <p className="font-extrabold mb-2 underline">
                      DESIGNING & OPERATIONS OFFICE -
                    </p>
                    <p className="mb-6">
                      25/42, A BLOCK, MIDDLE CIRCLE, CONNAUGHT PLACE, NEW DELHI
                      - 110001 NEAR RAJIV CHOWK METRO STN, GATE NO.8{' '}
                    </p>
                    <p className="font-extrabold mb-2 underline">
                      {' '}
                      CORPORATE INDUSTRIAL UNIT -
                    </p>
                    <p className="mb-6">
                      G - 984, NARELA DSIIDC INDUSTRIAL AREA, NEW DELHI - 110040
                    </p>
                    <p className="font-extrabold mb-2 underline">
                      MOBILE PHONE NUMBER -
                    </p>
                    <p className="mb-6">
                      0-9899264978 / 0-9582827928/ 0-9899239097
                    </p>
                    <p className="font-extrabold mb-2 underline">
                      LANDLINE NUMBER -
                    </p>
                    <p className="mb-6">01144127897</p>
                    <p className="font-extrabold mb-2 underline">EMAIL -</p>
                    <p className="mb-6">ENQUIRY@DESIGNINDIANKITCHEN.COM</p>
                    <p className="font-extrabold mb-2 underline">TIMING -</p>
                    <p className="mb-6">
                      MONDAY - SATURDAY:
                      <br /> 10:30 AM - 7:30 PM <br />
                      SUNDAY:
                      <br /> 11:00 AM - 7:00 PM ONLY FOR SITE VISITS
                    </p>
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-2xl">OTHER BUSINESS SITES</h1>
                  <ul className="mt-8 text-sm">
                    <li className="mb-4 font-bold">
                      <a
                        href="https://designindiankitchen.com/"
                        target="_blank"
                      >
                        DESIGN INDIAN KITCHEN
                      </a>
                    </li>
                    <li className="mb-4 font-bold">
                      <a
                        href="https://designindianwardrobe.com/"
                        target="_blank"
                      >
                        DESIGN INDIAN WARDROBE
                      </a>
                    </li>
                    <li className="mb-4 font-bold">
                      <a
                        href="https://modularkitchenindelhi.com/"
                        target="_blank"
                      >
                        MODULAR KITCHEN IN DELHI
                      </a>
                    </li>
                    <li className="mb-4 font-bold">
                      <a
                        href="https://modular-kitchen-gurgaon.com/"
                        target="_blank"
                      >
                        MODULAR KITCHEN IN GURGAON
                      </a>
                    </li>
                    {/* <li className="mb-4 font-bold">
                      <a>DESIGN INDIAN HOMES</a>
                    </li> */}
                    <li className="mb-4 font-bold">
                      <a
                        href="https://modularkitcheninnoida.com/"
                        target="_blank"
                      >
                        MODULAR KITCHEN IN NOIDA
                      </a>
                    </li>
                    <li className="mb-4 font-bold">
                      <a href="https://thedesignerlounge.com/" target="_blank">
                        THE DESIGNER LOUNGE
                      </a>
                    </li>
                    <li className="mb-4 font-bold">
                      <a href="https://devotionalindia.com/" target="_blank">
                        DEVOTIONAL INDIA
                      </a>
                    </li>
                    <li className="mb-4 font-bold">
                      <a href="https://tallysolution.net/">TALLY SOLUTION</a>
                    </li>
                  </ul>
                </div>
                <Bloomflower/>
                <div>
                  <h1 className="font-bold text-2xl">CHECK US OUT</h1>
                  <ul className="mt-8 text-sm">
                    <li className="mb-4 font-bold">
                      <Link href="/customer-reviews-interior-designs">
                        CUSTOMER REVIEWS
                      </Link>
                    </li>
                    <li className="mb-4 font-bold">
                      {/* <a>THE MODULAR PROCESS</a> */}
                    </li>
                    <li className="mb-4 font-bold">
                      <Link href="/book-a-interior-design-visit">
                        REQUEST A BROCHURE
                      </Link>
                    </li>
                    <li className="mb-4 font-bold">
                      <Link href="/book-a-interior-design-visit">
                        BOOK A VISIT TODAY
                      </Link>
                    </li>
                    <li className="mb-4 font-bold">
                      {/* <a>CORPORATE PRESENCE OF OUR BRAND</a> */}
                    </li>
                    <li className="mb-4 font-bold">
                      <Link href="/interior-designing-estimates-pricing">
                        GET QUOTES
                      </Link>
                    </li>
                  </ul>

                  <div className="flex">
                    <div>
                      <Time />
                    </div>
                    <div>
                      <ul>
                        <li className="mb-2 font-bold">WORK</li>
                        <li className="mb-2 font-bold">
                          <Link href="/about-best-interior-designers-architects">
                            {' '}
                            ABOUT{' '}
                          </Link>
                        </li>
                        <li className="mb-2 font-bold">CAREERS</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" pt-1 md:p-4 text-black">
              <hr className="flex justify-center h-2 w-11/12 border-1 border-black ml-4 md:ml-14" />
            </div>
          </div>

          <div className="location mx-4 sm:mx-12 my-16">
            <LocationsTabs />
          </div>

          <div className="w-full text-center text-black text-sm  py-4 bg-white mb-16 sm:mb-0">
            <p>
              DESIGN INDIAN HOMES | ALL RIGHTS RESERVED 2024-25 CRAFTED WITH
              LOVE BY IN HOUSE BRAND -{' '}
              <a
                href="https://www.designerlounge.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 font-bold underline"
              >
                THE DESIGNER LOUNGE
              </a>{' '}
              <br />{' '}
              <span className="text-blue-500 underline">
                <Link href="/privacy">PRIVACY</Link>
              </span>{' '}
              |{' '}
              <span className="text-blue-500 underline">
                <Link href="/privacy#legal">LEGAL</Link>
              </span>{' '}
              | <span className="text-blue-500 underline">SITEMAP</span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
