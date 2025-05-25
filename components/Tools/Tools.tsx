import Image from 'next/image'

const Tools = () => {
  const tools = [
    'Hudl Sports',
    'Live TAG PRO',
    'Python',
    'Wyscout',
    'Veo System',
    'tacticalista',
    'Microsoft 365',
    'Opta',
    'kinovea'
  ]

  return (
    <section className='space-y-5 py-20 container'>
      <Image
        src={'/tool-title.svg'}
        alt='tool'
        width={700}
        height={100}
        className='object-fill'
      />

      <div className='gap-6 grid grid-cols-2 xl:grid-cols-3'>
        {tools.map((tool, index) => (
          <div
            key={index}
            className='group flex flex-col items-center shadow-lg rounded-lg overflow-hidden transition duration-300'
          >
            <div className='flex justify-center items-center w-full h-[60px] sm:h-[100px] md:h-[170px] overflow-hidden'>
              <div
                className='bg-cover bg-no-repeat bg-center rounded-t-lg w-full h-full scale-100 group-hover:scale-105 transition duration-300'
                style={{
                  backgroundImage: `url(/tool${ index + 1}.${'png'})`,
                   
                }}
              />
            </div>

            <div className='flex justify-center items-center bg-[#004720] group-hover:bg-white px-2 py-2 sm:py-0 w-full sm:h-[50px] text-white sm:text-[16px] md:text-[18px] group-hover:text-[#004720] text-xs text-center transition duration-300'>
              <h2 className='capitalize'>{tool}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tools
