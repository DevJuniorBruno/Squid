import Analise from '@/components/analise/page';

export const metadata = {
  title: ' SERVIÇOS | Squid Digital Solutions ',
}


export default function ServicesLayout({
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
