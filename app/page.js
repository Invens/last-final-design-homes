
import Image from 'next/image'
import Omsairam from '../components/Navbar/Omsairam'
import Header from '../components/Navbar/Header'
// import { BioRhyme } from 'next/font/google'
// import Hero from '../components/Hero/page'
import Collection from '../components/Collection/page'
import ImageGrid from '../components/ImageGrid/page'
import Display from '../components/Display/page'
import Stepper from '../components/Stepper/page'
import Brands from '../components/Brands/page'
import TabsSection from '../components/TabsSection/page'
import EndToEndImageGrid from '../components/EndToEndImageGrid/page'
import FAQ from '../components/FAQ/page'
import MyForm from '../components/MyForm'
import PostFooter from '../components/PostFooter/page'
import Footer from '../components/Footer/Footer'
import '../style/hero.css'
// const bioRhyme = BioRhyme({
//   weight: '400',
//   subsets: ['latin'],
//   display: 'swap',
// })

export default function Home() {
  return (
    <main >
      <Omsairam />
      <Header />
      {/* <Hero/> */}
      <Collection />
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
