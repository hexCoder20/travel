import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';

import './App.css'

function App() {
const destinations = [
    {
      id: 1,
      country: "Bali",
      desc: "Experience tropical paradise and ancient temples.",
      price: "$1,200",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      country: "Switzerland",
      desc: "Breathtaking alpine views and ski resorts.",
      price: "$2,500",
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      country: "Japan",
      desc: "Cherry blossoms, sushi, and futuristic cities.",
      price: "$1,800",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <>
    <Navbar />
    <Hero />
    <Destinations destinations={destinations} />
    <Contact />
    <Footer />
     </> 
  )
}

export default App
