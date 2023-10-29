'use client'

import './footer.css';
import Image from 'next/image';
import SquidLogo from '../../../public/justSquid.png';

export default function Footer(){
    return(
        <footer>
            <div className='footerTopContainer'>

                <div className='footerLft' >
                    <h2>
                        Oque Fazemos ?
                    </h2>
                    <p>Produção de Websites</p>
                    <p>SEO</p>
                    <p>Social Media</p>
                    <p>Tráfego Pago (ADS)</p>
                    <p>Landing Pages</p>
                </div>

                <div className='footerCenter'>
                    <Image
                    alt='Squid Digital Solutions'
                        src={SquidLogo}
                        width={150}
                        height={150}
                        className="logoSquid"
                    />

                    <h3>Venha Crescer Com a Gente !</h3>
                </div>

                <div className='footerRgt' >
                    <h2>Nosso Contato :</h2>
                    <p>(11) 98611-7035</p>
                    <p>squidsolutions@gmail.com</p>
                    <p>Segunda a sexta das 09h ás 18h</p>
                    <p>Sábado das 09h ás 12h</p>
                </div>
            </div>

            <div className='footerBottom'>
                <p>@2023 Squid Digital Solutions. Todos os direitos reservados</p>
            </div>
        </footer>
    )
}