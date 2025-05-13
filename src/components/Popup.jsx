import React, { useState, useEffect } from 'react'
import '../assets/popup.css'

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true)
    }, 2000)
  }, [])

  if (!showPopup) return null

  return (
    <div className="popup-overlay" onClick={() => setShowPopup(false)}>
      <div className="popup-content">
        <h3>Yeni Koleksiyon Yayında!</h3>
        <p>Özel tasarım ürünlerimize göz atın.</p>
        <button onClick={() => setShowPopup(false)}>Kapat</button>
      </div>
    </div>
  )
}

export default Popup
