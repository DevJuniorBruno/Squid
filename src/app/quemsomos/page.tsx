import EstrategiaLottie from '@/components/quemEstrategia/page';
import './quemSomos.css'
import FacebookPixel from '../../components/FacebookPixel/FacebookPixel';

export default function QuemSomos() {
    return (
        <div className="quemSomosContainer">
            <div className='headerQuemSomos'>
                <h1>Quem Somos?</h1>
                <h2>Uma agência de marketing que, para cada desafio digital, temos a solução estratégica que impulsiona o crescimento do seu negócio.</h2>
                <EstrategiaLottie />
            </div>
            <FacebookPixel/>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#622b90" fillOpacity="1" d="M0,160L60,138.7C120,117,240,75,360,96C480,117,600,203,720,229.3C840,256,960,224,1080,186.7C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
                <div className='containerPurple' >
                    <h1>Como a SQUID vai

                       <span className="colorYellow" > MULTIPLICAR AS SUAS VENDAS </span>

                        em 6 PASSOS?</h1>

                    <div className='cardEstrategia' >
                        <h1>Reunião Inicial</h1>
                        <p>para compreender o seu negócio, pontos fortes e fracos, possibilidades e desafios, bem como seus objetivos e metas.</p>
                    </div>

                    <div className='cardEstrategia' >
                        <h1>Levantamento e Análise</h1>
                        <p>
                        do mercado e dos competidores.
                        </p>
                    </div>

                    <div className='cardEstrategia' >
                        <h1>Elaboração</h1>
                        <p>da estratégia mais eficaz, alinhada à saúde financeira e operacional da sua empresa, com o propósito de satisfazer as necessidades e expectativas.</p>
                    </div>

                    <div className='cardEstrategia' >
                        <h1>Reunião Conclusiva</h1>
                        <p>para ajuste e validação por parte do cliente.</p>
                    </div>

                    <div className='cardEstrategia' >
                        <h1>Trabalho Prático</h1>
                        <p>Agora é o momento de implementar o plano.</p>
                    </div>

                    <div className='cardEstrategia' >
                        <h1>Mensuração</h1>
                        <p>dos resultados e do faturamento, com análise constante para identificar oportunidades de otimização e melhorias.</p>
                    </div>


                        <p >
                            Novos LEADS todos os dias !
                        </p>
                    
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#622b90" fillOpacity="1" d="M0,160L60,138.7C120,117,240,75,360,96C480,117,600,203,720,229.3C840,256,960,224,1080,186.7C1200,149,1320,107,1380,85.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                </svg>
            </div>
        </div>
    )
}