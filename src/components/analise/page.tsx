'use client'

import './analise.css';
import Link from 'next/link';


export default function Analise() {
    return (
        <section className='componentAnalise' >
            <div className="containerAnalise">
                <h1>Receba uma análise gratuita</h1>
                <div className='analise' >
                    <p>
                        Receba uma avaliação gratuita na sua conta de Google Ads, Facebook Ads ou site.
                    </p>
                    <p>
                        Vamos fornecer orientações para alcançar o sucesso do seu empreendimento online.
                    </p>
                </div>
                <div className='buttonAnalise' >
                    
                    <div className="buttonsDiv">
                        <Link href="orcamento" >
                        <button className='lft' >Análise Gratuita</button>                        
                        </Link>
                    </div>

                    <div className="buttonsDiv" >
                        <Link href="https://api.whatsapp.com/send/?phone=5511963651434" target="_blank" >
                        </Link>
                        <button className='rgt' >Entrar em Contato</button>
                    </div>

                </div>
            </div>
        </section>

    )
}