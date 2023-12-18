import React from 'react'
import Image from 'next/image'

export default function WorkingModel() {

    const models = [
        {
            title: "Holistic education and research",
            desc: `Family education and research, covering value based consciousness development (the foundation) and skills/knowledge useful for living so that every family arrives and lives 
            at full human level, serves the co-existence in meaningful ways and is self reliant to produce goods and services and generate more resources than its needs for itself.`
        },
        {
            title: "Health and fitness ",
            desc: `Healthy lifestyle, natural healing practices, affordable medicine and cure in every neighborhood so that every family and village is self empowered to live healthy in body & mind. Also global research, cooperation and hospitals for providing medicine and cure beyond the local scope.`
        },
        {
            title: "Eco-production, work and services",
            desc: `Self-reliant families & neighborhoods producing in abundance through organic farming, cottage industry and with least dependency on heavy machinery or factories. Universal values and local resources based production, work and services in balance and symbiosis with nature and society.`
        },
        {
            title: "Justful distribution and local circular economy",
            desc: `Giving and justice based (instead of self interest & maximisation of profit based) exchange where every family sustains as a giver and reciever of abundance. Co-ownership and co-management of resources, food storage, banking, barter & exchange markets as self help groups and cooperative societies organised from village (local) to united-humane-nation (global) levels, to ensure fulfillment every family’s living needs as locally as possible along with necessary global cooperation and collaboration. To work on localised finite resource based localised economy instead of infinite resource based global consumeristic economy based on profit, hoarding, interest & inflation.`
        },
        {
            title: "Justice and celebration",
            desc: ` By justice we mean not punishment or externally forced decision making, but peace, empathy and consensus based decisions and actions that ensure all round fulfillment of all parties involved - from human to rest of nature. This culture of self discipline for justice will start from the physical family itself, and spread to the village family. From there to the World Society, to ensure justice within each family level from grassroots to up, without any arguments, court battles, fights or wars. To develop universal human values based manifesto, constitution, policies, value system and laws for decentralised self-governance, collaboration and consensual decision making, and thereby self govern as undivided human society organised from village to united-humane-nation levels. To evolve and upkeep mechanisms which ensure justful, truthful and humane social environment within participating families and to strive for the same for all humanity. To also be compassionate with other life forms and ensure that animals and natural balance don’t suffer because of human’s misguided actions. To have social celebration through festivals, fairs, events, songs, theater, arts and such expressions and gatherings, to celebrate harmonious co-existence.`
        },
        {
            title: "Nurture of nature & right utilization of resources",
            desc: `To ensure that rest of the Nature on Earth (and even beyond) is well taken care of, is enriched and thriving in parallel to humankind. To conserve and make right utilization of all natural resources - from local to world resources.
            `
        },
    ]

    return (
        <div className='flex flex-col justify-center items-center pt-8 lg:pt-16'>
            <div className='px-4 lg:w-[50vw] gap-4 lg:gap-10 lg:pt-10 flex flex-col items-start min-h-screen font-mono'>
                <div className='self-center flex flex-col justify-center items-center pb-8'>
                    <h1 className='font-heading text-3xl lg:text-6xl tracking-wider'>Working Model</h1>
                </div>

                <div className='flex flex-col gap-4'>
                    <h1 className='font-heading text-lg md:text-xl lg:text-3xl tracking-wide leading-5 lg:leading-normal'>The six dimensions of the working model for self governance</h1>
                    <p className='pl-2 lg:pl-4 text-sm md:text-md lg:text-xl font-light lg:leading-8'>The proposed working model covers six proposed dimensions for self-governed and self-sustainable families organised as grassroots based cooperatives and self help groups to co-exist in Universal orderliness across villages, neighborhoods, provinces, nations and united-humane-nation. These six dimensions broadly cover every aspect from human to nature, but can be expanded into a larger list by breaking individual dimensions if need be. This is a proposal like everything else on this website, and is kept adaptable to change.</p>
                </div>

                    <Image
                        className='self-center my-2'
                        src='/files/yogaLifemaker.png'
                        alt='Description of the image'
                        width={700}
                        height={525}
                    />

                <div>
                    <ul className='list-disc flex flex-col gap-4'>
                        {
                            models.map(model => (
                                <li className='flex flex-col gap-2'>
                                    <h1 className='font-heading text-xl'>{model.title}</h1>
                                    <p className='pl-2 lg:pl-4 text-sm md:text-md lg:text-lg font-light lg:leading-8'>{model.desc}</p>
                                </li>
                            ))
                        }

                    </ul>
                </div>

            </div>
        </div>
    )
}
