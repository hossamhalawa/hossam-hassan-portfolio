import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Work = () => {
  return (
    <div
      id='portfolio'
      className='grid grid-cols-1 lg:grid-cols-3 bg-cover bg-no-repeat bg-center w-full h-auto lg:h-[458px] overflow-hidden text-white'
      style={{
        backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.9), rgba(17, 17, 17, 0.9)), url("/work1.png")`
      }}
    >
      {/* Left Side */}
      <div className='flex flex-col justify-center gap-y-6 col-span-2 p-6'>
        <h2 className='font-bold text-[36px] md:text-[48px] lg:text-[60px]'>My Work</h2>

        <div className='flex items-start'>
          <Image
            src='/work-line.svg'
            width={387}
            height={5}
            alt='line'
            className='w-[200px] md:w-[300px] lg:w-[387px] h-[4px] object-cover'
          />
        </div>

        <p className='font-[400] text-[#E4E3E3] text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed'>
          This is a sample of my reports, case studies, and coaching throw-in
          session analyses I have done through my various experiences, where you
          will see skills in video illustration, tracking, tagging,
          communicating, and visualization, which contributes to augmented
          feedback.
        </p>

        {/* Drive Button */}
        <Link
          href='https://drive.google.com/drive/folders/1fBUMJU4CsKW7_M42FROiKSVAlSszTUO-?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-x-4 text-green-400 hover:text-green-300 transition'
        >
          <Image
            width={40}
            height={40}
            src='/drive.svg'
            alt='Drive'
            className='object-contain'
          />
          <span className='font-normal text-[18px] underline'>Press Me</span>
        </Link>
      </div>

      {/* Right Image */}
      <div className='w-full h-full'>
        <Image
          src='/work3.png'
          width={700}
          height={458}
          alt='Work example'
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  )
}

export default Work
