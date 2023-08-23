'use client'

import './analise.css';


export default function Analise() {
    return (
        <div className='componentAnalise' >
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
                        <button className='lft' >Análise Gratuita</button>
                    </div>

                    <div className="buttonsDiv" >
                        <button className='rgt' >Entrar em Contato</button>
                    </div>

                </div>
            </div>
        </div>

    )
}