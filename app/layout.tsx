import React from 'react';
import './globals.css';
import { Roboto } from '@next/font/google';
import Header from 'widgets/Header/Header';

interface RootLayoutInterface {
  children: React.ReactNode;
}

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['cyrillic', 'latin'],
});

const RootLayout: React.FC<RootLayoutInterface> = ({ children }) => {
  return (
    <html lang="ru" className={roboto.className}>
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
