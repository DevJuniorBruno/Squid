// components/FacebookPixel.tsx
import { useEffect } from 'react';
import 'facebookPixel.css'

const FacebookPixel = () => {
  useEffect(() => {
    // Crie um script element para carregar o código do Pixel do Facebook
    const script = document.createElement('script');
    script.innerHTML = `
   
    
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1537857630318161');
    fbq('track', 'PageView');
    `;
    
    <noscript><img className='facebookNoscript'
    src="https://www.facebook.com/tr?id=1537857630318161&ev=PageView&noscript=1"
    /></noscript>

    // Adicione o script à cabeça (head) do documento
    document.head.appendChild(script);

    // Certifique-se de que o código do Pixel seja executado apenas uma vez
    script.innerHTML = '';
  }, []);

  return null;
};

export default FacebookPixel;
