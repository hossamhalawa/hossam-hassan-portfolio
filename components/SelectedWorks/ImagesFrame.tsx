'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'

const ImagesFrame = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleClick = (src: string) => {
    setSelectedImage(src)
  }

  return (
    <Dialog.Root
      open={!!selectedImage}
      onOpenChange={open => {
        if (!open) setSelectedImage(null)
      }}
    >
      {[1, 2, 3, 4, 5, 6].map(card => {
        const src = `/slide${card}.${card === 5 ? 'jpg' : 'png'}`
        console.log({src})
        return (
          <Image
            key={card}
            onClick={() => handleClick(src)}
            src={src}
            alt={`slide-${card}`}
            width={1000}
            height={400}
            className='rounded-md object-contain scale-100 hover:scale-105 transition duration-300 cursor-pointer'
          />
        )
      })}

      <Dialog.Portal>
        <Dialog.Overlay className='z-50 fixed inset-0 bg-black/80' />
        <Dialog.Content className='top-1/2 left-1/2 z-50 fixed -translate-x-1/2 -translate-y-1/2'>
          {selectedImage && (
            <Image
              src={selectedImage}
              alt='full-image'
              width={1000}
              height={600}
              className='rounded-md max-w-[90vw] max-h-[90vh] object-contain'
            />
          )}
          <Dialog.Close asChild>
            <button className='top-2 right-2 absolute flex justify-center items-center bg-white shadow-md rounded-full w-8 h-8 text-black'>
              ✕
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default ImagesFrame
