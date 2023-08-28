import React, { useState, useEffect } from 'react';
import { TypeWriter } from 'react-typewriter-effect';

function AlternatingTypewriter() {
  const [currentWord, setCurrentWord] = useState('aqui');
  const words = ['aqui', 'agora'];
  const intervalTime = 2000; // Intervalo de 2 segundos

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => (prevWord === 'aqui' ? 'agora' : 'aqui'));
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <TypeWriter typing={1}>
      {currentWord}
    </TypeWriter>
  );
}

export default AlternatingTypewriter;
