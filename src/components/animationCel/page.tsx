// components/LottieCel.js
'use client'

import React from 'react';
import Lottie from 'react-lottie';
import celMkt from '../../../public/celMkt.json'; 
import './lottieCel.css';

// Substitua 'celMkt' pelo nome do seu arquivo JSON

 const LottieCel = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: celMkt,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      suppressHydrationWarning:true
    },
  };

  return (
    <div className='lottieCel'>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default LottieCel;
