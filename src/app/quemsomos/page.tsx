import './quemSomos.css';
import EstrategiaLottie from '@/components/quemEstrategia/page';

export default function QuemSomos(){
    return(
        <div className="quemSomosContainer">
            <div className='headerQuemSomos'>
                <h1>Quem Somos?</h1>
                <h2>Uma agência de marketing que, para cada desafio digital, temos a solução estratégica que impulsiona o crescimento do seu negócio.</h2>
            <EstrategiaLottie/> 
            </div>
        </div>
    )
}