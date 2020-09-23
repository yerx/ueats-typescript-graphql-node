import React from 'react';
import '../styles/Home.module.css';
import Header from './Header';

export default function Home(): JSX.Element {
  return (
    <div className="home">
      <Header />
    </div>
  );
}
