import './servicos.css';
import { SiGoogleads } from 'react-icons/si';
import { SiMeta } from 'react-icons/si';
import { FaGem } from 'react-icons/fa';
import { FaCogs } from 'react-icons/fa';
import { GiParachute } from 'react-icons/gi'
import { FaShareAlt } from 'react-icons/fa';

import LottieServices from '@/components/animationServices/page';

export default function Servicos(){
    return(
        <section className="containerServicos">
            <div className='headerServicos'>
                <h1>Serviços</h1>
                <p>
                Estamos sempre conectados ao mundo digital, buscando inovações para oferecer as melhores soluções ao seu empreendimento. Se você busca utilizar o marketing online para impulsionar seu site, está no lugar certo. Explore nossos principais serviços:
                </p>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#622b90" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className='cardsServicesContainer' >

                <div className='cardsServices' >
                    <SiGoogleads size={50} />
                    <h1>Google Ads</h1>
                    <p>Apareça para quem realmente precisa dos seu serviços ou produtos.</p>
                </div>
                
                <div className='cardsServices' >
                    <SiMeta size={50} />  
                        <h1>Facebook / Instagram Ads</h1>
                        <p>Alcance milhares de PESSOAS, conquiste CLIENTES.</p>
                </div>

                <div className='cardsServices' >
                   <FaCogs size={50}/>
                            <h1>Websites Personalizados</h1>
                            <p>Seu negócio em um site profissional, com o propósito em converter pessoas em clientes.</p>
                </div>

                <div className='cardsServices' >
                    <FaGem size={50}/>
                            <h1>Website Gold</h1>
                            <p>Produção de website rapido e moderno para quem procura por um melhor custo benefício</p>
                </div>

                <div className='cardsServices' >
                    <GiParachute size={50} /> 
                            <h1>Landing Page</h1>
                            <p>Tenha uma pagina de conversão de vendas para um determinado serviço ou produto.</p>
                </div>

                <div className='cardsServices' >
                    <FaShareAlt size={50} /> 
                            <h1>Gestão das Redes Sociais </h1>
                            <p>Envolve a administração estratégica e operacional das presenças online de uma empresa ou indivíduo nas redes sociais.</p>
                </div>
            </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#622b90" fillOpacity="1" d="M0,288L48,261.3C96,235,192,181,288,170.7C384,160,480,192,576,170.7C672,149,768,75,864,74.7C960,75,1056,149,1152,154.7C1248,160,1344,96,1392,64L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

                <div className="containerAnimation" >
                <p>Certamente, você deseja impulsionar seu negócio na internet. O marketing digital tem o poder de alavancar suas vendas. Aqui, na SQUID, entendemos suas aspirações.</p>
                <LottieServices/>

                </div>
        </section>
    )
}