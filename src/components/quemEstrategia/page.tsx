// components/LottieCel.js
'use client'

import React from 'react';
import Lottie from 'react-lottie';
import quemSomos from '../../../public/estrategia.json'; 
import './quemEstrategia.css';

// Substitua 'celMkt' pelo nome do seu arquivo JSON

 const EstrategiaLottie = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: quemSomos,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      suppressHydrationWarning:true
    },
  };

  return (
    <div className='estrategiaLottie'>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default EstrategiaLottie;
