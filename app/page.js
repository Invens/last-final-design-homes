import dynamic from 'next/dynamic';

const Omsairam = dynamic(() => import('../components/Navbar/Omsairam'));
const Header = dynamic(() => import('../components/Navbar/Header'));
const Collection = dynamic(() => import('../components/Collection/page'));
const ImageGrid = dynamic(() => import('../components/ImageGrid/page'));
const Display = dynamic(() => import('../components/Display/page'));
const Stepper = dynamic(() => import('../components/Stepper/page'));
const Brands = dynamic(() => import('../components/Brands/page'));
const TabsSection = dynamic(() => import('../components/TabsSection/page'));
const EndToEndImageGrid = dynamic(() => import('../components/EndToEndImageGrid/page'));
const FAQ = dynamic(() => import('../components/FAQ/page'));
const MyForm = dynamic(() => import('../components/MyForm'));
const PostFooter = dynamic(() => import('../components/PostFooter/page'));
const Footer = dynamic(() => import('../components/Footer/Footer'));
const ColorSwitch = dynamic(() => import('../components/ColorSwitch/page'));

import '../style/hero.css';
const Hero = dynamic(() => import('../components/Collection/Hero'));

// const bioRhyme = BioRhyme({
//   weight: '400',
//   subsets: ['latin'],
//   display: 'swap',
// })

export default function Home() {
  return (
    <main style={{zIndex: '10'}}>
      <Omsairam />
      <Header />
      <div>

      <Hero/>
      </div>
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
