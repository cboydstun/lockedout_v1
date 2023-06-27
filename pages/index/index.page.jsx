export { Page }

import React, { useState } from 'react'

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

import './index.page.css'

function Hero() {
  return (
    <div className='hero-component'>
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Your Trusted Local Locksmith</h1>
          <p className="hero-description">
            24/7 emergency lockout service. Fast, Reliable & Affordable.
          </p>
          <button className="hero-btn">
            Contact Now
          </button>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className='about-component'>
      <div className="about">
        <h2>About Us</h2>
        <p>
          We are a locally owned and operated locksmith service based in San Antonio, TX.
          With over a decade of experience, we specialize in residential, commercial, and
          automotive locksmith services. We take pride in providing fast, reliable, and
          affordable services to our community.
        </p>
        <p>
          Our team is available 24/7 to ensure your safety and security. Whether you're
          locked out of your car, home, or business, you can count on us to be there when
          you need us most.
        </p>
        <p>
          Our technicians are highly trained and equipped with the latest tools and
          technology to solve any lock and key problem. We are committed to providing the
          best service possible and ensuring your satisfaction.
        </p>
      </div>
    </div>
  )
}

function Services() {
  return (
    <div className='services-component'>
      <div className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Residential Locksmith</h3>
            <p>Home lockouts, lock changes, rekeying, and more.</p>
          </div>
          <div className="service-item">
            <h3>Commercial Locksmith</h3>
            <p>Office lockouts, master key systems, high-security locks, and more.</p>
          </div>
          <div className="service-item">
            <h3>Automotive Locksmith</h3>
            <p>Car lockouts, key replacements, ignition repair, and more.</p>
          </div>
          <div className="service-item">
            <h3>24/7 Emergency Service</h3>
            <p>We're available around the clock for your emergency locksmith needs.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Contact() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [serviceType, setServiceType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(`Phone number: ${phoneNumber}, Service Type: ${serviceType}`);
  };

  return (
    <div className='contact-component'>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Service Type</label>
          <select value={serviceType} onChange={e => setServiceType(e.target.value)} required>
            <option value="">--Please Choose--</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="automotive">Automotive</option>
            <option value="emergency">24/7 Emergency</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}


function Page(props) {
  return (
    <div className='home-page-component'>
      <Navigation />

      <Hero />

      <About />

      <Services />

      <Contact />

      <Footer />
    </div>
  )
}