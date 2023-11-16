// components/FacebookPixel.tsx
import { useEffect } from 'react';

const GooglePixel = () => {
  useEffect(() => {
    // Crie um script element para carregar o código do Pixel do Facebook
    const script = document.createElement('script');

    <script  async src="https://www.googletagmanager.com/gtag/js?id=AW-11413970221"></script>

    script.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11413970221');

    `;

    // Adicione o script à cabeça (head) do documento
    document.head.appendChild(script);

    // Certifique-se de que o código do Pixel seja executado apenas uma vez
    script.innerHTML = '';
  }, []);

  return null;
};

export default GooglePixel;
