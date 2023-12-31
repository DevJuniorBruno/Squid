'use client'

import './message.css';
import {useEffect, useState} from 'react';
import LoadingAnimation from '@/components/animationLoading/page';

export default function Menssage(){

    const [showMessage, setShowMessage] = useState(false);

    const [classNone, setClassNone] = useState("")

    useEffect(() => {
        // Use setTimeout para atrasar a exibição do conteúdo por 5 segundos.

        
        
        const timer = setTimeout(() => {
          setShowMessage(true);
        }, 5000);

        const timerReset = setTimeout(() => {
          setShowMessage(false);
        }, 20000);

        const timerReload = setTimeout(() => {
          setShowMessage(true);
        }, 25000);
        
    
        // Certifique-se de limpar o timer para evitar vazamentos de memória.
        return () => clearTimeout(timer);
      }, []);

      return (
        <div>
          {showMessage ? (
             <div className={`containerMessage ${classNone} `}  >


             <h1>
                 Quer que  seu negócio aumente o faturamento através da nossa estratégia ?
                 Entre em contato e tire suas duvidas, teremos o maior prazer em lhe atender!
             </h1>
              <button className='buttonClose' onClick={()=>setClassNone("classNone")} >
                x
              </button>
 
         </div>
          ) : (
            <LoadingAnimation/>
          )}
        </div>
      );

}