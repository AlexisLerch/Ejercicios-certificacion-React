import React, { useState, useEffect } from 'react';
import './App.css';
import { FaTwitter, FaQuoteLeft } from 'react-icons/fa';

const quotes = [
  {
    text: "El único modo de hacer un gran trabajo es amar lo que haces",
    author: "Steve Jobs"
  },
  {
    text: "No tengas miedo de renunciar a lo bueno para ir por lo grandioso",
    author: "John D. Rockefeller"
  },
  {
    text: "La creatividad es la inteligencia divirtiéndose",
    author: "Albert Einstein"
  },
  {
    text: "Hazlo con pasión o no lo hagas",
    author: "Rosa Luxemburgo"
  }
];

function App() {
  const [currentQuote, setCurrentQuote] = useState({});

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  useEffect(() => {
    setCurrentQuote(getRandomQuote());
  }, []);

  const handleNewQuote = () => {
    let newQuote = getRandomQuote();
    while (newQuote.text === currentQuote.text) {
      newQuote = getRandomQuote(); // Evita repetir citas
    }
    setCurrentQuote(newQuote);
  };

  const tweetUrl = `https://twitter.com/intent/tweet?text="${encodeURIComponent(
    currentQuote.text || ''
  )}" - ${encodeURIComponent(currentQuote.author || '')}`;

  return (
    <div className="app-container">
      <div id="quote-box" className="quote-box">
        <div className="quote-content">
          <FaQuoteLeft className="quote-icon" />
          <p id="text" className="quote-text">
            {currentQuote.text || ''}
          </p>
          <p id="author" className="quote-author">
            - {currentQuote.author || ''}
          </p>
        </div>
        <div className="quote-actions">
          <a
            id="tweet-quote"
            href={tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="tweet-button"
            title="¡Tuitea esta cita!"
          >
            <FaTwitter /> Tweet
          </a>
          <button
            id="new-quote"
            onClick={handleNewQuote}
            className="new-quote-button"
          >
            Nueva Cita
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;