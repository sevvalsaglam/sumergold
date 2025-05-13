import React, { useEffect, useState } from "react";
import '../assets/converter.css'

const GoldConverterComponent = () => {
  const [gram, setGram] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("TRY");
  const [result, setResult] = useState(null);
  const [exchangeRates, setExchangeRates] = useState({ USD: 0, EUR: 0 });
  const [loading, setLoading] = useState(true);
  const gramAltinFiyatiTL = 4010.60; // Güncel veriyle değiştirilebilir

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          "https://api.exchangerate.host/latest?base=TRY&symbols=USD,EUR"
        );
        const data = await response.json();
        setExchangeRates({
          USD: data.rates.USD,
          EUR: data.rates.EUR,
        });
        setLoading(false);
      } catch (error) {
        console.error("Kur verileri alınamadı:", error);
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  const handleConvert = () => {
    const parsedGram = parseFloat(gram.replace(",", "."));
    if (isNaN(parsedGram) || parsedGram <= 0) {
      alert("Lütfen geçerli bir gram değeri giriniz.");
      return;
    }

    let resultAmount = parsedGram * gramAltinFiyatiTL;

    if (targetCurrency === "USD") {
      resultAmount = resultAmount * exchangeRates.USD;
    } else if (targetCurrency === "EUR") {
      resultAmount = resultAmount * exchangeRates.EUR;
    }

    setResult(resultAmount);
  };

  return (
    <div className="converter-wrapper">
      <h2>Altın Gram Dönüştürücü</h2>

      {loading ? (
        <p>Yükleniyor...</p>
      ) : (
        <>
          <div className="input-group">
            <input
              type="text"
              placeholder="Gram altın miktarı"
              value={gram}
              onChange={(e) => setGram(e.target.value)}
            />
            <select
              value={targetCurrency}
              onChange={(e) => setTargetCurrency(e.target.value)}
            >
              <option value="TRY">TL</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <button onClick={handleConvert}>Hesapla</button>

          {result !== null && (
            <div className="result-box">
              Toplam Değer:{" "}
              <strong>
                {result.toLocaleString("tr-TR", {
                  style: "currency",
                  currency: targetCurrency,
                  maximumFractionDigits: 2,
                })}
              </strong>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GoldConverterComponent;
