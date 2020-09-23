import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Home from './Home';

function MyApp({ Component, pageProps }:
AppProps) {
  return (
    <div>
      <Home />
    </div>
  );
}

export default MyApp;
