import Image from 'next/image'
import dynamic from 'next/dynamic'
//import Omsairam from '../components/Navbar/Omsairam'
const Omsairam = dynamic(() => import('../components/Navbar/Omsairam'))
//import Header from '../components/Navbar/Header'
const Header = dynamic(() => import('../components/Navbar/Header'))
// import { BioRhyme } from 'next/font/google'
// import Hero from '../components/Hero/page'
//import Collection from '../components/Collection/page'

const Collection = dynamic(() => import('../components/Collection/page'))

// import ImageGrid from '../components/ImageGrid/page'
// import Display from '../components/Display/page'
// import Stepper from '../components/Stepper/page'
// import Brands from '../components/Brands/page'
// import TabsSection from '../components/TabsSection/page'
// import EndToEndImageGrid from '../components/EndToEndImageGrid/page'
// import FAQ from '../components/FAQ/page'
// import MyForm from '../components/MyForm'
// import PostFooter from '../components/PostFooter/page'
// import Footer from '../components/Footer/Footer'
const ImageGrid = dynamic(() => import('../components/ImageGrid/page'))
const Display = dynamic(() => import('../components/Display/page'))
const Stepper = dynamic(() => import('../components/Stepper/page'))
const Brands = dynamic(() => import('../components/Brands/page'))
const TabsSection = dynamic(() => import('../components/TabsSection/page'))
const EndToEndImageGrid = dynamic(() =>
  import('../components/EndToEndImageGrid/page')
)
const FAQ = dynamic(() => import('../components/FAQ/page'))
const MyForm = dynamic(() => import('../components/MyForm'))
const PostFooter = dynamic(() => import('../components/PostFooter/page'))
const Footer = dynamic(() => import('../components/Footer/Footer'))
const ColorSwitch = dynamic(() => import('../components/ColorSwitch/page'))
import '../style/hero.css'

// const bioRhyme = BioRhyme({
//   weight: '400',
//   subsets: ['latin'],
//   display: 'swap',
// })

export default function Home() {
  return (
    <main>
      <Omsairam />
      <Header />
      {/* <Hero/> */}
      <Collection />
      {/* <ColorSwitch /> */}
      <ImageGrid />
      <Brands />
      <Display />
      <Stepper />
      <TabsSection />
      <EndToEndImageGrid />
      <FAQ />
      <div className="bg-red-500 p-4 dark:text-white">
        <MyForm />
      </div>
      <PostFooter />
      <Footer />
    </main>
  )
}
