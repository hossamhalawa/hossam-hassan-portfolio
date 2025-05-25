'use client'
import React from 'react'
import NavContent from './NavContent'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Nav = () => {
  return (
    <nav className='py-14 container'>
      <div className='items-center gap-y-10 grid grid-cols-1 lg:grid-cols-2 mt-[100px] w-full'>
        <NavContent />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0, 10, 0] // vertical loop
          }}
          transition={{
            opacity: { duration: 0.8 },
            x: { duration: 0.8, ease: 'easeOut' },
            y: {
              duration: 4,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop'
            }
          }}
          className='group flex justify-center items-center order-1 lg:order-2 w-full'
        >
          <div
            style={{
              background:
                'linear-gradient(180deg, rgba(116, 255, 179, 0.1) 0%, rgba(172, 172, 172, 0.1) 100%)'
            }}
            className='flex justify-center items-center shadow-lg p-4 rounded-full w-[300px] md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] scale-100 group-hover:scale-110 transition duration-300'
          >
            <Image
              src='/hossam-hassan.jpg'
              alt='Hossam Hassan'
              width={460}
              height={460}
              className='rounded-full w-full h-full object-cover'
              priority
            />
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

export default Nav
