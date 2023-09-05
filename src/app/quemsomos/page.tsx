import EstrategiaLottie from '@/components/quemEstrategia/page';
import './quemSomos.css'

export default function QuemSomos() {
    return (
        <div className="quemSomosContainer">
            <div className='headerQuemSomos'>
                <h1>Quem Somos?</h1>
                <h2>Uma agência de marketing que, para cada desafio digital, temos a solução estratégica que impulsiona o crescimento do seu negócio.</h2>
                <EstrategiaLottie />
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#622b90" fillOpacity="1" d="M0,160L60,138.7C120,117,240,75,360,96C480,117,600,203,720,229.3C840,256,960,224,1080,186.7C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
            <div className='containerPurple' >
                <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus eius voluptatem temporibus iure nemo ad vel, in, odio, nesciunt quia eligendi eveniet cumque impedit! Odio voluptas animi minus similique!
                </h1>

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#622b90" fillOpacity="1" d="M0,160L60,138.7C120,117,240,75,360,96C480,117,600,203,720,229.3C840,256,960,224,1080,186.7C1200,149,1320,107,1380,85.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
            </div>
        </div>
    )
}