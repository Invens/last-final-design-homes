import dynamic from 'next/dynamic';

const Omsairam = dynamic(() => import('../components/Navbar/Omsairam'));
const Header = dynamic(() => import('../components/Navbar/Header'));
const Collection = dynamic(() => import('../components/Collection/page'), { ssr: false });
const ImageGrid = dynamic(() => import('../components/ImageGrid/page'), { ssr: false });
const Display = dynamic(() => import('../components/Display/page'), { ssr: false });
const Stepper = dynamic(() => import('../components/Stepper/page'), { ssr: false });
const Brands = dynamic(() => import('../components/Brands/page'), { ssr: false });
const TabsSection = dynamic(() => import('../components/TabsSection/page'), { ssr: false });
const EndToEndImageGrid = dynamic(() => import('../components/EndToEndImageGrid/page'), { ssr: false });
const FAQ = dynamic(() => import('../components/FAQ/page'), { ssr: false });
const MyForm = dynamic(() => import('../components/MyForm'), { ssr: false });
const PostFooter = dynamic(() => import('../components/PostFooter/page'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer/Footer'), { ssr: false });
const ColorSwitch = dynamic(() => import('../components/ColorSwitch/page'), { ssr: false });

import '../style/hero.css';
const Hero = dynamic(() => import('../components/Collection/Hero'));

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
      <Hero/>
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
