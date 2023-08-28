// components/LottieMkt.js
'use client'

import React from 'react';
import LottieAnimation from 'react-lottie';
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
      suppressHydrationWarning:true
    },
  };

  return (
    <div className="lottieMkt">
      <LottieAnimation options={defaultOptions} />
    </div>
  );
};

export default LottieMkt;
