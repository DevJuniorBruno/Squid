

export const metadata = {
    title: ' SOLICITAR ORÇAMENTO | Squid Digital Solutions',
  }

  export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>        
        {children}
      </section>
    )
  }