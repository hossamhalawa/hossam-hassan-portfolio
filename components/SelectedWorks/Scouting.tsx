import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Scouting = () => {
  return (
    <div className='flex sm:flex-row flex-col flex-wrap justify-between items-center gap-5 w-full'>
      {/* Scouting Button */}
      <Link
        href={'#'}
        className='bg-white hover:bg-primary px-6 py-4 rounded-md w-full sm:w-[437px] text-primary hover:text-white text-sm sm:text-base text-center transition duration-300'
      >
        Scouting
      </Link>

      {/* Report Link */}
      <Link
        href={'#'}
        className='flex items-center gap-x-4 text-primary hover:text-green-300 transition duration-300'
      >
        <Image src={'/drive.svg'} alt='drive' width={40} height={40} />
        <span className='font-light text-sm sm:text-base underline'>
          Press For Full Report
        </span>
      </Link>
    </div>
  )
}

export default Scouting
