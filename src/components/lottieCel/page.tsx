// components/LottieCel.js
'use client'

import React from 'react';
import Lottie from 'react-lottie';
import celMkt from '../../../public/celMkt.json'; 
import { useMediaQuery } from 'react-responsive';
import './lottieCel.css';

// Substitua 'celMkt' pelo nome do seu arquivo JSON

 const LottieCel = () => {
  const isMobile = useMediaQuery({ maxDeviceWidth: 970 });

  if (isMobile) {
    return null; // Não renderiza nada se for um dispositivo móvel
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: celMkt,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className='lottieCel'>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default LottieCel;
