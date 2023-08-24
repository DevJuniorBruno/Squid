
import LottieCel from '@/components/lottieCel/page';
import LottieMkt from '@/components/lottieMkt/page';
import './home.css';


import { SiGoogleads } from 'react-icons/si';
import { BsMegaphoneFill } from 'react-icons/bs';
import { LuMonitorSmartphone } from 'react-icons/lu';

import Image from 'next/image'
import Strategy from '../../public/strategy.jpg';
import Confuse from '../../public/confuse.jpg';

export default function Home() {


  return (
    <main className="containerHome" >

      <div className='headerHome'>

        <div className='txtHeader' >
          <h1>
            O caminho para o sucesso começa aqui.
          </h1>
          <p>
            Alcance novos clientes e aumente sua receita.
          </p>
          <div className="btnHeader">
            <button className="eec" >Entre em contato</button>

            <button className="ns" >Nossos serviços</button>
          </div>

        </div>

        <LottieCel />
        
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280"><path fill="#622b90" fillOpacity="1" d="M0,256L80,229.3C160,203,320,149,480,144C640,139,800,181,960,186.7C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

      <div className="txtContainer">

        <div className="txt" >
          <h1>
            Transforme Sua Marca no Mundo Digital!
          </h1>
          <p>
            Somos uma agência ideal para a sua jornada no marketing digital. Oferecemos soluções de criação de sites personalizados e estratégias de tráfego pago que irão atrair mais clientes para o seu negócio. Nossa paixão é ver o seu sucesso crescer, e estamos aqui para guiá-lo em cada passo do caminho.
          </p>

        </div>
        <button className="qamv" >QUERO AUMENTAR MINHAS VENDAS</button>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280"><path fill="#622b90" fillOpacity="1" d="M0,256L80,229.3C160,203,320,149,480,144C640,139,800,181,960,186.7C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>

      <div className='mktInfosContainer' >

        <div className='mktInfos' >
          <LottieMkt />

          <div className='description' >
            <h1>
              Potencialize Seu Negócio com Nossa Agência de Marketing Digital!
            </h1>
            <p>
              Alcance o sucesso online com Google Ads, Instagram Ads e Facebook Ads. Aumente vendas e reconhecimento com estratégias de tráfego pago. Nossa equipe cria sites impressionantes que refletem sua essência. Confie em nós para impulsionar seus lucros e transformar sua presença online. Junte-se a nós nessa jornada de sucesso!
            </p>
          </div>
        </div>

        <div className='services'>

          <div className='service'>
            <SiGoogleads size={50} />
            <h1>Google Ads</h1>
            <div>
              --------------
            </div>
            <p>
              Não espere mais: conquiste a atenção da sua audiência-alvo e esteja presente quando eles mais precisarem de você.
            </p>
          </div>

          <div className='service'>
            <BsMegaphoneFill size={50} />
            <h1>Facebook e Instagram Ads</h1>
            <div>
              --------------
            </div>
            <p>
              Leve seus posts mais longe, conquiste uma audiência maior e faça sua marca ser notada por milhares de potenciais clientes!
            </p>
          </div>

          <div className='service'>
            <LuMonitorSmartphone size={50} />
            <h1>Websites Modernos</h1>
            <div>
              --------------
            </div>
            <p>
              Eleve a presença online da sua empresa com um site profissional que sabe como direcionar visitantes para o sucesso em vendas.
            </p>
          </div>

        </div>


        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#622b90" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,85.3C640,117,800,171,960,165.3C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <div className='mktExplicito' >
          <h1>
            Mas afinal, por que preciso de uma
            AGÊNCIA DE MARKETING?
          </h1>

          <div className='mktProblem' >
            <div>
              <h2>VOCÊ JÁ TEVE ALGUM DESSES <span className='red-word' >PROBLEMAS</span>?</h2>
              <p>
                Leads <span className='red-word' >Desqualificados</span> chegando no Funil;
              </p>
              <p>
                <span className='red-word' >Orçamentos</span> de<span className='red-word' >Mídia Mal Geridos</span>;
              </p>
              <p>
                <span className='red-word' >Poucas vendas</span> e <span className='red-word' >resultado</span>;
              </p>

            </div>

            <div>
              <Image
                alt='confuse people'
                src={Confuse}
                width={300}
                height={250}
                className='imgMkt'

              />
            </div>
          </div>

          <div className='mktStrategy' >

            <Image
              alt='strategy'
              src={Strategy}
              width={300}
              height={250}
              className='imgMkt'
            />

            <div className='strategyContainer' >
              <div className="txtStrategy">
                <h3>
                  GERENCIAMENTO DE FLUXO DE VISITANTES É DISTINTO DE <span className='yellow-word' >IMPULSIONAR PUBLICAÇÕES</span>
                </h3>
              </div>

              <div className='txtStrategy' >
                Possuímos a capacidade analítica para avaliar o impacto das campanhas no cliente, bem como realizar modificações estratégicas.
              </div>
            </div>

          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#622b90" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,85.3C640,117,800,171,960,165.3C1120,160,1280,96,1360,64L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      </div>

    </main>
  )
}
