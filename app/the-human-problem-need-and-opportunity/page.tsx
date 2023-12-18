import React from 'react'
import Image from 'next/image'

export default function NatureAcceptance() {
    return (
        <div className='flex flex-col justify-center items-center pt-8 lg:pt-16 pb-16'>
            <div className='px-4 lg:w-[50vw] gap-4 lg:gap-10 lg:pt-10 flex flex-col items-start min-h-screen'>
                <div className='self-center flex flex-col justify-center items-center pb-4 lg:pb-8'>
                    <h1 className='font-heading text-3xl lg:text-6xl tracking-wider'>The Human Problem, need and opportunity
                    </h1>
                </div>


                <div className='flex flex-col gap-2'>
                    <h1 className='font-heading text-lg md:text-xl lg:text-3xl tracking-wide leading-5 lg:leading-normal'>The human problem</h1>
                    <p className='pl-4 text-sm my-2 lg:mt-4 lg:text-xl border-4 border-gray-700 border-y-transparent border-r-transparent lg:lg:leading-8 italic'>Our society and most of its individuals and families are not living freely, fearlessly, happily, harmoniously or mutually fulfilled, at least not all the time, if not most of the time.</p>
                    <p className='pl-2 lg:pl-4 text-sm md:text-md lg:text-xl font-light lg:leading-8'>We are suffering from never ending strife, misunderstanding, miscommunication, division, conflict and misery at all scopes of human existence - within Self, families, neighborhoods, regions, humankind and with rest of Nature.</p>
                    <p className='pl-2 lg:pl-4 text-sm md:text-md lg:text-xl font-light lg:leading-8'>Till date humankind has not been able to establish a self sustaining, familial and social order and environment, such that it fosters continuity of true liberation, happiness and fulfillment within each individual, family and all its relationships - from physical family, to village, to neighborhood, region, state, to the World Family.</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-heading text-lg md:text-xl lg:text-3xl tracking-wide leading-5 lg:leading-normal'>The universal human need</h1>
                    <p className='pl-4 my-2 lg:my-4 text-sm lg:text-xl border-4 border-gray-700 border-y-transparent border-r-transparent lg:lg:leading-8 italic'>Every human wants to feel fulfillment, happiness, peace, harmony within its Self and with rest of the World, all the time. No matter what the belief is, situation is, expectation is or decision is, every human is ultimately seeking the same in every “here and now”.</p>

                </div>
                <div className=''>
                    <h1 className='font-heading text-lg md:text-xl lg:text-3xl tracking-wide '>The opportunity, the challenge</h1>

                    <ul className='list-disc text-sm md:text-md lg:text-xl pl-6 lg:pl-12 pt-2 font-light leading-5 lg:leading-normal'>
                        <li>
                            To unite and live harmoniously, compassionately and prosperously as ONE World Family, as per the natural laws of Existence and the way we are actually, as human beings.
                        </li>
                        <li>
                            To establish and sustain a justful and resolved family as the unit of undivided society. To ensure each human family lives justfully with resolution for their material and conscious needs and responsibilities, lives happily and prosperously, in harmony with the rest of the human family & nature.
                        </li>
                        <li>
                            To collectively and consensually establish, upkeep and live by a timeless tradition of self-governance (Swarajya) which works in a fractal way of self-governance from bottom up - from family, to village, to state to world family, based on Universal understanding of Self as human, Existence as Co-existence, and universal human values.
                        </li>
                        <li>
                            To understand & live by a social working model which is naturally acceptable to every human alike, is guaranteed to satisfy all human needs & aspirations over all time to come (from material to conscious, individual to physical family to neighborhood to world family, human to nature) and helps humanity realize and demonstrate the full potential of being human.
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col gap-2'>
                    <h1 className='font-heading text-lg md:text-xl lg:text-3xl tracking-wide leading-5 lg:leading-normal'>The six dimensional working model</h1>
                    <p className='pl-2 lg:pl-4 text-sm md:text-md lg:text-xl font-light lg:leading-8'>To establish and maintain family and grassroots based tradition of happy, prosperous, peaceful and harmonious self governance, covering broadly the aspects of * human values development education (or Life education) and research * health and lifestyle * ecology friendly production and services * local circular exchange and economy * justice (everyone’s fulfillment) and celebration * nurture of nature and conservation & right utilization of all resources.</p>
                </div>
                <Image
                    className='self-center'
                    src='/human-problem.png'
                    alt='Description of the image'
                    width={700}
                    height={525}
                />
            </div>
        </div>
    )
}
