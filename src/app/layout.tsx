import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import WhatsAppButton from "@/components/whatsButton/page";
import Menssage from '@/components/message/page';
import './home.css';

export const metadata = {
  title: 'HOME | Squid Digital Solutions'
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        {<Header/>}
        {<WhatsAppButton/>}
        {<Menssage/>}
        {children}
        {<Footer />}

      </body>
    </html>
  )
}
