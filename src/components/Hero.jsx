import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../assets/hero.css';

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power3.out'
    })
  }, [])

  return (
    <section className="hero">
      <div className="hero-content" ref={heroRef}>
        <h2>Özel Tasarım Takılar</h2>
        <p>Zarafetin adresi, Sümer Gold</p>
      </div>
    </section>
  )
}

export default Hero
