// components/LottieMkt.js
'use client'

import React from 'react';
import LottieAnimation from 'react-lottie';
import loading from '../../../public/loading.json'; 
import './loading.css';
// Substitua 'marketing' pelo nome do seu arquivo JSON

const LoadingAnimation= () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      suppressHydrationWarning:true
    },
  };

  return (
    <div className="loadingAnimation">
      <LottieAnimation options={defaultOptions} />
    </div>
  );
};

export default LoadingAnimation;
