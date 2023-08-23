// components/LottieMkt.js
'use client'

import React from 'react';
import Lottie from 'react-lottie';
import marketing from '../../../public/marketing.json'; 
import './lottieMkt.css';
// Substitua 'marketing' pelo nome do seu arquivo JSON

const LottieMkt = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: marketing,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="lottieMkt">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default LottieMkt;
