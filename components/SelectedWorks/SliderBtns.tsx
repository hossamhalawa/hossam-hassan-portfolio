import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

type props = {
  sliderRef: React.RefObject<Slider | null>
}
const SliderBtns = ({ sliderRef }: props) => {
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  return (
    <div className='hidden top-[40%] absolute md:flex flex-row justify-between items-center w-full'>
      <button
        className='flex justify-center items-center bg-[#0A0A0A] hover:bg-[#0A0A0A4D] rounded-full w-[80px] h-[80px] transition duration-300 prev-arrow'
        onClick={handlePrev}
      >
        <Image
          src={'/arrowLeftCarousel.svg'}
          alt={'arrowLeftCarousel'}
          width={50}
          height={50}
        />
      </button>
      <button
        className='flex justify-center items-center bg-[#0A0A0A] hover:bg-[#0A0A0A4D] rounded-full w-[80px] h-[80px] transition duration-300 next-arrow'
        onClick={handleNext}
      >
        <Image
          src={'/arrowRightCarousel.svg'}
          alt={'arrowRightCarousel'}
          width={50}
          height={50}
        />
      </button>
    </div>
  )
}

export default SliderBtns
