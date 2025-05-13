import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../assets/borsecurrency.css";

const BorsaComponent = () => {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API URL ve API Key
    const apiUrl = `https://v6.exchangerate-api.com/v6/ae41fb77d76ed508d1b2e5f5/latest/USD`;

    axios.get(apiUrl)
      .then(response => {
        setCurrencies(response.data.conversion_rates);  // Döviz verisini almak
        setLoading(false);  // Yükleniyor durumunu kaldırmak
      })
      .catch(error => {
        console.error("Döviz verisi alınırken bir hata oluştu:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Yükleniyor...</div>;  // Veriler yüklenene kadar gösterilecek mesaj
  }

  // En sık kullanılan 20 döviz
  const topCurrencies = [
    { symbol: 'USD', name: 'Amerikan Doları', rate: currencies.USD },
    { symbol: 'EUR', name: 'Euro', rate: currencies.EUR },
    { symbol: 'GBP', name: 'İngiliz Sterlini', rate: currencies.GBP },
    { symbol: 'CHF', name: 'İsviçre Frangı', rate: currencies.CHF },
    { symbol: 'CAD', name: 'Kanada Doları', rate: currencies.CAD },
    { symbol: 'AUD', name: 'Avustralya Doları', rate: currencies.AUD },
    { symbol: 'JPY', name: 'Japon Yeni', rate: currencies.JPY },
    { symbol: 'CNY', name: 'Çin Yuanı', rate: currencies.CNY },
    { symbol: 'INR', name: 'Hindistan Rupisi', rate: currencies.INR },
    { symbol: 'BRL', name: 'Brezilya Reali', rate: currencies.BRL },
    { symbol: 'ZAR', name: 'Güney Afrika Randı', rate: currencies.ZAR },
    { symbol: 'TRY', name: 'Türk Lirası', rate: currencies.TRY },
    { symbol: 'MXN', name: 'Meksika Pesosu', rate: currencies.MXN },
    { symbol: 'HKD', name: 'Hong Kong Doları', rate: currencies.HKD },
    { symbol: 'SEK', name: 'İsveç Kronu', rate: currencies.SEK },
    { symbol: 'NOK', name: 'Norveç Kronu', rate: currencies.NOK },
    { symbol: 'DKK', name: 'Danimarka Kronu', rate: currencies.DKK },
    { symbol: 'SGD', name: 'Singapur Doları', rate: currencies.SGD },
    { symbol: 'KRW', name: 'Güney Kore Wonu', rate: currencies.KRW },
    { symbol: 'SAR', name: 'Suudi Riyali', rate: currencies.SAR },
  ];

  return (
    <div className="borsa-container">
      <h2>Borsa ve Döviz Kurları</h2>
      <div className="currency-table">
        <div className="currency-column">
          {topCurrencies.slice(0, 10).map((currency, index) => (
            <div key={currency.symbol} className="currency-row">
              <span className="currency-name">{currency.name}</span>
              <div className="currency-rate">
                <span>{currency.rate}</span>
                {/* Renkli ok ekleyelim */}
                {currency.rate > 1 ? (
                  <span className="up-arrow">↑</span> // Artış
                ) : (
                  <span className="down-arrow">↓</span> // Azalış
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="currency-column">
          {topCurrencies.slice(10).map((currency, index) => (
            <div key={currency.symbol} className="currency-row">
              <span className="currency-name">{currency.name}</span>
              <div className="currency-rate">
                <span>{currency.rate}</span>
                {/* Renkli ok ekleyelim */}
                {currency.rate > 1 ? (
                  <span className="up-arrow">↑</span> // Artış
                ) : (
                  <span className="down-arrow">↓</span> // Azalış
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BorsaComponent;
