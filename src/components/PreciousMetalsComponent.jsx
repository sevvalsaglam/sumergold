import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../assets/preciousmetals.css";

const PreciousMetalsComponent = () => {
  const [metals, setMetals] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `https://metals-api.com/api/latest?access_key=eca93128ef3b0870f936b71a5662481f&base=USD`;

    axios.get(apiUrl)
      .then(response => {
        setMetals(response.data.rates);
        setLoading(false);
      })
      .catch(error => {
        console.error("Altın verisi alınırken hata:", error);
        setLoading(false);
      });
  }, []);

  const formatTL = (value) => value.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const formatUSD = (value) => value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  if (loading) {
    return <div className="loading">Yükleniyor...</div>;
  }

  const xau = metals.XAU || 0;

  // Hesaplamalar
  const gramBuy = xau * 58.3 * 19.5;
  const gramSell = xau * 58.3 * 19.7;
  const gramChange = -3.04;

  const quarterBuy = xau * 1.75 * 19.5;
  const quarterSell = xau * 1.75 * 19.7;
  const quarterChange = -2.10;

  const ounceBuy = xau;
  const ounceSell = xau * 1.01;
  const ounceChange = -2.85;

  const renderChange = (change) => (
    <span className={`change ${change < 0 ? 'down' : 'up'}`}>
      {change < 0 ? '▼' : '▲'} {Math.abs(change).toFixed(2)}%
    </span>
  );

  return (
    <div className="precious-metals-container">
      <h2>Altın Fiyatları</h2>
      <div className="cards-container">
        {/* Gram Altın */}
        <div className="metal-card">
          <div className="card-header">
            <span className="metal-title">ALTIN (TL/GR)</span>
            {renderChange(gramChange)}
          </div>
          <div className="price-row">
            <span className="label">ALIŞ(TL)</span>
            <span className="value">₺{formatTL(gramBuy)}</span>
          </div>
          <div className="price-row">
            <span className="label">SATIŞ(TL)</span>
            <span className="value">₺{formatTL(gramSell)}</span>
          </div>
        </div>

        {/* Çeyrek Altın */}
        <div className="metal-card">
          <div className="card-header">
            <span className="metal-title">Çeyrek Altın</span>
            {renderChange(quarterChange)}
          </div>
          <div className="price-row">
            <span className="label">ALIŞ(TL)</span>
            <span className="value">₺{formatTL(quarterBuy)}</span>
          </div>
          <div className="price-row">
            <span className="label">SATIŞ(TL)</span>
            <span className="value">₺{formatTL(quarterSell)}</span>
          </div>
        </div>

        {/* Ons Altın */}
        <div className="metal-card">
          <div className="card-header">
            <span className="metal-title">Altın (ONS)</span>
            {renderChange(ounceChange)}
          </div>
          <div className="price-row">
            <span className="label">ALIŞ($)</span>
            <span className="value">${formatUSD(ounceBuy)}</span>
          </div>
          <div className="price-row">
            <span className="label">SATIŞ($)</span>
            <span className="value">${formatUSD(ounceSell)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreciousMetalsComponent;
