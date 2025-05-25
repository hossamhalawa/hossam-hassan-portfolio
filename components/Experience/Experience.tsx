import Image from 'next/image'
import React from 'react'

const Experience = () => {
  const experiences = [
    'B Sport - Tactics Writer',
    'Aletihad - Tactics Writer',
    'Zamalek SC - Scout',
    'Team Sunderland - Analyst',
    'Farringdon Detached FC - Analyst',
    'Ashbrooke SC - Football PR & Data Intern',
    'Washington FC - Analyst'
  ]

  return (
    <section className='space-y-10 py-16 container' id="experience">
      {/* Responsive Image Title */}
      <div className="">
        <Image
          src={'/experience.svg'}
          alt='experience'
          width={700}
          height={100}
          className='w-full max-w-[600px] md:max-w-[700px] object-contain'
        />
      </div>

      {/* Responsive Grid */}
      <div className='gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
          <div
            key={index}
            className='group flex flex-col justify-center items-center gap-y-5 bg-white hover:bg-primary shadow-md hover:shadow-xl py-6 rounded-md text-[#121212] hover:text-[#121212] hover:text-white transition duration-300'
          >
            <Image
              src={`/ex${item}.png`}
              alt='experience'
              width={120}
              height={120}
              className='w-[120px] h-[120px] object-contain scale-100 group-hover:scale-110 transition duration-300'
            />
            <h6 className='px-4 font-medium text-[16px] sm:text-[18px] md:text-[20px] text-center'>
              {experiences[index]}
            </h6>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
