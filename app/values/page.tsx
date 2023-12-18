import React from 'react'
import Image from 'next/image'

export default function Values() {
    return (
        <div className='flex flex-col justify-center items-center pt-8 lg:pt-16'>
            <div className='px-4 lg:w-[50vw] gap-4 lg:gap-10 lg:pt-10 flex flex-col items-start min-h-screen font-mono'>
                <div className='self-center flex flex-col justify-center items-center pb-4 lg:pb-8'>
                    <h1 className='font-heading text-3xl lg:text-6xl tracking-wider'>Values</h1>
                </div>
                <h1 className='font-heading text-lg md:text-xl lg:text-3xl tracking-wide leading-5 lg:leading-normal'>This is the founding ground for human union</h1>
                    <p className='pl-2 lg:pl-4 text-sm md:text-md lg:text-xl font-light lg:leading-8'>
                    To agree on same values of Life is the stepping stone to coming together for a grand party on Earth as one couple, family, team or undivided human society for justful, truthful & successful co-existence as humans.</p>
                    <p className='pl-2 lg:pl-4 text-sm md:text-md lg:text-xl font-light lg:leading-8'>Here we identified and enlisted some 30 values which are seen in enlightened Human Living. The explanation of every value may be done in so many ways and words, yet the essence of each value is to be realised by the heart and understood by the mind. The list of values may evolve with time and is left to the society to do so, with consensus.</p>
                    <p className='pl-4 text-sm lg:text-xl border-4 border-gray-700 border-y-transparent border-r-transparent lg:lg:leading-8 italic'>The current draft explaining 30 values is available for download and reading here</p>
                </div>
        </div>
    )
}
