import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import WhatsAppButton from "@/components/whatsButton/page";
import './home.css';

export const metadata = {
  title: 'Squid Digital Solutions',
  description: 'Generated by Next.js',
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
        {children}
        {<Footer />}

      </body>
    </html>
  )
}
