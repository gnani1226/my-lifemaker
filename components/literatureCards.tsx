// 'use client'
import React from 'react'
// import NatureAcceptance from '../app/literature/natureAcceptance'
import Link from 'next/link'

 const LiteratureCards = ({cardDetails}) => {

  return (
    <>
<div className="grid grid-auto-fit-md gap-8 w-full">
  {cardDetails.map((card, index) => (
    <a key={index} href={card.redirectUrl} target='_blank' className="flex flex-col gap-2 mt-2 transition-transform transform hover:scale-105">
      <img src={card.imageUrl} alt={card.cardTitle} className="h-36" />
      <h1 className='font-heading lg:text-xl'>{card.cardTitle}</h1>
      <p className='text-sm md:text-md overflow-hidden'>
        {`${card.cardDescription.slice(0, 148)}`}
        <span className='pl-1 text-blue-600 font-semibold'>Read More...</span>
      </p>
    </a>
  ))}
</div>

    </>
  )
}

export  default LiteratureCards