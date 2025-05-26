import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { socialLinks } from './links'

const Contact = () => {
  return (
    <section className='space-y-10 pt-16' id='contact'>
      {/* Title */}
      <div className='container'>
        <Image
          src={'/contact-title.svg'}
          alt='contact-title'
          width={700}
          height={100}
          className='w-full max-w-[600px] md:max-w-[700px] object-contain'
        />
      </div>

      {/* Content */}
      <div className='items-center grid grid-cols-1 md:grid-cols-4'>
        {/* Social Links */}
        <div className='flex justify-center items-center md:col-span-3 bg-[#24453326] p-6 rounded-md h-full'>
          <div className='flex flex-wrap justify-center gap-6'>
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

        {/* Image */}
        <div className='w-full h-full'>
          <Image
            src='/work2.webp'
            width={700}
            height={458}
            alt='Work example'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
