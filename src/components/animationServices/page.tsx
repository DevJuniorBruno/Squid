// components/LottieCel.js
'use client'

import React from 'react';
import LottieAnimation from 'react-lottie';
import animationServices from '../../../public/services.json'; 
import './lottieServices.css';

// Substitua 'celMkt' pelo nome do seu arquivo JSON

 const LottieServices = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationServices,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      suppressHydrationWarning:true
    },
  };

  return (
    <div className='lottieServices'>
      <LottieAnimation options={defaultOptions} />
    </div>
  );
};

export default LottieServices;
