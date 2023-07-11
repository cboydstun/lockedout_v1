export { Page }

import React, { useState } from 'react'

import './index.page.css'

function Hero() {
  return (
    <div className='hero-component'>
      <div className="hero-image">
        <img src="https://www.actionlockdoc.com/wp-content/uploads/2021/01/car-locksmith-services.jpg" alt="Locksmith" width={"100%"} />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">San Antonio Locked Out</h1>
        <h3 className="hero-subtitle">Locksmith San Antonio</h3>
        <p className="hero-description">
          Providing you with a quality locksmith and security solutions for your auto, home, business, or emergency needs.

          A full service, one-stop, 24/7 locksmith service in the greater SA area.

          No project too big or complex, or too small for us.

          Call or request an estimate now!
        </p>
        <button className="contact-btn">
          <i className="fas fa-envelope"></i>
          Contact Now
        </button>
        <button className="call-btn">
          <i className="fas fa-phone-alt"></i>
          <a href="tel:512-210-0194">Call Now 512-210-0194</a>
        </button>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className='about-component' id='about'>
      <h2>About Us</h2>
      <p>
        Locksmith San Antonio provides professional locksmith services and security solutions for San Antonio, TX, and surrounding areas. We provide locksmith services, and are available, 7 days a week in order to be your locksmith in San Antonio. We are proud of our quality auto, home, and business locksmith customer service. In addition, we are available for all your Emergency Locksmith needs: car lockout, house lockout, lock changes, and more.
      </p>
      <p>
        On the commercial front, we provide many services other locksmith companies can not. Examples of such services will include access control systems, tele-entry systems, driveway gates for apartment complexes, and more. When you contact us you will get a fast response to all your locksmith needs in and around San Antonio. In addition, we also specialize in emergency solutions!
      </p>
      <p>
        Our experienced locksmiths have good knowledge and insightful answers that will meet your locksmith needs while offering the best pricing. We also guarantee all of our locksmith work and products!
      </p>
    </div>
  )
}

function Services() {
  return (
    <div className='services-component' id='services'>
      <h2>Our Services</h2>
      <div className="service-list">
        <div className="service-item">
          <h3>Residential Locksmith</h3>

          <p>You can count on Locksmith San Antonio for residential Installation, repair and replacement of locks. </p>

          <p>Also, Locksmith San Antonio can re-key your master and other locks, replace locks and keys for cabinets, access control systems and key-less entry. </p>

          <p>In addition, Locksmith San Antonio provides safe and security expert service, and installation of electronic locking mechanisms, meeting all types of fire exit doors and services.</p>

          <p>Call us now at 512-210-0194 to speak with a San Antonio locksmith professional regarding your residential locksmith needs.</p>

          <p>Looking for a nationwide locksmith service? A locksmith is available in your area 7 days a week to provide you with certified security options. </p>

          <p>We also specialize in lockouts, lock changes, key making, replacement keys, and other standard services. </p>

          <p>Our licensed team also handles high security locks and other commercial-level locksmith services.</p>
        </div>
        <div className="service-item">
          <h3>Commercial Locksmith</h3>

          <p>Our Texas-licensed and professional locksmith San Antonio are masters at providing top-level security for businesses in the San Antonio region.</p>

          <p>At Locksmith San Antonio, we handle offices, retail businesses and commercial enterprises of all sizes.</p>

          <p>We also install and maintain locks and ignitions for commercial fleet vehicles, and we are available for any emergency lock situations.</p>

          <p>Locksmith San Antonio installs and maintains telephone-entry and access control systems, programs proximity cards and proximity key fobs.</p>

          <p>We do fresh installations, or we can upgrade your old access control system and use your existing wiring in order to bring the price down.</p>

          <p>In addition, Locksmith San Antonio installs and maintains apartment complexes entry driveway gates and gate operators, including the Telephone Entry / Intercom devices.</p>

          <p>It is important that you understand what proper security and access controls will do for your comfort and peace of mind, when it comes to your business.</p>

          <p>Your business is one of the biggest investments and most important things in your life.</p>
        </div>
        <div className="service-item">
          <h3>Automotive Locksmith</h3>

          <p>S.A. Locksmith & Security provides professional auto locksmith services in San Antonio.</p>

          <p>Our services include car lockouts, lock changes, new car locks, auto ignition keys and other auto security requirements!</p>

          <p>Locksmith San Antonio is offering emergency repair lock and key service, car lockout service, change car ignition or car key replacement, urgent lock replacements and more.</p>

          <p>Also, we can meet you at your location, throughout the San Antonio area, in less than 20 minutes.</p>

          <p>Most of all, we have experience in lock repairs, replacements and service, the protection of high security, electronic lock installations, sales and service.</p>

          <p>We also re-keys and master key systems, care for safes and vaults, insurance sales and deposit boxes, jewelry, and mailbox lock replacements!</p>
        </div>
        <div className="service-item">
          <h3>24/7 Emergency Service</h3>

          <p>Emergency locksmith San Antonio, TX.</p>

          <p>Available for all your Emergency Locksmith needs: car lockout, house lockout, lock changes, and more.</p>

          <p>When contacting us you will have a fast response to the needs of all locks around San Antonio.</p>

          <p>We specialize in emergency solutions and Home & Business Security solutions.</p>

          <p>“Quick and Reliable Emergency Locksmith Service.”</p>

          <p>Finally, locksmith San Antonio is here for lockouts, lock changes, high-security locks, car locks, auto ignition keys.</p>

          <p>As well as house and apartment locks and deadbolts, business CCTV surveillance, and all other home, car, and business security requirements!</p>
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
    <div className='contact-component' id='contact'>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <div className="form-group">
          <input
            type="tel"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
            required
          />
        </div>
        <div className="form-group">
          <select
            value={serviceType}
            onChange={e => setServiceType(e.target.value)}
            required
          >
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
    <div className='homepage-component'>
      <Hero />

      <About />

      <Services />

      <Contact />
    </div>
  )
}