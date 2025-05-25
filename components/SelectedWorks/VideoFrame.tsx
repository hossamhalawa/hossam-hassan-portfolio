import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import Image from 'next/image'

type Props = {
  videoUrl: string
  imgBg: string
}

const VideoFrame = ({ videoUrl, imgBg }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={(val) => {
      setOpen(val)
    }}>
      <div className='relative bg-black rounded-lg overflow-hidden'>
        <div className='relative pb-[56.25%] h-0'>
          <Dialog.Trigger asChild>
            <div className='top-0 left-0 absolute w-full h-full cursor-pointer'>
              <Image
                src={imgBg}
                alt='video preview'
                fill
                className='rounded-lg object-cover'
              />
              <div className='absolute inset-0 flex justify-center items-center'>
                <div className='flex justify-center items-center bg-white/80 rounded-full w-14 h-14'>
                  <svg
                    className='w-6 h-6 text-black'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M8 5v14l11-7z' />
                  </svg>
                </div>
              </div>
            </div>
          </Dialog.Trigger>
        </div>
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className='z-50 fixed inset-0 bg-black/80' />
        <Dialog.Content className='top-1/2 left-1/2 z-50 fixed bg-black rounded-lg w-full max-w-3xl -translate-x-1/2 -translate-y-1/2'>
          <div className='relative pb-[56.25%] h-0'>
            <iframe
              src={videoUrl}
              allow='autoplay; encrypted-media'
              allowFullScreen
              className='top-0 left-0 absolute rounded-lg w-full h-full'
            />
          </div>
          <Dialog.Close asChild>
            <button className='top-2 right-2 absolute flex justify-center items-center bg-white rounded-full w-8 h-8 text-black'>
              ✕
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default VideoFrame
