"use client";
import { BioRhyme } from 'next/font/google'
import "./globals.css";
import { Provider } from 'react-redux';
import { SpaceProvider } from './SpaceContext'
import store from '../components/redux/store'

const bioRhyme = BioRhyme({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bioRhyme.className}>
      
      <Provider store={store}>
          <SpaceProvider>
            {children}
          </SpaceProvider>
        </Provider>
      </body>
    </html>
  );
}
