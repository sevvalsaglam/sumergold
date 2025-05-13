import React from 'react'
import '../assets/header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-wrapper">
          <img src="/images/sumergold-logo.png" alt="Sümer Gold Logo" className="logo-img first-logo" />
          <img src="/images/showroom-logo.png" alt="Showroom Logo" className="logo-img second-logo" />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#products">Ürünler</a></li>
            <li><a href="#about">Hakkımızda</a></li>
            <li><a href="#location">İletişim</a></li>
          </ul>
        </nav>
      </div>

      {/* İkonlar */}
      <div className="icon-bar">
        <div className="icon-bar-inner">
          <img src="/images/2.png" alt="Icon 2" />
          <img src="/images/4.png" alt="Icon 4" />
          <img src="/images/3.png" alt="Icon 3" />
          <img src="/images/1.png" alt="Icon 1" />
          <img src="/images/7.png" alt="Icon 7" />
          <img src="/images/5.png" alt="Icon 5" />
        </div>
      </div>

      {/* Video */}
      <div className="header-video">
        <video autoPlay muted loop playsInline>
          <source src="/images/15.mp4" type="video/mp4" />
          Tarayıcınız video etiketini desteklemiyor.
        </video>
      </div>
    </header>
  )
}

export default Header
