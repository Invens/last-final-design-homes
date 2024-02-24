'use client'
import { BioRhyme } from 'next/font/google'
import './globals.css'
import { Provider } from 'react-redux'
import { SpaceProvider } from './SpaceContext'
import { ThemeProvider } from './themeContext'
import store from '../components/redux/store'
import Script from 'next/script'
import Head from 'next/head'

const bioRhyme = BioRhyme({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Script strategy="lazyOnLoad" id="hotjar">
        {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3553114,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
      <body className={bioRhyme.className}>
        <ThemeProvider>
          <Provider store={store}>
            <SpaceProvider>{children}</SpaceProvider>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  )
}
