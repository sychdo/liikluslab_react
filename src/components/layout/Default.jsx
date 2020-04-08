import React from 'react';
import Header from './../shared/Header';
import Footer from './../shared/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
