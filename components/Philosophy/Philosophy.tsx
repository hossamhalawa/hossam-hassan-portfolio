import Image from 'next/image'
import React from 'react'

const Philosophy = () => {
  return (
    <section className='space-y-10 py-16 container' id="philosophy">
      {/* Responsive Image */}
      <div className="">
        <Image
          src={'/analysis.svg'}
          alt='analysis'
          width={700}
          height={100}
          className='w-full max-w-[600px] md:max-w-[700px] object-contain'
        />
      </div>

      {/* Background section with overlay */}
      <div className='relative rounded-lg w-full overflow-hidden'>
        <div className='z-10 absolute inset-0 bg-black/60'></div>
        <div className="z-0 absolute inset-0 bg-[url('/analyitcs.png')] bg-cover bg-no-repeat bg-center"></div>

        {/* Content List */}
        <ul className='z-20 relative flex flex-col justify-center items-start md:items-center gap-y-10 md:gap-y-16 px-8 lg:px-16 py-12 md:py-20 font-normal text-[16px] text-white sm:text-[18px] md:text-[22px] lg:text-[24px] leading-[150%] list-disc'>
          <li style={{ letterSpacing: '0.5px' }}>
            I am an analyst who approaches analysis as a reverse-engineering
            process. Every detail counts, and football is not a game of
            chance—it is a structured, evolving science. Each match is a step
            toward realizing the manager’s intended style of play. Analysis
            should serve as an augmented feedback mechanism, where gaps are
            identified based on the sequence of play and the progression of the
            game.
          </li>
          <li style={{ letterSpacing: '0.5px' }}>
            With diverse experience across Egypt, the UK, and the UAE, I believe
            that football analysis—whether qualitative or quantitative—holds the
            key to answering the "why" and "how" behind every moment in the
            game.
          </li>
          <li style={{ letterSpacing: '0.5px' }}>
            My analysis process begins by identifying the patterns that define
            each phase of the game. From there, I construct a qualitative
            interpretation grounded in football knowledge. Then, I move to
            visualization and data analysis to assess how closely the
            data-driven perspective aligns with my own insights—striving to find
            common ground between the two in order to deliver the most
            meaningful and enhanced feedback possible.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Philosophy
