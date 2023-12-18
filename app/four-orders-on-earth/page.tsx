import React from 'react'
import Image from 'next/image'

export default function NatureAcceptance() {
    return (
        <div className='flex flex-col justify-center items-center pt-8 lg:pt-16 pb-16'>
            <div className='px-4 lg:w-[50vw] gap-4 lg:gap-10 lg:pt-10 flex flex-col items-start min-h-screen'>
                <div className='self-center flex flex-col justify-center items-center pb-4 lg:pb-8'>
                    <h1 className='font-heading text-3xl lg:text-6xl tracking-wider'>Four Orders on Earth
                    </h1>
                </div>

                <div className=''>
                <p className='pl-2 lg:pl-4 text-sm md:text-md lg:text-xl font-light lg:leading-8'>Upon seeing, four orders reveal themselves to the seer. Every order includes and is built upon the lower order.</p>

                    <ul className='list-disc text-sm md:text-md lg:text-xl pl-6 lg:pl-12 pt-2 font-light leading-5 lg:leading-normal'>
                        <li><span className='font-bold'>Material order</span> - Ex. non living material units like atoms, stones, water etc. Innateness (Dharma) is to be/exist (with formation and deformation).</li>
                        <li><span className='font-bold'>Living (Pranic) order </span> - Microbes, plants, animal and human bodies. Its Dharma is to be & to grow (i.e. respirate, metabolize, grow individually and propogate as species).</li>
                        <li><span className='font-bold'>Animal order</span> -Self with animal body. Its dharma is to be, to grow; and the will to live.</li>
                        <li><span className='font-bold'>Knowledge order </span> - (So far on Earth) Self with human body. The knowledge order’s dharma is to be; to grow; the want to live; and the want to be in harmony (happy, peaceful, satisfied and blissful) in co-existence.</li>

                    </ul>
                <p className='pl-2 mt-2 lg:pl-4 text-sm md:text-md lg:text-xl font-light lg:leading-8'>Animals don’t and generally can’t think about the nature of Life but humans can and they do. Life in human form has the full capability and can develop the ability to grasp the knowledge of Life and Existence. This capability puts humans uniquely in the bucket of Knowledge Order on Earth. Humanity uniquely forms the knowledge order on Earth, built on top of the lower three orders which evolved and coexisted in perfect harmony.</p>
                <p className='pl-4 mt-2 text-sm my-2 lg:mt-4 lg:text-xl border-4 border-gray-700 border-y-transparent border-r-transparent lg:lg:leading-8 italic'>Humanity is yet to attain its perfection and harmony with the rest of the Nature.</p>

                </div>
 




            </div>
        </div>
    )
}
