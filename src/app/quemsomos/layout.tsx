import Analise from '@/components/analise/page';

export const metadata = {
  title: 'QUEM SOMOS | Squid Digital Solutions ',

}


export default function QuemSomosayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {children}
        {<Analise/>}
       
      </section>
    )
  }
