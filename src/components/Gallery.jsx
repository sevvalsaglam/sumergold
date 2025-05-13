import React from 'react'
import '../assets/gallery.css';

const products = [
  { id: 1, image: '/images/product1.jpg', title: 'Altın Kolye' },
  { id: 2, image: '/images/product2.jpg', title: 'Pırlanta Yüzük' },
  { id: 3, image: '/images/product3.jpg', title: 'Özel Bilezik' },
  { id: 4, image: '/images/product4.jpg', title: 'Zümrüt Küpe' }
]

const Gallery = () => {
  return (
    <section className="gallery" id="products">
      <div className="container gallery-grid">
        {products.map(product => (
          <div className="gallery-item" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
