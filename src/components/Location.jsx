import React from 'react'
import '../assets/location.css'

const Location = () => {
  return (
    <section className="location" id="location">
      <div className="container">
        <h2>Adresimiz</h2>
        <img src="/images/banner-1.jpg" alt="Adres Görseli" />
        <a
          href="https://www.google.com/maps/place/S%C3%BCmer+Gold/@41.0084792,28.9604227,15z/data=!4m6!3m5!1s0x14cab9e563e0728b:0xfc533cb696ca4d73!8m2!3d41.0118328!4d28.9684083!16s%2Fg%2F11y50yg28p?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="location-button"
        >
          Google Maps ile Yol Tarifi
        </a>
      </div>
    </section>
  )
}

export default Location
