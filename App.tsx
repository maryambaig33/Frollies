import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { DreamFlavor } from './components/DreamFlavor';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Products />
        <DreamFlavor />
      </main>
      <Footer />
    </div>
  );
}

export default App;