'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navLinks, socialLinks } from './static'
import MobileLinks from './MobileLinks'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const handleActiveLink = (prop: string) => setActiveLink(prop)
  const handleMenuOpen = (prop: boolean) => setMenuOpen(prop)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActiveLink(window.location.hash || '#home')
    }
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`top-0 fixed shadow-md py-4 w-full z-[9990] transition-colors duration-300 ${
        scrolled ? 'bg-[#1A1A1A]' : 'bg-[#1A1A1A80]'
      }`}
    >
      <div className='mx-auto px-4 container'>
        <div className='flex justify-between items-center w-full'>
          <Image
            src={'/logo.svg'}
            alt='logo'
            width={100}
            height={100}
            className='object-contain'
          />

          {/* Hamburger Icon for Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='lg:hidden text-white'
          >
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>

          {/* Desktop Nav Links */}
          <motion.div
            className='hidden lg:flex items-center gap-x-4 p-6 border border-primary rounded-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={index}
                className='transition'
              >
                <Link
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`${
                    activeLink === link.href
                      ? 'bg-primary text-white'
                      : 'hover:bg-[#3B395280] text-white'
                  } px-[30px] py-[20px] rounded-full text-[16px] transition duration-300`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className='hidden lg:flex items-center gap-x-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {socialLinks.map((social, index) => (
              <motion.div whileHover={{ scale: 1.2 }} key={index}>
                <Link
                  href={social.href}
                  className='flex justify-center items-center bg-[#3B395280] hover:bg-primary rounded-full w-[42px] h-[42px] transition duration-300'
                target='_blank'
                >
                  <Image
                    src={`/${social.name}.svg`}
                    alt={social.name}
                    width={20}
                    height={20}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Menu Animation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <MobileLinks
                activeLink={activeLink}
                handleActiveLink={handleActiveLink}
                handleMenuOpen={handleMenuOpen}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header
