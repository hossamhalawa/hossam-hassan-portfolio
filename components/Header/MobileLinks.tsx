import React from 'react'
import { navLinks, socialLinks } from './static'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  activeLink: string
  handleActiveLink: (activeLink: string) => void
  handleMenuOpen: (open: boolean) => void
}
const MobileLinks = ({
  activeLink,
  handleActiveLink,
  handleMenuOpen
}: Props) => {
  return (
    <div className='lg:hidden flex flex-col items-center gap-4 mt-4'>
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          onClick={() => {
            handleActiveLink(link.href)
            handleMenuOpen(false)
          }}
          className={`w-full text-center ${
            activeLink === link.href
              ? 'bg-primary text-white'
              : 'hover:bg-[#3B395280] text-white'
          } px-4 py-3 rounded-full text-[18px] transition duration-300`}
        >
          {link.name}
        </Link>
      ))}
      <div className='flex gap-4 mt-2'>
        {socialLinks.map((social, index) => (
          <Link
            key={index}
            target='_blank'
            href={social.href}
            className='flex justify-center items-center bg-[#3B395280] hover:bg-primary rounded-full w-[42px] h-[42px] transition duration-300'
          >
            <Image
              src={`/${social.name}.svg`}
              alt={social.name}
              width={20}
              height={20}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MobileLinks
