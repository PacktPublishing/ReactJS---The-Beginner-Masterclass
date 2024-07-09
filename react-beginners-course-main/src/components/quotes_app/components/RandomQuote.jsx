/** @format */
import React, { useState } from 'react';

function RandomQuote({ quote, color, onChangeQuote}) {
  
  return (
    <div className="container mt-2">
      <div className={`card text-white ${color}`}>
        <div className="card-body">
          <h5 className="card-title">Random Quote</h5>
          <p className="card-text">"{quote.content}"</p>
          <footer className="blockquote-footer text-white">
            {quote.author}
          </footer>
        </div>
        <button className="btn btn-primary mt-3" onClick={onChangeQuote}>
          Get random quote
        </button>
      </div>
    </div>
  );
}
export default RandomQuote;

/*

This goes in the App.jsx file as part of lifting state up


function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
    setColor(getRandomColor());
  }

  function getRandomColor() {
    const colors = [
      'bg-primary',
      'bg-secondary',
      'bg-success',
      'bg-danger',
      'bg-warning',
      'bg-info',
      //   'bg-light',
      'bg-dark',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

const [quote, setQuote] = useState('');
  const [color, setColor] = useState('bg-dark');

  const quotes = [
    {
      author: 'Albert Einstein',
      content:
        'Life is like riding a bicycle. To keep your balance, you must keep moving.',
    },
    {
      author: 'Isaac Newton',
      content:
        'If I have seen further it is by standing on the shoulders of Giants.',
    },
    {
      author: 'Marie Curie',
      content: 'Be less curious about people and more curious about ideas.',
    },
    {
      author: 'Leonardo da Vinci',
      content: 'Learning never exhausts the mind.',
    },
    {
      author: 'Aristotle',
      content: "The more you know, the more you realize you don't know.",
    },
  ];
*/
