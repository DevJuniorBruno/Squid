import './orcamento.css';
import Form from '@/components/form/page';

export default function GetOrcamento(){
    return(
        <section className='getOrcamento' >
            <div className='headerOrcamento' >
                <h1>Contratar</h1>
                <p>Contrate nossos serviços preenchendo os inputs abaixo informando seus dados </p>
            </div>
            <div className='formulario' >
                <Form/> 
            </div>

        </section>
    )
}