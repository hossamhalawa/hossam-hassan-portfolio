import { Metadata } from 'next'
import Contact from '@/components/Contact/Contact'
import Experience from '@/components/Experience/Experience'
import Philosophy from '@/components/Philosophy/Philosophy'
import SelectedWorks from '@/components/SelectedWorks/SelectedWorks'
import Tools from '@/components/Tools/Tools'
import Work from '@/components/Work/Work'

export const metadata: Metadata = {
  title: 'Hossam Hassan',
  description:
    "Hi, I'm Hossam from Egypt. I was born in January 1999. I am an engineer and a football analyst, currently working as a performance analyst. I hold the FA Coaching Level 1 certificate.",
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg'
  }
}

export default function Home () {
  return (
    <main className='bg-black min-h-screen font-bold text-white'>
      <Philosophy />
      <Experience />
      <Work />
      <Tools />
      <SelectedWorks />
      <Contact />
    </main>
  )
}
