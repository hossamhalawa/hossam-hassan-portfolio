import './globals.css'
import MainSection from '@/components/MainSection/MainSection'

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body id='home' className='w-full overflow-x-hidden'>
        <MainSection />
        {children}
      </body>
    </html>
  )
}
